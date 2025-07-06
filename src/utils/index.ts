import crypto from 'crypto';

/**
 * 주민등록번호를 SHA-256으로 해시화
 */
export function hashSSN(ssn: string): string {
  return crypto.createHash('sha256').update(ssn).digest('hex');
}

/**
 * 계좌정보를 Base64로 암호화 (실제 서비스에서는 더 안전한 암호화 방식 사용 필요)
 */
export function encryptBankInfo(bank: string, account: string): string | null {
  if (!bank || !account) return null;
  return Buffer.from(`${bank} ${account}`).toString('base64');
}

/**
 * 전화번호 형식 검증
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
  return phoneRegex.test(phone.replace(/-/g, ''));
}

/**
 * 주민등록번호 형식 검증 (실제 유효성 검증은 제외)
 */
export function isValidSSN(ssn: string): boolean {
  const ssnRegex = /^[0-9]{6}-?[0-9]{7}$/;
  return ssnRegex.test(ssn.replace(/-/g, ''));
}

/**
 * 날짜를 한국어 형식으로 포맷팅
 */
export function formatDateKorean(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * 파일 크기를 읽기 쉬운 형식으로 변환
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}