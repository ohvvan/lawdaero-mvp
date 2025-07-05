export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            피해자는 더 이상 혼자 고민하지 않습니다
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            과도한 시간과 비용 없이, 무료로 법률 대리인이 돕습니다. 
            법의 문턱을 낮추는 것이 저희의 목표입니다.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                우리의 미션
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                법률 서비스는 누구나 쉽게 접근할 수 있어야 한다고 믿습니다. 
                복잡한 법률 절차와 높은 비용 때문에 피해를 입고도 고소를 포기하는 
                사람들이 너무 많습니다.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                저희는 AI 기술을 활용하여 법률 서비스의 접근성을 혁신적으로 
                개선하고, 모든 피해자가 정의를 찾을 수 있도록 돕겠습니다.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">신뢰할 수 있는 파트너</h3>
                  <p className="text-gray-600">전문 변호사와 AI의 조합으로 최고의 서비스를 제공합니다</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">빠른 처리</h3>
                    <p className="text-gray-600">평균 5분 내 고소장 작성 완료</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">무료 서비스</h3>
                    <p className="text-gray-600">고소장 작성부터 합의금 수령까지 무료</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">AI 기술</h3>
                    <p className="text-gray-600">최신 AI로 전문적인 고소장 자동 생성</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              전문 변호사 팀
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              각 분야의 전문 변호사들이 AI와 함께 최고의 법률 서비스를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 변호사 프로필 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">김</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">김민수 변호사</h3>
              <p className="text-blue-600 font-medium mb-4">형사 전문</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                15년간 형사사건 전문 변호사로 활동하며, 
                수많은 성공 사례를 만들어왔습니다.
              </p>
            </div>

            {/* 변호사 프로필 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">이</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">이지영 변호사</h3>
              <p className="text-green-600 font-medium mb-4">사기/횡령 전문</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                경제사범 전문 변호사로, 복잡한 사기사건의 
                해결에 특화되어 있습니다.
              </p>
            </div>

            {/* 변호사 프로필 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">박</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">박준호 변호사</h3>
              <p className="text-purple-600 font-medium mb-4">명예훼손/모욕 전문</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                온라인 명예훼손과 모욕죄 전문 변호사로, 
                디지털 증거 수집에 특화되어 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,000+</div>
              <p className="text-blue-100">성공한 사건</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
              <p className="text-blue-100">고객 만족도</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5분</div>
              <p className="text-blue-100">평균 처리 시간</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">무료</div>
              <p className="text-blue-100">서비스 비용</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            지금 바로 시작해보세요
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            복잡한 법률 절차 없이, AI가 도와드리는 간편한 고소장 작성 서비스를 
            무료로 이용해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-colors"
            >
              무료로 고소장 작성하기
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 