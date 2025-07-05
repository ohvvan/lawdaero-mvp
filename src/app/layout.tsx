import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "법대로go - AI 고소장 자동 생성 플랫폼",
  description: "간편하게 고소장을 작성하고 관리하세요",
  keywords: "고소장, AI, 법률서비스, 자동생성, 온라인접수",
  openGraph: {
    title: "법대로go - AI 고소장 자동 생성 플랫폼",
    description: "간편하게 고소장을 작성하고 관리하세요",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">
        <div className="min-h-screen">
          <header className="glass sticky top-0 z-50 border-b border-gray-100/50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-center h-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-medium">
                    <span className="text-white font-bold text-xl">법</span>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    법대로go
                  </h1>
                </div>
                <nav className="hidden md:flex items-center space-x-2" aria-label="메인 네비게이션">
                  <a href="/" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-2xl transition-all duration-300 font-medium min-h-[48px] flex items-center focus:ring-4 focus:ring-primary-500/20 focus:outline-none" aria-current="page">홈</a>
                  <a href="/submit" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-2xl transition-all duration-300 font-medium min-h-[48px] flex items-center focus:ring-4 focus:ring-primary-500/20 focus:outline-none">고소장 접수</a>
                  <a href="/cases" className="px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-2xl transition-all duration-300 font-medium min-h-[48px] flex items-center focus:ring-4 focus:ring-primary-500/20 focus:outline-none">접수 현황</a>
                </nav>
                <div className="md:hidden">
                  <button 
                    className="p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-2xl transition-all duration-300 min-h-[48px] min-w-[48px] focus:ring-4 focus:ring-primary-500/20 focus:outline-none"
                    aria-label="메뉴 열기"
                    aria-expanded="false"
                    aria-controls="mobile-menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="sr-only">메뉴</span>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main role="main">{children}</main>
          <footer className="bg-white border-t border-gray-100" role="contentinfo">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">법</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">법대로go</h3>
                  </div>
                  <p className="text-gray-600 mb-4 max-w-md">
                    AI 기반 법률 서비스로 복잡한 고소장 작성 과정을 간편하게 만들어드립니다.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">서비스</h3>
                  <ul className="space-y-3">
                    <li><a href="/submit" className="text-gray-600 hover:text-primary-600 transition-colors">고소장 작성</a></li>
                    <li><a href="/cases" className="text-gray-600 hover:text-primary-600 transition-colors">접수 현황</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">법률 상담</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">FAQ</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">고객지원</h3>
                  <ul className="space-y-3">
                    <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">문의하기</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">이용약관</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">개인정보처리방침</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">고객센터</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-12 pt-8 text-center">
                <p className="text-gray-500 text-sm">© 2024 법대로go. All rights reserved.</p>
                <p className="text-gray-400 text-xs mt-1">AI 기반 법률 서비스 플랫폼</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
