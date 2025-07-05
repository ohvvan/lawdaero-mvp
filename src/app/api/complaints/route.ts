import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import crypto from 'crypto';

export async function GET() {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('complaints')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    return NextResponse.json({ error: 'Failed to fetch complaints' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('POST /api/complaints 호출됨');
    const supabase = await createClient();
    const body = await request.json();
    console.log('요청 데이터:', body);

    // 주민번호 해시화
    const ssnHash = crypto.createHash('sha256').update(body.ssn).digest('hex');
    
    // 계좌정보 암호화 (실제 서비스에서는 더 안전한 암호화 방식 사용)
    const bankInfo = body.bank && body.account ? 
      Buffer.from(`${body.bank} ${body.account}`).toString('base64') : null;

    // AI 고소장 생성
    let complaintDraft = '';
    try {
      const generateResponse = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/generate-complaint`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          caseType: body.caseType,
          description: body.description,
          userName: body.name,
          userSsn: body.ssn,
          userPhone: body.phone
        })
      });

      if (generateResponse.ok) {
        const result = await generateResponse.json();
        complaintDraft = result.complaintDraft;
      } else {
        // AI 생성 실패시 기본 템플릿 사용
        complaintDraft = `고 소 장

고소인
성명: ${body.name}
주민등록번호: ${body.ssn.substring(0, 6)}-*******
전화번호: ${body.phone}

피고소인
성명: 불상
주민등록번호: 불상
주소: 불상

고소 취지
피고소인을 ${body.caseType}죄로 처벌하여 주시기 바랍니다.

고소 사실
${body.description}

위와 같은 사실로 피고소인을 고소하오니 철저히 수사하여 엄벌에 처해 주시기 바랍니다.

${new Date().toLocaleDateString('ko-KR')}

고소인 ${body.name} (인)

○○경찰서장 귀하`;
      }
    } catch (error) {
      console.error('Error generating complaint with AI:', error);
      // AI 생성 실패시 기본 템플릿 사용
      complaintDraft = `고 소 장

고소인
성명: ${body.name}
주민등록번호: ${body.ssn.substring(0, 6)}-*******
전화번호: ${body.phone}

피고소인
성명: 불상
주민등록번호: 불상
주소: 불상

고소 취지
피고소인을 ${body.caseType}죄로 처벌하여 주시기 바랍니다.

고소 사실
${body.description}

위와 같은 사실로 피고소인을 고소하오니 철저히 수사하여 엄벌에 처해 주시기 바랍니다.

${new Date().toLocaleDateString('ko-KR')}

고소인 ${body.name} (인)

○○경찰서장 귀하`;
    }

    // 데이터베이스에 저장
    console.log('Supabase에 데이터 저장 시도...');
    const { data, error } = await supabase
      .from('complaints')
      .insert({
        case_type: body.caseType,
        description: body.description,
        user_name: body.name,
        phone: body.phone,
        ssn_hash: ssnHash,
        bank_info: bankInfo,
        complaint_draft: complaintDraft,
        status: '접수완료'
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase 저장 오류:', error);
      throw error;
    }
    
    console.log('Supabase 저장 성공:', data);

    return NextResponse.json({ 
      success: true, 
      id: data.id,
      message: '고소장이 성공적으로 접수되었습니다.' 
    });
  } catch (error) {
    console.error('Error creating complaint:', error);
    return NextResponse.json({ 
      error: 'Failed to create complaint' 
    }, { status: 500 });
  }
}