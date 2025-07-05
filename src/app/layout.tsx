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
          <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex justify-between items-center h-20">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">법</span>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    법대로go
                  </h1>
                </div>
                <nav className="hidden md:flex items-center space-x-1" aria-label="메인 네비게이션">
                  <a href="/" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium min-h-[44px] flex items-center focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" aria-current="page">홈</a>
                  <a href="/submit" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium min-h-[44px] flex items-center focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">고소장 접수</a>
                  <a href="/cases" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium min-h-[44px] flex items-center focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">접수 현황</a>
                </nav>
                <div className="md:hidden">
                  <button 
                    className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200 min-h-[44px] min-w-[44px] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
            <div className="max-w-6xl mx-auto px-6 py-8">
              <div className="text-center text-gray-500">
                <p className="text-sm">© 2024 법대로go. All rights reserved.</p>
                <p className="text-xs mt-1">AI 기반 법률 서비스 플랫폼</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
