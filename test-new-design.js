const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  try {
    const liveUrl = 'https://lawdaero-mvp.vercel.app/';
    
    console.log('🎨 새로운 디자인 테스트 시작...');
    console.log(`📱 접속 URL: ${liveUrl}`);
    
    // 캐시 무시하고 페이지 로드
    await page.goto(liveUrl, { waitUntil: 'networkidle' });
    await page.reload({ waitUntil: 'networkidle' });
    
    // 페이지 로드 확인
    const title = await page.title();
    console.log(`📄 페이지 제목: ${title}`);
    
    // 새 디자인 요소들 확인
    const mainTitle = await page.textContent('h1');
    console.log(`✏️ 메인 타이틀: ${mainTitle}`);
    
    // 특징 카드들 확인
    const featureCards = await page.locator('.toss-card').count();
    console.log(`🎯 특징 카드 개수: ${featureCards}개`);
    
    // 네비게이션 확인
    const navigation = await page.locator('nav').isVisible();
    console.log(`🧭 네비게이션 헤더: ${navigation ? '표시됨' : '숨겨짐'}`);
    
    // 새 디자인 전체 스크린샷
    await page.screenshot({ 
      path: 'screenshots/new-design-01-full.png', 
      fullPage: true 
    });
    console.log('✅ 새 디자인 전체 스크린샷 저장됨');

    // 메인 CTA 버튼 호버 테스트
    const mainButton = await page.locator('text=무료로 고소장 작성하기');
    if (await mainButton.isVisible()) {
      console.log('✅ 메인 CTA 버튼 확인됨');
      await mainButton.hover();
      await page.waitForTimeout(500);
      await page.screenshot({ 
        path: 'screenshots/new-design-02-button-hover.png', 
        fullPage: true 
      });
      console.log('✅ 버튼 호버 효과 스크린샷 저장됨');
    }

    // 애니메이션 효과 확인 (페이지 다시 로드)
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // 애니메이션 완료 대기
    await page.screenshot({ 
      path: 'screenshots/new-design-03-animations.png', 
      fullPage: true 
    });
    console.log('✅ 애니메이션 효과 스크린샷 저장됨');

    // 모바일 반응형 테스트
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    
    // 모바일 플로팅 버튼 확인
    const floatingButton = await page.locator('.fixed.bottom-6.right-6').isVisible();
    console.log(`📱 모바일 플로팅 버튼: ${floatingButton ? '표시됨' : '숨겨짐'}`);
    
    await page.screenshot({ 
      path: 'screenshots/new-design-04-mobile.png', 
      fullPage: true 
    });
    console.log('📱 모바일 반응형 스크린샷 저장됨');

    // 태블릿 반응형 테스트
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/new-design-05-tablet.png', 
      fullPage: true 
    });
    console.log('📱 태블릿 반응형 스크린샷 저장됨');

    console.log('🎉 새 디자인 테스트 완료!');
    console.log(`🔗 라이브 사이트: ${liveUrl}`);
    
    await page.waitForTimeout(3000);

  } catch (error) {
    console.error('❌ 새 디자인 테스트 중 오류:', error);
  } finally {
    await browser.close();
  }
})();