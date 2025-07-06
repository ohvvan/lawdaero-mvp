// 사건 유형 상수
export const CASE_TYPES = [
  '사기',
  '횡령',
  '배임',
  '명예훼손',
  '모욕',
  '협박',
  '폭행',
  '상해',
  '절도',
  '사문서위조',
  '기타'
] as const;

// 접수 상태
export const COMPLAINT_STATUS = {
  PENDING: '접수대기',
  COMPLETED: '접수완료',
  IN_PROGRESS: '처리중',
  REJECTED: '반려'
} as const;

// API 엔드포인트
export const API_ENDPOINTS = {
  COMPLAINTS: '/api/complaints',
  GENERATE_COMPLAINT: '/api/generate-complaint'
} as const;

// 페이지 라우트
export const ROUTES = {
  HOME: '/',
  SUBMIT: '/submit',
  RESULT: '/result',
  CASES: '/cases',
  ABOUT: '/about',
  CONTACT: '/contact',
  FAQ: '/faq',
  NOTICE: '/notice',
  AUTH: '/auth',
  ACCOUNT: '/account'
} as const;

// 폼 단계
export const FORM_STEPS = {
  CASE_INFO: 1,
  PERSONAL_INFO: 2,
  ADDITIONAL_INFO: 3
} as const;

// 에러 메시지
export const ERROR_MESSAGES = {
  REQUIRED_FIELD: '필수 입력 항목입니다.',
  INVALID_PHONE: '올바른 전화번호 형식이 아닙니다.',
  INVALID_SSN: '올바른 주민등록번호 형식이 아닙니다.',
  SUBMIT_FAILED: '접수 중 오류가 발생했습니다.',
  GENERATION_FAILED: 'AI 고소장 생성에 실패했습니다.'
} as const;

// 성공 메시지
export const SUCCESS_MESSAGES = {
  SUBMIT_SUCCESS: '고소장이 성공적으로 접수되었습니다.',
  SAVE_SUCCESS: '저장되었습니다.'
} as const;