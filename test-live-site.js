const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  try {
    const liveUrl = 'https://lawdaero-4qwrjt2tg-seoulls-projects.vercel.app';
    
    console.log('🌍 실제 배포된 사이트 테스트 시작...');
    console.log(`📱 접속 URL: ${liveUrl}`);
    
    await page.goto(liveUrl);
    await page.waitForLoadState('networkidle');
    
    // 라이브 사이트 메인 페이지 스크린샷
    await page.screenshot({ 
      path: 'screenshots/live-01-main.png', 
      fullPage: true 
    });
    console.log('✅ 라이브 메인 페이지 스크린샷 저장됨');

    // 성능 측정
    const performanceTimings = await page.evaluate(() => {
      const navigation = performance.getEntriesByType('navigation')[0];
      return {
        dns: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
        connect: Math.round(navigation.connectEnd - navigation.connectStart),
        response: Math.round(navigation.responseEnd - navigation.responseStart),
        dom: Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart),
        load: Math.round(navigation.loadEventEnd - navigation.navigationStart)
      };
    });
    
    console.log('📊 성능 지표:');
    console.log(`   DNS 조회: ${performanceTimings.dns}ms`);
    console.log(`   연결 시간: ${performanceTimings.connect}ms`);
    console.log(`   응답 시간: ${performanceTimings.response}ms`);
    console.log(`   DOM 로드: ${performanceTimings.dom}ms`);
    console.log(`   전체 로드: ${performanceTimings.load}ms`);

    // 반응형 테스트 - 모바일
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/live-02-mobile.png', 
      fullPage: true 
    });
    console.log('📱 모바일 반응형 스크린샷 저장됨');

    // 반응형 테스트 - 태블릿
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: 'screenshots/live-03-tablet.png', 
      fullPage: true 
    });
    console.log('📱 태블릿 반응형 스크린샷 저장됨');

    // 데스크톱으로 복귀
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // 고소장 작성 페이지 테스트
    console.log('🔄 고소장 작성 페이지 이동...');
    await page.click('text=고소장 작성 시작하기');
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: 'screenshots/live-04-submit.png', 
      fullPage: true 
    });
    console.log('✅ 라이브 고소장 접수 페이지 스크린샷 저장됨');

    // 접근성 테스트
    console.log('♿ 접근성 테스트 중...');
    const accessibilityIssues = await page.evaluate(() => {
      const issues = [];
      
      // 이미지 alt 속성 확인
      const images = document.querySelectorAll('img');
      images.forEach((img, i) => {
        if (!img.alt) {
          issues.push(`이미지 ${i+1}: alt 속성 누락`);
        }
      });
      
      // 버튼 접근성 확인
      const buttons = document.querySelectorAll('button');
      buttons.forEach((btn, i) => {
        if (!btn.textContent.trim() && !btn.getAttribute('aria-label')) {
          issues.push(`버튼 ${i+1}: 텍스트 또는 aria-label 누락`);
        }
      });
      
      return issues;
    });
    
    if (accessibilityIssues.length === 0) {
      console.log('✅ 기본 접근성 검사 통과');
    } else {
      console.log('⚠️ 접근성 개선 필요:', accessibilityIssues);
    }

    console.log('🎉 라이브 사이트 테스트 완료!');
    console.log(`🔗 누구나 접속 가능: ${liveUrl}`);
    
    await page.waitForTimeout(3000);

  } catch (error) {
    console.error('❌ 라이브 사이트 테스트 중 오류:', error);
  } finally {
    await browser.close();
  }
})();