import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* 백그라운드 장식 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      {/* 네비게이션 헤더 */}
      <nav className="relative z-10 p-6 lg:p-8">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">법</span>
            </div>
            <span className="text-xl font-bold text-gray-800">법대로go</span>
          </div>
          
          <Link 
            href="/cases" 
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            작성 현황
          </Link>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center space-y-12">
          
          {/* 메인 타이틀 */}
          <div className="space-y-6 fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              고소는 어렵고,<br />
              <span className="text-blue-600">변호사는 비싸다고요?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto">
              AI가 도와드립니다. 평균 <span className="text-blue-600 font-semibold">5분</span>이면 무료로 접수 완료
            </p>
          </div>

          {/* 특징 카드들 */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="toss-card text-center space-y-4 fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900">빠른 처리</h3>
              <p className="text-gray-600 text-sm">평균 5분 내로<br />고소장 작성 완료</p>
            </div>
            
            <div className="toss-card text-center space-y-4 fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-gray-900">완전 무료</h3>
              <p className="text-gray-600 text-sm">접수부터 합의금,<br />형사처벌까지 무료</p>
            </div>
            
            <div className="toss-card text-center space-y-4 fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-gray-900">AI 지원</h3>
              <p className="text-gray-600 text-sm">전문 법률 지식을<br />쉽게 안내</p>
            </div>
          </div>

          {/* 메인 액션 영역 */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 max-w-2xl mx-auto fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  지금 바로 시작하세요
                </h2>
                <p className="text-gray-600">
                  복잡한 법률 절차를 간단하게. 전문가 수준의 고소장을 몇 분 만에 완성하세요.
                </p>
              </div>
              
              {/* 메인 CTA 버튼 */}
              <Link
                href="/submit"
                className="toss-button-primary w-full text-xl py-5 block text-center group"
                aria-label="무료로 고소장 작성 시작하기"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>무료로 고소장 작성하기</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              
              {/* 보조 정보 */}
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>개인정보 보호</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>24시간 접수</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>전문가 검토</span>
                </div>
              </div>
            </div>
          </div>

          {/* 부가 정보 섹션 */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 fade-in-up" style={{animationDelay: '0.5s'}}>
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  이미 <span className="text-blue-600">1,000+</span>명이 이용했어요
                </h3>
                <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                  전문 변호사가 검토한 AI 시스템으로 정확하고 빠른 고소장 작성이 가능합니다. 
                  복잡한 법률 용어도 쉽게 이해할 수 있도록 안내해드려요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 플로팅 액션 버튼 (모바일용) */}
      <div className="fixed bottom-6 right-6 z-20 md:hidden">
        <Link
          href="/submit"
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
          aria-label="고소장 작성하기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </Link>
      </div>
    </div>
  );
}