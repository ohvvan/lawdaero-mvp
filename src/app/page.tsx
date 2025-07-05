import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-primary-100 text-primary-700 rounded-full text-lg font-semibold mb-8 shadow-soft">
                AI 기반 법률 서비스
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
              AI로 간편하게<br />
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                고소장 작성
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              복잡한 법률 문서 작성, 이제 AI가 도와드려요.<br />
              피해 상황만 설명하면 <strong className="text-gray-900">전문적인 고소장이 자동으로 생성</strong>됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/submit"
                className="btn-primary text-xl px-12 py-6 w-full sm:w-auto group"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>고소장 작성 시작하기</span>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/cases"
                className="btn-outline text-xl px-12 py-6 w-full sm:w-auto"
              >
                접수 현황 확인
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              왜 <span className="text-primary-600">법대로go</span>를 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전문적이고 안전하며 빠른 AI 고소장 생성 서비스
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover group animate-fade-in-up">
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">빠른 처리</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                복잡한 절차 없이 <strong>단 몇 분</strong>만에 전문적인 고소장을 완성할 수 있습니다.
              </p>
            </div>

            <div className="card-hover group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI 자동 작성</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                최신 AI 기술로 사건 내용을 분석하여 <strong>법률 전문가 수준</strong>의 고소장을 자동 생성합니다.
              </p>
            </div>

            <div className="card-hover group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-medium">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">안전한 보관</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                모든 개인정보는 <strong>최고 수준의 암호화</strong>로 보호되며 안전하게 관리됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              어떻게 작동하나요?
            </h2>
            <p className="text-xl text-gray-600">
              간단한 3단계로 고소장을 완성하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-24 h-24 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">사건 정보 입력</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                사건 유형과 피해 상황을 간단하게 설명해 주세요
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI 자동 생성</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                AI가 입력된 정보를 분석하여 전문적인 고소장을 작성합니다
              </p>
            </div>

            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">다운로드 & 제출</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                완성된 고소장을 다운로드하여 경찰서에 제출하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            지금 바로 시작해보세요
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            더 이상 복잡한 법률 문서 때문에 고민하지 마세요. 
            AI가 도와드릴게요.
          </p>
          <Link
            href="/submit"
            className="inline-block bg-white text-primary-600 font-bold py-6 px-12 rounded-3xl text-xl hover:bg-gray-100 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:scale-105 group"
          >
            <span className="flex items-center justify-center space-x-3">
              <span>무료로 고소장 작성하기</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}