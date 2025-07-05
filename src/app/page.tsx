import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 flex items-center justify-center relative overflow-hidden">
      {/* 로고 및 브랜드 */}
      <div className="absolute top-8 left-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
            <span className="text-white font-bold text-xl">법</span>
          </div>
          <h2 className="text-2xl font-bold text-white">법대로go</h2>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-8 text-center text-white">
        <div className="space-y-12">
          {/* 메인 타이틀 - 훨씬 큰 폰트 */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            고소는 어렵고, 변호사는 비싸다고요?
          </h1>
          
          {/* 부제목 */}
          <p className="text-2xl md:text-3xl font-medium opacity-90">
            무료로 평균 5분이면 접수 완료합니다.
          </p>
          
          {/* 액션 메시지 */}
          <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/25 shadow-lg">
            <p className="text-xl md:text-2xl font-semibold">
              접수만 하면 합의금, 형사처벌까지 모두 무료로 진행!
            </p>
          </div>
          
          {/* 메인 버튼 - 화살표 제거 */}
          <div className="pt-6">
            <Link
              href="/submit"
              className="inline-block bg-white text-blue-600 font-bold text-2xl px-16 py-6 rounded-3xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 focus:ring-4 focus:ring-white/50"
              aria-label="무료로 고소 접수하기"
            >
              무료로 고소 접수
            </Link>
          </div>
          
          {/* 간단한 네비게이션 - 실제 버튼 스타일 */}
          <div className="pt-6">
            <Link
              href="/cases"
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm text-white text-lg font-medium px-8 py-4 rounded-2xl border border-white/25 hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span className="text-xl">📊</span>
              <span>고소장 작성 현황 확인하기</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}