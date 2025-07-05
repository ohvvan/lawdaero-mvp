# 법대로go MVP 배포 가이드

## 환경변수 설정

`.env.local` 파일을 열어서 다음 값들을 실제 값으로 변경하세요:

```
NEXT_PUBLIC_SUPABASE_URL=your_actual_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_actual_anon_key
GEMINI_API_KEY=your_actual_gemini_api_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Supabase 데이터베이스 설정

1. Supabase 대시보드에 로그인
2. SQL Editor로 이동
3. `supabase/schema.sql` 파일의 내용을 복사해서 실행

## 로컬 테스트

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

## Vercel 배포

### 방법 1: GitHub 연동 (추천)
1. 이 프로젝트를 GitHub에 푸시
2. Vercel 대시보드에서 "New Project" 클릭
3. GitHub 저장소 선택
4. 환경변수 설정:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - GEMINI_API_KEY
   - NEXT_PUBLIC_APP_URL (배포 후 실제 URL로 변경)
5. "Deploy" 클릭

### 방법 2: CLI 배포
```bash
npm i -g vercel
vercel
```

## 배포 후 설정

1. Vercel에서 생성된 URL 확인 (예: https://lawdaero-mvp.vercel.app)
2. Vercel 대시보드 > Settings > Environment Variables
3. NEXT_PUBLIC_APP_URL을 실제 배포 URL로 변경
4. Redeploy 클릭

## 보안 체크리스트

- [ ] 환경변수가 올바르게 설정되었는지 확인
- [ ] Supabase RLS(Row Level Security) 정책 확인
- [ ] API 키가 노출되지 않았는지 확인
- [ ] HTTPS가 활성화되어 있는지 확인