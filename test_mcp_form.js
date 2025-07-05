// MCP Playwright로 3단계 폼 테스트
import { test, expect } from '@playwright/test';

test('고소장 작성 3단계 폼 플로우 테스트', async ({ page }) => {
  console.log('🚀 라이브 사이트 접속 중...');
  await page.goto('https://lawdaero-mvp.vercel.app/');
  await page.waitForLoadState('networkidle');
  
  // 메인 페이지 스크린샷
  await page.screenshot({ path: 'test-01-main.png', fullPage: true });
  console.log('📸 메인 페이지 스크린샷 저장');
  
  // "고소장 작성 시작하기" 버튼 클릭
  console.log('📝 고소장 작성 시작하기 버튼 클릭...');
  await page.click('a[href="/submit"]');
  await page.waitForURL('**/submit');
  
  // Submit 페이지 스크린샷
  await page.screenshot({ path: 'test-02-submit.png', fullPage: true });
  console.log('📸 Submit 페이지 스크린샷 저장');
  
  // 1단계: 사건 정보 입력
  console.log('\n=== 1단계: 사건 정보 입력 ===');
  await page.selectOption('select[name="caseType"]', '사기');
  console.log('✅ 사건 유형: 사기 선택');
  
  const description = `발생 일시: 2024년 1월 15일
발생 장소: 온라인 쇼핑몰
피해 내용: 상품을 주문하고 50만원을 결제했으나 상품을 받지 못함
상대방 정보: 쇼핑몰 운영자 김모씨`;
  
  await page.fill('textarea[name="description"]', description);
  console.log('✅ 피해 상황 설명 입력 완료');
  
  // 1단계 완료 스크린샷
  await page.screenshot({ path: 'test-03-step1-filled.png', fullPage: true });
  
  // 다음 단계 버튼 클릭
  await page.click('button:has-text("다음 단계")');
  await page.waitForTimeout(1000);
  console.log('✅ 1단계 완료 → 2단계로 이동');
  
  // 2단계: 개인정보 입력
  console.log('\n=== 2단계: 개인정보 입력 ===');
  await page.fill('input[name="name"]', '홍길동');
  await page.fill('input[name="phone"]', '010-1234-5678');
  await page.fill('input[name="ssn"]', '901010-1234567');
  console.log('✅ 개인정보 입력 완료');
  
  // 2단계 완료 스크린샷
  await page.screenshot({ path: 'test-04-step2-filled.png', fullPage: true });
  
  // 다음 단계 버튼 클릭
  await page.click('button:has-text("다음 단계")');
  await page.waitForTimeout(1000);
  console.log('✅ 2단계 완료 → 3단계로 이동');
  
  // 3단계: 추가 정보 및 제출
  console.log('\n=== 3단계: 추가 정보 및 제출 ===');
  await page.fill('input[name="bank"]', '국민은행');
  await page.fill('input[name="account"]', '123456-78-123456');
  console.log('✅ 은행 정보 입력 (선택사항)');
  
  // 3단계 완료 스크린샷
  await page.screenshot({ path: 'test-05-step3-filled.png', fullPage: true });
  
  // AI 고소장 생성하기 버튼 확인 및 클릭
  console.log('\n🤖 [AI 고소장 생성하기] 버튼 클릭 테스트...');
  
  const submitButton = page.locator('button:has-text("AI 고소장 생성하기")');
  const buttonCount = await submitButton.count();
  console.log(`버튼 개수: ${buttonCount}`);
  
  if (buttonCount > 0) {
    // 버튼 클릭 직전 스크린샷
    await page.screenshot({ path: 'test-06-before-submit.png', fullPage: true });
    
    // 버튼 클릭
    await submitButton.click();
    console.log('✅ [AI 고소장 생성하기] 버튼 클릭 성공!');
    
    // 로딩 상태 확인
    await page.waitForTimeout(3000);
    
    // 클릭 후 스크린샷
    await page.screenshot({ path: 'test-07-after-submit.png', fullPage: true });
    
    // 5초 후 URL 확인
    await page.waitForTimeout(5000);
    const currentURL = page.url();
    console.log(`현재 URL: ${currentURL}`);
    
    // 최종 결과 스크린샷
    await page.screenshot({ path: 'test-08-final-result.png', fullPage: true });
    
    if (currentURL.includes('/result/')) {
      console.log('🎉 성공! 결과 페이지로 이동됨');
    } else {
      console.log('⚠️ 결과 페이지로 이동하지 않음, 에러 가능성 있음');
      
      // 에러 메시지 확인
      const errorMessages = await page.locator('text*="오류"').allTextContents();
      if (errorMessages.length > 0) {
        console.log('❌ 에러 메시지들:');
        errorMessages.forEach(msg => console.log(`  - ${msg}`));
      }
    }
  } else {
    console.log('❌ [AI 고소장 생성하기] 버튼을 찾을 수 없음');
    
    // 모든 버튼 확인
    const allButtons = await page.locator('button').allTextContents();
    console.log('페이지의 모든 버튼들:');
    allButtons.forEach((text, i) => console.log(`  버튼 ${i}: ${text}`));
  }
  
  console.log('\n=== 테스트 완료 ===');
});