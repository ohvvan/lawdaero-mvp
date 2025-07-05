const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  try {
    console.log('🎨 리디자인된 메인 페이지 테스트 시작...');
    
    // 로컬 개발 서버 접속
    await page.goto('http://localhost:3003');
    await page.waitForLoadState('networkidle');
    
    // 메인 페이지 스크린샷
    await page.screenshot({ 
      path: 'screenshots/redesign-01-main.png', 
      fullPage: true 
    });
    console.log('✅ 리디자인된 메인 페이지 스크린샷 저장됨');

    // 반응형 테스트 - 모바일
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/redesign-02-mobile.png', 
      fullPage: true 
    });
    console.log('📱 모바일 반응형 스크린샷 저장됨');

    // 반응형 테스트 - 태블릿
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/redesign-03-tablet.png', 
      fullPage: true 
    });
    console.log('📱 태블릿 반응형 스크린샷 저장됨');

    // 데스크톱으로 복귀
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // 버튼 호버 효과 테스트
    await page.hover('text=무료로 고소 접수');
    await page.waitForTimeout(500);
    await page.screenshot({ 
      path: 'screenshots/redesign-04-hover.png', 
      fullPage: true 
    });
    console.log('✨ 버튼 호버 효과 스크린샷 저장됨');

    // 고소장 작성 페이지로 이동 테스트
    await page.click('text=무료로 고소 접수');
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: 'screenshots/redesign-05-submit-page.png', 
      fullPage: true 
    });
    console.log('📝 고소장 작성 페이지 스크린샷 저장됨');

    console.log('🎉 리디자인 테스트 완료!');
    
    await page.waitForTimeout(3000);

  } catch (error) {
    console.error('❌ 테스트 중 오류:', error);
  } finally {
    await browser.close();
  }
})();