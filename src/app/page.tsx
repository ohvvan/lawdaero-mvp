import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #8b5cf6 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* 로고 */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        left: '2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <div style={{
          width: '2.5rem',
          height: '2.5rem',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '1.125rem',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          법
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>법대로go</span>
      </div>

      {/* 메인 컨텐츠 */}
      <div style={{ textAlign: 'center', maxWidth: '900px' }}>
        {/* 메인 타이틀 */}
        <h1 style={{
          fontSize: 'clamp(2rem, 8vw, 5rem)',
          fontWeight: 'bold',
          marginBottom: '2rem',
          lineHeight: '1.1'
        }}>
          고소는 어렵고,<br />
          <span style={{ color: '#fde047' }}>변호사는 비싸다고요?</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1.125rem, 4vw, 1.5rem)',
          marginBottom: '3rem',
          opacity: '0.9'
        }}>
          무료로 평균 <span style={{ color: '#fde047', fontWeight: 'bold' }}>5분</span>이면 접수 완료합니다.
        </p>

        {/* 액션 메시지 */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '1.5rem',
          padding: '2rem',
          marginBottom: '3rem',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>
            접수만 하면 합의금, 형사처벌까지 모두 무료로 진행!
          </p>
        </div>

        {/* 메인 버튼 */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            href="/submit"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#2563eb',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              padding: '1.5rem 3rem',
              borderRadius: '1.5rem',
              textDecoration: 'none',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 35px 60px -12px rgba(0, 0, 0, 0.4)';
              e.currentTarget.style.backgroundColor = '#f1f5f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            무료로 고소 접수
          </Link>
        </div>

        {/* 부가 네비게이션 */}
        <Link
          href="/cases"
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '1rem',
            textDecoration: 'none',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          📊 고소장 작성 현황 확인하기
        </Link>
      </div>
    </div>
  );
}