import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// API 키 검증
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error('GEMINI_API_KEY가 설정되지 않았습니다.');
}

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const { caseType, description, userName, userSsn, userPhone } = await request.json();

    // 필수 필드 검증
    if (!caseType || !description || !userName || !userSsn || !userPhone) {
      return NextResponse.json({ 
        error: '필수 정보가 누락되었습니다.' 
      }, { status: 400 });
    }

    // API 키가 없으면 바로 fallback 템플릿 사용
    if (!genAI || !apiKey) {
      console.log('GEMINI_API_KEY가 없어 기본 템플릿을 사용합니다.');
      const fallbackDraft = generateFallbackTemplate(caseType, description, userName, userSsn, userPhone);
      
      return NextResponse.json({ 
        success: true,
        complaintDraft: fallbackDraft,
        message: 'AI 서비스가 일시적으로 사용할 수 없어 기본 템플릿을 사용했습니다.'
      });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // AppScript 데모의 프롬프트를 참조하여 개선
    const prompt = `당신은 전문 법무사입니다. 아래 정보를 바탕으로 정식 고소장을 작성해주세요.

사건 유형: ${caseType}
피해 설명: ${description}

고소인 정보:
- 성명: ${userName}
- 주민등록번호: ${userSsn.substring(0, 6)}-*******
- 전화번호: ${userPhone}

고소장 작성 요구사항:
1. 정식 법률 문서 형식으로 작성
2. 고소장 제목, 고소인 정보, 피고소인 정보, 고소 취지, 고소 이유, 입증 방법 등 포함
3. 해당 사건 유형에 적합한 법조문 인용
4. 전문적이고 정확한 법률 용어 사용
5. 실제 경찰서에 제출 가능한 수준의 완성도
6. 한국어로 작성하고, 법률 문서의 표준 형식을 따름

고소장을 작성해주세요.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const complaintDraft = response.text();

    // 응답 검증
    if (!complaintDraft || complaintDraft.trim().length === 0) {
      throw new Error('AI가 고소장을 생성하지 못했습니다.');
    }

    return NextResponse.json({ 
      success: true,
      complaintDraft 
    });
  } catch (error) {
    console.error('Error generating complaint:', error);
    
    // AI 생성 실패시 기본 템플릿 반환
    const { caseType, description, userName, userSsn, userPhone } = await request.json();
    
    const fallbackDraft = generateFallbackTemplate(caseType, description, userName, userSsn, userPhone);

    return NextResponse.json({ 
      success: true,
      complaintDraft: fallbackDraft,
      message: 'AI 생성에 실패하여 기본 템플릿을 사용했습니다.'
    });
  }
}

// Fallback 템플릿 생성 함수
function generateFallbackTemplate(caseType: string, description: string, userName: string, userSsn: string, userPhone: string) {
  const currentDate = new Date().toLocaleDateString('ko-KR');
  
  return `고 소 장

고소인
성명: ${userName}
주민등록번호: ${userSsn.substring(0, 6)}-*******
전화번호: ${userPhone}
주소: (고소인의 실제 주소를 기재하세요)

피고소인
성명: 불상
주민등록번호: 불상
주소: 불상

고소 취지
피고소인을 ${caseType}죄로 처벌하여 주시기 바랍니다.

고소 이유
${description}

입증 방법
1. 증거자료 첨부
2. 증인 진술
3. 기타 관련 자료

위와 같은 사실로 피고소인을 고소하오니 철저히 수사하여 엄벌에 처해 주시기 바랍니다.

${currentDate}

고소인 ${userName} (인)

○○경찰서장 귀하`;
}