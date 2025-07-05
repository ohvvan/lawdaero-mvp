const { chromium } = require('playwright');

(async () => {
  // 브라우저 실행
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  try {
    console.log('1. 메인 페이지 접속 중...');
    await page.goto('http://localhost:3001');
    await page.waitForLoadState('networkidle');
    
    // 메인 페이지 스크린샷
    await page.screenshot({ 
      path: 'screenshots/01-main-page.png', 
      fullPage: true 
    });
    console.log('✅ 메인 페이지 스크린샷 저장됨');

    console.log('2. "고소장 작성 시작하기" 버튼 클릭...');
    await page.click('text=고소장 작성 시작하기');
    await page.waitForLoadState('networkidle');
    
    // 고소장 접수 페이지 스크린샷
    await page.screenshot({ 
      path: 'screenshots/02-submit-page.png', 
      fullPage: true 
    });
    console.log('✅ 고소장 접수 페이지 스크린샷 저장됨');

    console.log('3. 사건 유형 선택...');
    await page.selectOption('select[name="caseType"]', '사기');
    
    console.log('4. 피해 상황 입력...');
    await page.fill('textarea[name="description"]', '온라인 쇼핑몰에서 제품을 주문했으나 가짜 제품을 받았습니다. 결제 금액은 50만원이었으며, 판매자와 연락이 되지 않습니다.');
    
    // 폼 입력 완료 후 스크린샷
    await page.screenshot({ 
      path: 'screenshots/03-form-filled.png', 
      fullPage: true 
    });
    console.log('✅ 폼 입력 완료 스크린샷 저장됨');

    console.log('5. 다음 단계 버튼 클릭...');
    await page.click('text=다음');
    await page.waitForTimeout(1000);
    
    // 2단계 페이지 스크린샷
    await page.screenshot({ 
      path: 'screenshots/04-step2.png', 
      fullPage: true 
    });
    console.log('✅ 2단계 페이지 스크린샷 저장됨');

    console.log('6. 개인정보 입력 테스트...');
    await page.fill('input[name="name"]', '홍길동');
    await page.fill('input[name="phone"]', '010-1234-5678');
    await page.fill('input[name="ssn"]', '900101-1******');
    
    // 개인정보 입력 후 스크린샷
    await page.screenshot({ 
      path: 'screenshots/05-personal-info.png', 
      fullPage: true 
    });
    console.log('✅ 개인정보 입력 스크린샷 저장됨');

    console.log('🎉 모든 테스트 완료! 5개의 스크린샷이 screenshots/ 폴더에 저장되었습니다.');
    
    // 5초 후 브라우저 종료
    await page.waitForTimeout(5000);

  } catch (error) {
    console.error('❌ 테스트 중 오류 발생:', error);
  } finally {
    await browser.close();
  }
})();