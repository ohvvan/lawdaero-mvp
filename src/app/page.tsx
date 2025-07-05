import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center toss-hero-gradient" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-white/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6" role="banner">
                🚀 AI 기반 법률 서비스
              </span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-tight">
              AI로 간편하게<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                고소장 작성
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              복잡한 법률 문서 작성, 이제 AI가 도와드려요.<br />
              피해 상황만 설명하면 <strong className="text-gray-900">전문적인 고소장이 자동으로 생성</strong>됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" role="group" aria-label="주요 액션">
              <Link
                href="/submit"
                className="toss-button-primary text-lg px-10 py-5 w-full sm:w-auto"
                aria-describedby="cta-description"
              >
                ✨ 고소장 작성 시작하기
              </Link>
              <Link
                href="/cases"
                className="toss-button-secondary text-lg px-10 py-5 w-full sm:w-auto"
              >
                📊 접수 현황 확인
              </Link>
            </div>
            <div id="cta-description" className="sr-only">
              고소장 작성 페이지로 이동하여 3단계 프로세스로 간편하게 고소장을 작성할 수 있습니다.
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bounce-animation" aria-hidden="true">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white" aria-labelledby="features-title">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="features-title" className="text-3xl font-bold text-gray-900 mb-3">
              왜 <span className="text-blue-600">법대로go</span>를 선택해야 할까요?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              전문적이고 안전하며 빠른 AI 고소장 생성 서비스
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            <div className="toss-card group hover:scale-105 transition-transform duration-300" role="listitem">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ 빠른 처리</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                복잡한 절차 없이 <strong>단 몇 분</strong>만에 전문적인 고소장을 완성할 수 있습니다.
              </p>
            </div>

            <div className="toss-card group hover:scale-105 transition-transform duration-300" role="listitem">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🤖 AI 자동 작성</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                최신 AI 기술로 사건 내용을 분석하여 <strong>법률 전문가 수준</strong>의 고소장을 자동 생성합니다.
              </p>
            </div>

            <div className="toss-card group hover:scale-105 transition-transform duration-300" role="listitem">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔒 안전한 보관</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                모든 개인정보는 <strong>최고 수준의 암호화</strong>로 보호되며 안전하게 관리됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50" aria-labelledby="how-it-works-title">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="how-it-works-title" className="text-3xl font-bold text-gray-900 mb-3">
              어떻게 작동하나요?
            </h2>
            <p className="text-lg text-gray-600">
              간단한 3단계로 고소장을 완성하세요
            </p>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
            <li className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">사건 정보 입력</h3>
              <p className="text-gray-600 text-sm">
                사건 유형과 피해 상황을 간단하게 설명해 주세요
              </p>
            </li>

            <li className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI 자동 생성</h3>
              <p className="text-gray-600 text-sm">
                AI가 입력된 정보를 분석하여 전문적인 고소장을 작성합니다
              </p>
            </li>

            <li className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">다운로드 & 제출</h3>
              <p className="text-gray-600 text-sm">
                완성된 고소장을 다운로드하여 경찰서에 제출하세요
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600" aria-labelledby="cta-title">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-title" className="text-3xl font-bold text-white mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            더 이상 복잡한 법률 문서 때문에 고민하지 마세요. 
            AI가 도와드릴게요.
          </p>
          <Link
            href="/submit"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[44px] min-w-[44px] focus:ring-2 focus:ring-white focus:ring-offset-2"
            aria-label="무료로 고소장 작성 시작하기"
          >
            무료로 고소장 작성하기 →
          </Link>
        </div>
      </section>
    </div>
  );
}