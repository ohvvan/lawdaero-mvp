import asyncio
from playwright.async_api import async_playwright
import time

async def test_complaint_form():
    """3단계 고소장 작성 폼 테스트"""
    
    async with async_playwright() as p:
        # 브라우저 실행
        browser = await p.chromium.launch(headless=False, slow_mo=1000)
        context = await browser.new_context(
            viewport={'width': 1280, 'height': 720},
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        )
        page = await context.new_page()
        
        try:
            print("🚀 라이브 사이트 접속 중...")
            await page.goto('https://lawdaero-mvp.vercel.app/', wait_until='networkidle')
            await page.wait_for_timeout(2000)
            
            # 메인 페이지에서 "고소장 작성 시작하기" 버튼 클릭
            print("📝 고소장 작성 시작하기 버튼 클릭...")
            submit_button = page.locator('a[href="/submit"]').first
            await submit_button.click()
            await page.wait_for_url('**/submit')
            await page.wait_for_timeout(2000)
            
            print("✅ Submit 페이지 로드 완료")
            
            # 1단계: 사건 정보 입력
            print("\n=== 1단계: 사건 정보 입력 ===")
            
            # 사건 유형 선택
            await page.select_option('select[name="caseType"]', '사기')
            print("✅ 사건 유형: 사기 선택")
            
            # 피해 상황 설명 입력
            description = """발생 일시: 2024년 1월 15일
발생 장소: 온라인 쇼핑몰
피해 내용: 상품을 주문하고 50만원을 결제했으나 상품을 받지 못함
상대방 정보: 쇼핑몰 운영자 김모씨"""
            
            await page.fill('textarea[name="description"]', description)
            print("✅ 피해 상황 설명 입력 완료")
            
            # 다음 단계 버튼 클릭
            next_button = page.locator('button:has-text("다음 단계")')
            await next_button.click()
            await page.wait_for_timeout(1000)
            print("✅ 1단계 완료 → 2단계로 이동")
            
            # 2단계: 개인정보 입력
            print("\n=== 2단계: 개인정보 입력 ===")
            
            await page.fill('input[name="name"]', '홍길동')
            print("✅ 이름 입력")
            
            await page.fill('input[name="phone"]', '010-1234-5678')
            print("✅ 전화번호 입력")
            
            await page.fill('input[name="ssn"]', '901010-1234567')
            print("✅ 주민등록번호 입력")
            
            # 다음 단계 버튼 클릭
            next_button2 = page.locator('button:has-text("다음 단계")')
            await next_button2.click()
            await page.wait_for_timeout(1000)
            print("✅ 2단계 완료 → 3단계로 이동")
            
            # 3단계: 추가 정보 및 제출
            print("\n=== 3단계: 추가 정보 및 제출 ===")
            
            # 선택사항 입력
            await page.fill('input[name="bank"]', '국민은행')
            await page.fill('input[name="account"]', '123456-78-123456')
            print("✅ 은행 정보 입력 (선택사항)")
            
            # AI 고소장 생성하기 버튼 클릭 - 이 부분이 문제였음
            print("\n🤖 [AI 고소장 생성하기] 버튼 클릭 테스트...")
            
            submit_final_button = page.locator('button:has-text("AI 고소장 생성하기")')
            
            # 버튼이 존재하는지 확인
            button_count = await submit_final_button.count()
            print(f"버튼 개수: {button_count}")
            
            if button_count > 0:
                # 버튼 클릭
                await submit_final_button.click()
                print("✅ [AI 고소장 생성하기] 버튼 클릭 성공!")
                
                # 로딩 상태 확인
                loading_text = page.locator('text="AI가 고소장을 작성 중..."')
                if await loading_text.count() > 0:
                    print("⏳ AI 고소장 작성 중... 대기")
                    await page.wait_for_timeout(3000)
                
                # 결과 페이지로 이동했는지 확인
                await page.wait_for_timeout(5000)
                current_url = page.url
                print(f"현재 URL: {current_url}")
                
                if '/result/' in current_url:
                    print("🎉 성공! 결과 페이지로 이동됨")
                else:
                    print("⚠️  결과 페이지로 이동하지 않음, 에러 가능성 있음")
                    
                    # 에러 메시지 확인
                    error_elements = await page.locator('text*="오류"').all()
                    if error_elements:
                        print("❌ 에러 메시지 발견")
                        for element in error_elements:
                            error_text = await element.text_content()
                            print(f"에러: {error_text}")
            else:
                print("❌ [AI 고소장 생성하기] 버튼을 찾을 수 없음")
                
                # 페이지 내용 확인
                page_content = await page.content()
                print("페이지에 있는 버튼들:")
                buttons = await page.locator('button').all()
                for i, button in enumerate(buttons):
                    text = await button.text_content()
                    print(f"  버튼 {i}: {text}")
            
            print("\n=== 테스트 완료 ===")
            
        except Exception as e:
            print(f"❌ 테스트 중 오류 발생: {e}")
            # 현재 URL과 페이지 상태 출력
            print(f"현재 URL: {page.url}")
            
        finally:
            await browser.close()

# 테스트 실행
if __name__ == "__main__":
    asyncio.run(test_complaint_form())