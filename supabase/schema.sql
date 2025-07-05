-- 사건 접수 테이블
CREATE TABLE IF NOT EXISTS complaints (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  case_type VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  ssn_hash VARCHAR(255) NOT NULL, -- 주민번호는 해시화하여 저장
  bank_info TEXT, -- 암호화하여 저장
  evidence_files JSONB DEFAULT '[]'::jsonb,
  complaint_draft TEXT,
  status VARCHAR(50) DEFAULT '접수완료',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 파일 업로드 정보 테이블
CREATE TABLE IF NOT EXISTS uploaded_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  complaint_id UUID REFERENCES complaints(id) ON DELETE CASCADE,
  file_name VARCHAR(255) NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  mime_type VARCHAR(100),
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 변호사 코멘트 테이블
CREATE TABLE IF NOT EXISTS lawyer_comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  complaint_id UUID REFERENCES complaints(id) ON DELETE CASCADE,
  comment TEXT NOT NULL,
  created_by VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security 활성화
ALTER TABLE complaints ENABLE ROW LEVEL SECURITY;
ALTER TABLE uploaded_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE lawyer_comments ENABLE ROW LEVEL SECURITY;

-- 기본 정책 설정 (추후 인증 시스템 구현 시 수정 필요)
CREATE POLICY "Enable read access for all users" ON complaints
  FOR SELECT USING (true);

CREATE POLICY "Enable insert for all users" ON complaints
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable update for all users" ON complaints
  FOR UPDATE USING (true);

-- 인덱스 생성
CREATE INDEX idx_complaints_status ON complaints(status);
CREATE INDEX idx_complaints_created_at ON complaints(created_at DESC);
CREATE INDEX idx_complaints_case_type ON complaints(case_type);