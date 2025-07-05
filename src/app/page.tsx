import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center overflow-hidden">
      {/* 로고 및 브랜드 */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
            <span className="text-white font-bold text-xl">법</span>
          </div>
          <h2 className="text-2xl font-bold text-white">법대로go</h2>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <div className="space-y-8">
          {/* 메인 타이틀 */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            고소는 어렵고, 변호사는 비싸다고요?
          </h1>
          
          {/* 부제목 */}
          <p className="text-xl md:text-2xl font-medium opacity-90">
            무료로 평균 5분이면 접수 완료합니다.
          </p>
          
          {/* 액션 메시지 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-lg md:text-xl font-semibold">
              접수만 하면 합의금, 형사처벌까지 모두 무료로 진행!
            </p>
          </div>
          
          {/* 메인 버튼 */}
          <div className="pt-4">
            <Link
              href="/submit"
              className="inline-flex items-center justify-center bg-white text-blue-600 font-bold text-xl px-12 py-5 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 min-h-[64px] min-w-[280px] focus:ring-4 focus:ring-white/50 group relative overflow-hidden"
              aria-label="무료로 고소 접수하기"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>무료로 고소 접수</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
          
          {/* 간단한 네비게이션 */}
          <div className="pt-8 border-t border-white/20">
            <Link
              href="/cases"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white text-lg transition-all duration-300 hover:bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105"
            >
              <span className="text-xl">📊</span>
              <span>고소장 작성 현황 확인하기</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}