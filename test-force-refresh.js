const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });
  const page = await context.newPage();

  try {
    const liveUrl = 'https://lawdaero-mvp.vercel.app/';
    
    console.log('🔄 강제 새로고침으로 캐시 무시하고 테스트...');
    
    // 캐시 클리어 및 강제 새로고침
    await page.goto(liveUrl);
    await page.evaluate(() => {
      // 브라우저 캐시 클리어 시도
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => {
            caches.delete(name);
          });
        });
      }
    });
    
    // Hard refresh (Ctrl+F5 equivalent)
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    
    // 현재 상태 스크린샷
    await page.screenshot({ 
      path: 'screenshots/force-refresh-test.png', 
      fullPage: true 
    });
    console.log('📸 강제 새로고침 후 스크린샷 저장됨');
    
    // CSS 로드 상태 확인
    const stylesheets = await page.evaluate(() => {
      const sheets = Array.from(document.styleSheets);
      return sheets.map(sheet => ({
        href: sheet.href,
        rules: sheet.cssRules ? sheet.cssRules.length : 0
      }));
    });
    
    console.log('🎨 로드된 CSS 파일들:');
    stylesheets.forEach(sheet => {
      console.log(`   - ${sheet.href}: ${sheet.rules} rules`);
    });
    
    // 특정 요소들의 computed style 확인
    const mainDivBg = await page.evaluate(() => {
      const mainDiv = document.querySelector('div');
      return mainDiv ? window.getComputedStyle(mainDiv).backgroundColor : 'not found';
    });
    
    console.log(`🎯 메인 div 배경색: ${mainDivBg}`);
    
    const h1Style = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      if (!h1) return 'h1 not found';
      const style = window.getComputedStyle(h1);
      return {
        color: style.color,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight
      };
    });
    
    console.log(`📝 H1 스타일:`, h1Style);
    
    await page.waitForTimeout(5000);

  } catch (error) {
    console.error('❌ 강제 새로고침 테스트 중 오류:', error);
  } finally {
    await browser.close();
  }
})();