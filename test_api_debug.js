// API 디버깅 테스트
const testData = {
  caseType: '사기',
  description: '발생 일시: 2024년 1월 15일\n발생 장소: 온라인 쇼핑몰\n피해 내용: 상품을 주문하고 50만원을 결제했으나 상품을 받지 못함\n상대방 정보: 쇼핑몰 운영자 김모씨',
  name: '홍길동',
  phone: '010-1234-5678',
  ssn: '901010-1234567',
  bank: '국민은행',
  account: '123456-78-123456',
  files: []
};

async function testComplaintAPI() {
  console.log('🧪 고소장 접수 API 테스트 시작...');
  
  try {
    console.log('📤 /api/complaints 호출 중...');
    console.log('요청 데이터:', testData);
    
    const response = await fetch('https://lawdaero-mvp.vercel.app/api/complaints', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });
    
    console.log('📋 응답 상태:', response.status, response.statusText);
    console.log('📋 응답 헤더:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API 응답 실패:');
      console.error('Status:', response.status);
      console.error('Error Text:', errorText);
      return;
    }
    
    const result = await response.json();
    console.log('✅ API 응답 성공:');
    console.log(JSON.stringify(result, null, 2));
    
    if (result.id) {
      console.log(`🎉 고소장 ID: ${result.id}`);
      console.log(`📄 결과 페이지: https://lawdaero-mvp.vercel.app/result/${result.id}`);
    }
    
  } catch (error) {
    console.error('❌ 네트워크 오류:', error);
  }
}

async function testGenerateAPI() {
  console.log('\n🧪 AI 고소장 생성 API 단독 테스트...');
  
  const generateData = {
    caseType: testData.caseType,
    description: testData.description,
    userName: testData.name,
    userSsn: testData.ssn,
    userPhone: testData.phone
  };
  
  try {
    console.log('📤 /api/generate-complaint 호출 중...');
    console.log('요청 데이터:', generateData);
    
    const response = await fetch('https://lawdaero-mvp.vercel.app/api/generate-complaint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(generateData)
    });
    
    console.log('📋 응답 상태:', response.status, response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ 생성 API 응답 실패:');
      console.error('Status:', response.status);
      console.error('Error Text:', errorText);
      return;
    }
    
    const result = await response.json();
    console.log('✅ 생성 API 응답 성공:');
    console.log('Success:', result.success);
    console.log('Message:', result.message || 'No message');
    console.log('Draft Length:', result.complaintDraft ? result.complaintDraft.length : 0);
    
    if (result.complaintDraft) {
      console.log('📄 생성된 고소장 (처음 200자):');
      console.log(result.complaintDraft.substring(0, 200) + '...');
    }
    
  } catch (error) {
    console.error('❌ 생성 API 네트워크 오류:', error);
  }
}

// 순차적으로 테스트 실행
async function runAllTests() {
  await testGenerateAPI();
  await testComplaintAPI();
}

runAllTests();