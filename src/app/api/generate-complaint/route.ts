import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { caseType, description, userName, userSsn, userPhone } = await request.json();

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

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

고소장을 작성해주세요.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const complaintDraft = response.text();

    return NextResponse.json({ 
      success: true,
      complaintDraft 
    });
  } catch (error) {
    console.error('Error generating complaint:', error);
    return NextResponse.json({ 
      error: 'Failed to generate complaint' 
    }, { status: 500 });
  }
}