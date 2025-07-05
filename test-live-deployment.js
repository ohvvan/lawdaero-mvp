const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  try {
    const liveUrl = 'https://lawdaero-mvp.vercel.app/';
    
    console.log('🚀 실시간 배포 확인 중...');
    console.log(`📱 접속 URL: ${liveUrl}`);
    
    // 캐시 무시하고 새로고침
    await page.goto(liveUrl, { waitUntil: 'networkidle' });
    await page.reload({ waitUntil: 'networkidle' });
    
    // 페이지 로드 상태 확인
    const title = await page.title();
    console.log(`📄 페이지 제목: ${title}`);
    
    // 새 디자인이 적용되었는지 확인
    const bgColor = await page.evaluate(() => {
      const body = document.querySelector('body');
      return window.getComputedStyle(body).backgroundColor;
    });
    console.log(`🎨 배경색 확인: ${bgColor}`);
    
    // 메인 타이틀 확인
    const mainTitle = await page.textContent('h1');
    console.log(`✏️ 메인 타이틀: ${mainTitle}`);
    
    // 새 배포 스크린샷
    await page.screenshot({ 
      path: 'screenshots/live-deployment-01-main.png', 
      fullPage: true 
    });
    console.log('✅ 새 배포 메인 페이지 스크린샷 저장됨');

    // 버튼 인터랙션 테스트
    const mainButton = await page.locator('text=무료로 고소 접수');
    if (await mainButton.isVisible()) {
      console.log('✅ 메인 버튼 확인됨');
      await mainButton.hover();
      await page.waitForTimeout(500);
      await page.screenshot({ 
        path: 'screenshots/live-deployment-02-button-hover.png', 
        fullPage: true 
      });
      console.log('✅ 버튼 호버 효과 스크린샷 저장됨');
    }

    // 반응형 테스트
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/live-deployment-03-mobile.png', 
      fullPage: true 
    });
    console.log('📱 모바일 반응형 스크린샷 저장됨');

    console.log('🎉 실시간 배포 테스트 완료!');
    console.log(`🔗 라이브 사이트: ${liveUrl}`);
    
    await page.waitForTimeout(3000);

  } catch (error) {
    console.error('❌ 배포 테스트 중 오류:', error);
  } finally {
    await browser.close();
  }
})();