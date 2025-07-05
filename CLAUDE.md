# 법대로go MVP - 프로젝트 가이드

## 📋 프로젝트 개요
- **이름**: 법대로go MVP
- **설명**: AI 기반 고소장 자동 생성 서비스
- **기술스택**: Next.js 15.3.5, Tailwind CSS, Supabase, TypeScript
- **배포**: Vercel (자동 배포)

## 🔄 배포 프로세스

### 1. 로컬 → GitHub → Vercel 자동 배포 흐름
```
로컬 코드 수정 → git add → git commit → git push → GitHub → Vercel 자동 배포
```

### 2. GitHub 저장소 정보
- **저장소**: https://github.com/ohvvan/lawdaero-mvp.git
- **브랜치**: main
- **소유자**: ohvvan

### 3. Vercel 배포 설정
- **라이브 사이트**: https://lawdaero-mvp.vercel.app/
- **배포 방식**: GitHub 연동 자동 배포
- **배포 시간**: 푸시 후 약 1-2분

## 🛠️ 배포 명령어

### Git 기본 명령어
```bash
# 변경사항 확인
git status

# 모든 변경사항 스테이지에 추가
git add -A

# 커밋 (커밋 메시지는 HEREDOC 사용)
git commit -m "$(cat <<'EOF'
커밋 메시지 내용

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# GitHub에 푸시 (자동 배포 트리거)
git push origin main
```

### 배포 확인
```bash
# 최근 커밋 확인
git log --oneline -5

# 현재 브랜치 및 리모트 상태 확인
git status
```

## 🎨 디자인 시스템

### Tailwind CSS 설정
- **색상 팔레트**: primary (파란색), gray (회색)
- **커스텀 컴포넌트**: btn-primary, btn-outline, card-hover
- **애니메이션**: fade-in-up, bounce-gentle
- **반응형**: 모바일 우선 설계

### 주요 컴포넌트 클래스
```css
.btn-primary     /* 메인 버튼 */
.btn-outline     /* 아웃라인 버튼 */
.card-hover      /* 호버 효과 카드 */
.hero-gradient   /* 히어로 섹션 배경 */
```

## 📁 프로젝트 구조

```
lawdaero-mvp/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 메인 랜딩페이지
│   │   ├── submit/page.tsx   # 고소장 작성 페이지
│   │   ├── cases/page.tsx    # 현황 확인 페이지
│   │   └── globals.css       # 전역 CSS (Tailwind + 커스텀)
│   └── lib/
│       └── supabase/         # Supabase 클라이언트
├── reference/                # 디자인 참고 이미지
├── tailwind.config.ts        # Tailwind 설정
└── CLAUDE.md                 # 이 파일
```

## 🔧 개발 환경

### 필수 명령어
```bash
# 개발 서버 실행
npm run dev

# 빌드 (배포 전 테스트)
npm run build

# 타입 체크
npm run typecheck

# 린트 체크
npm run lint
```

### 환경 변수
- `.env.local` 파일에 Supabase 및 Gemini API 키 설정
- 환경 변수는 Git에 커밋하지 않음

## 📈 배포 모니터링

### 배포 상태 확인 방법
1. **Vercel 대시보드**: https://vercel.com/dashboard
2. **GitHub Actions**: 자동 배포 로그 확인
3. **라이브 사이트**: https://lawdaero-mvp.vercel.app/

### 배포 실패 시 대처
1. GitHub 저장소의 Actions 탭에서 에러 로그 확인
2. Vercel 대시보드에서 배포 실패 원인 분석
3. 로컬에서 `npm run build`로 빌드 에러 사전 확인

## 🎯 주요 페이지

### 1. 메인 페이지 (`/`)
- 현대적인 랜딩페이지 디자인
- 히어로 섹션 + 기능 소개 + 작동 방식 + CTA
- 완전 반응형 디자인

### 2. 고소장 작성 페이지 (`/submit`)
- 다단계 폼 인터페이스
- AI 기반 고소장 생성

### 3. 현황 확인 페이지 (`/cases`)
- 작성된 고소장 목록 및 상태 확인

## 💡 개발 팁

### 코드 수정 후 배포 절차
1. 로컬에서 코드 수정
2. `npm run build`로 빌드 테스트
3. `git add -A && git commit && git push`
4. 1-2분 후 라이브 사이트 확인

### 디자인 수정 시 주의사항
- Tailwind CSS 클래스 사용 권장
- 커스텀 CSS는 globals.css에서 관리
- 반응형 디자인 고려 필수

## 🚀 배포 자동화

현재 설정된 자동 배포 시스템:
- **트리거**: main 브랜치 푸시
- **플랫폼**: Vercel
- **빌드 명령**: `npm run build`
- **배포 시간**: 평균 1-2분

모든 코드 변경사항은 GitHub에 푸시하면 자동으로 라이브 사이트에 반영됩니다.