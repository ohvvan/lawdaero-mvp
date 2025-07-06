export interface Complaint {
  id: string;
  created_at: string;
  case_type: string;
  description: string;
  user_name: string;
  phone: string;
  ssn_hash: string;
  bank_info?: string;
  evidence_files: any[];
  complaint_draft?: string;
  status: string;
  updated_at: string;
}

export interface UploadedFile {
  id: string;
  complaint_id: string;
  file_name: string;
  file_url: string;
  file_size?: number;
  mime_type?: string;
  uploaded_at: string;
}

export interface LawyerComment {
  id: string;
  complaint_id: string;
  comment: string;
  created_by?: string;
  created_at: string;
}

export interface ComplaintFormData {
  caseType: string;
  description: string;
  userName: string;
  phone: string;
  ssn: string;
  bankInfo?: string;
  evidenceFiles?: File[];
}