# 법대로go MVP

## 프로젝트 소개
AI 기반 고소장 자동 생성 서비스입니다. 사용자가 입력한 사건 정보를 바탕으로 전문적인 고소장을 자동으로 생성합니다.

## 기술 스택
- **Frontend**: Next.js 15.3.5, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **AI**: Google Generative AI (Gemini)
- **Deployment**: Vercel

## 프로젝트 구조
```
lawdaero-mvp/
├── .env.local            # 로컬 환경 변수 (Git 제외)
├── .env.example          # 환경 변수 예시
├── .gitignore            # Git 제외 파일 목록
├── .next/                # Next.js 빌드 캐시 (자동 생성, Git 제외)
├── README.md             # 프로젝트 문서
├── next-env.d.ts         # Next.js TypeScript 정의
├── next.config.ts        # Next.js 설정
├── node_modules/         # npm 패키지 (자동 생성, Git 제외)
├── package.json          # 프로젝트 의존성 및 스크립트
├── package-lock.json     # 의존성 잠금 파일
├── postcss.config.mjs    # PostCSS 설정 (Tailwind CSS용)
├── tailwind.config.ts    # Tailwind CSS 설정
├── tsconfig.json         # TypeScript 설정
├── public/               # 정적 파일
│   ├── file.svg          # 파일 아이콘
│   ├── globe.svg         # 글로브 아이콘
│   ├── next.svg          # Next.js 로고
│   ├── vercel.svg        # Vercel 로고
│   └── window.svg        # 윈도우 아이콘
├── reference/            # 디자인 참고 자료
│   ├── 고소장.png        # 고소장 디자인 참고
│   └── 메인사이트.png    # 메인 사이트 디자인 참고
├── src/                  # 소스 코드
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API 라우트
│   │   │   ├── complaints/       # 고소장 관련 API
│   │   │   │   ├── [id]/         # 개별 고소장 조회
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts      # 고소장 목록/생성
│   │   │   └── generate-complaint/  # AI 고소장 생성
│   │   │       └── route.ts
│   │   ├── about/page.tsx        # 소개 페이지
│   │   ├── account/page.tsx      # 계정 페이지
│   │   ├── auth/page.tsx         # 인증 페이지
│   │   ├── cases/page.tsx        # 사건 현황 페이지
│   │   ├── contact/page.tsx      # 연락처 페이지
│   │   ├── faq/page.tsx          # FAQ 페이지
│   │   ├── notice/page.tsx       # 공지사항 페이지
│   │   ├── result/[id]/page.tsx  # 결과 페이지
│   │   ├── submit/page.tsx       # 고소장 작성 페이지
│   │   ├── favicon.ico           # 파비콘
│   │   ├── globals.css           # 전역 CSS (Tailwind 포함)
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   └── page.tsx              # 메인 페이지
│   ├── components/       # 재사용 가능한 컴포넌트 (준비중)
│   ├── constants/        # 상수 정의
│   │   └── index.ts      # 프로젝트 전역 상수
│   ├── lib/              # 라이브러리 설정
│   │   └── supabase/     # Supabase 클라이언트
│   │       ├── client.ts         # 브라우저 클라이언트
│   │       ├── middleware.ts     # 미들웨어용 클라이언트
│   │       └── server.ts         # 서버 클라이언트
│   ├── types/            # TypeScript 타입 정의
│   │   └── complaint.ts  # 고소장 관련 타입
│   ├── utils/            # 유틸리티 함수
│   │   └── index.ts      # 공통 유틸리티
│   └── middleware.ts     # Next.js 미들웨어
└── supabase/             # 데이터베이스
    └── schema.sql        # 테이블 스키마
```

## 개발 환경

### 환경 변수
모든 환경 변수는 Vercel 대시보드에서 관리됩니다:
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase 프로젝트 URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase 익명 키
- `GOOGLE_AI_API_KEY`: Google AI API 키
- `NEXT_PUBLIC_APP_URL`: 애플리케이션 URL

### 개발 프로세스
1. 코드 수정
2. GitHub에 push
3. Vercel이 자동으로 빌드 및 배포
4. https://lawdaero-mvp.vercel.app/ 에서 확인

**참고**: 로컬 개발 서버는 환경 변수가 Vercel에만 설정되어 있어 실행이 제한적입니다.

## 주요 기능

### 1. 3단계 고소장 작성 프로세스
- **1단계**: 사건 유형 선택 및 피해 상황 입력
- **2단계**: 개인정보 입력
- **3단계**: 추가 정보 입력 및 제출

### 2. AI 고소장 생성
- Google Generative AI를 활용한 전문적인 고소장 자동 생성
- 사건 유형에 맞는 법조문 인용 및 전문 용어 사용

### 3. 데이터 보안
- 주민등록번호는 SHA-256으로 해시화하여 저장
- 계좌정보는 암호화하여 저장
- Supabase Row Level Security 적용

## 배포

### GitHub → Vercel 자동 배포
1. GitHub 저장소: `https://github.com/ohvvan/lawdaero-mvp.git`
2. main 브랜치에 push 시 자동 배포
3. 배포 URL: `https://lawdaero-mvp.vercel.app/`

### 배포 프로세스
```bash
# 1. 코드 변경사항 확인
git status

# 2. 모든 변경사항 스테이지에 추가
git add -A

# 3. 커밋
git commit -m "커밋 메시지"

# 4. GitHub에 푸시 (자동 배포 트리거)
git push origin main
```


## 주의사항

1. **환경 변수 보안**
   - `.env.local` 파일은 절대 Git에 커밋하지 마세요
   - 프로덕션 환경 변수는 Vercel 대시보드에서 관리

2. **개인정보 처리**
   - 주민등록번호는 반드시 해시화하여 저장
   - 민감한 정보는 암호화 필수

3. **코드 수정 시**
   - 빌드 테스트 후 배포 (`npm run build`)
   - TypeScript 타입 체크 확인
   - 코드 스타일 일관성 유지

## 주요 파일 설명

### 설정 파일
- **node_modules/**: npm install 시 자동 생성되는 패키지 폴더 (Git 제외)
- **.env.local**: 로컬 개발용 환경 변수 (Git 제외, 실제로는 Vercel 환경 변수 사용)
- **.env.example**: 환경 변수 예시 파일
- **.next/**: Next.js 빌드 시 생성되는 캐시 폴더 (Git 제외)

### 코드 파일
- **src/app/api/**: API 엔드포인트 (complaints, generate-complaint)
- **src/constants/**: 프로젝트 전역 상수 (사건 유형, 에러 메시지 등)
- **src/utils/**: 유틸리티 함수 (암호화, 유효성 검사 등)
- **src/types/**: TypeScript 타입 정의

## 개발 가이드

### 커밋 컨벤션
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- style: 코드 포맷팅
- refactor: 코드 리팩토링
- test: 테스트 추가/수정
- chore: 기타 변경사항

### 디자인 시스템
- **색상**: primary (파란색), secondary (보라색), gray
- **버튼**: btn-primary, btn-secondary, btn-outline
- **카드**: card-hover (호버 효과)
- **애니메이션**: fade-in-up, bounce-gentle

## 문제 해결

### 빌드 실패 시
1. `npm run build`로 로컬에서 에러 확인
2. TypeScript 에러 확인: `npm run typecheck`
3. 환경 변수 설정 확인

### 배포 실패 시
1. Vercel 대시보드에서 로그 확인
2. 환경 변수가 올바르게 설정되었는지 확인
3. GitHub Actions 로그 확인

## 추가 개발 계획
- [ ] 파일 업로드 기능 구현
- [ ] 변호사 코멘트 기능 추가
- [ ] 사용자 인증 시스템 구현
- [ ] 고소장 PDF 다운로드 기능
