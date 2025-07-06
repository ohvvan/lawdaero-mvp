'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { CASE_TYPES, API_ENDPOINTS, ERROR_MESSAGES } from '@/constants';

interface FormData {
  caseType: string;
  description: string;
  name: string;
  phone: string;
  ssn: string;
  bank: string;
  account: string;
  files: File[];
}

export default function SubmitPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    caseType: '',
    description: '',
    name: '',
    phone: '',
    ssn: '',
    bank: '',
    account: '',
    files: []
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        files: Array.from(e.target.files || [])
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.COMPLAINTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        router.push(`/result/${result.id}`);
      } else {
        alert(ERROR_MESSAGES.SUBMIT_FAILED);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('접수 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceedFromStep1 = formData.caseType && formData.description;
  const canProceedFromStep2 = formData.name && formData.phone && formData.ssn;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">고소장 접수</h1>
            <p className="text-xl text-gray-600">AI가 도와드리는 간편한 고소장 작성</p>
          </div>
          
          {/* Progress Bar */}
          <nav aria-label="진행 단계" className="flex items-center justify-center mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    currentStep >= step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}
                  aria-current={currentStep === step ? 'step' : undefined}
                  aria-label={`단계 ${step}${currentStep === step ? ' (현재 단계)' : ''}${currentStep > step ? ' (완료)' : ''}`}
                >
                  {currentStep > step ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    step
                  )}
                </div>
                {step < 3 && (
                  <div 
                    className={`w-20 h-1 mx-4 ${
                      currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                    aria-hidden="true"
                  ></div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="text-center">
            <span className="text-sm text-gray-500">
              {currentStep === 1 && '사건 정보 입력'}
              {currentStep === 2 && '개인 정보 입력'}  
              {currentStep === 3 && '추가 정보 & 제출'}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Case Information */}
          {currentStep === 1 && (
            <div className="card-hover animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">사건 정보를 알려주세요</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="caseType" className="block text-lg font-semibold text-gray-900 mb-3">
                    사건 유형을 선택해주세요 <span className="text-red-500" aria-label="필수 항목">*</span>
                  </label>
                  <select
                    id="caseType"
                    name="caseType"
                    required
                    value={formData.caseType}
                    onChange={handleInputChange}
                    className="select text-lg"
                    aria-describedby="caseType-help"
                  >
                    <option value="">사건 유형을 선택하세요</option>
                    {CASE_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-lg font-semibold text-gray-900 mb-3">
                    피해 상황을 자세히 설명해주세요 <span className="text-red-500" aria-label="필수 항목">*</span>
                  </label>
                  <p id="description-help" className="text-sm text-gray-600 mb-2">
                    사건의 발생 일시, 장소, 방법, 피해 내용 등을 구체적으로 작성해주세요.
                  </p>
                  <textarea
                    id="description"
                    name="description"
                    rows={8}
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    className="textarea text-lg"
                    placeholder="언제, 어디서, 어떤 일이 발생했는지 구체적으로 작성해주세요.&#10;&#10;예시:&#10;- 발생 일시: 2024년 1월 15일&#10;- 발생 장소: 서울시 강남구 ○○동&#10;- 피해 내용: 온라인 쇼핑몰에서 상품을 주문했으나 돈만 받고 상품을 보내지 않음&#10;- 피해 금액: 50만원&#10;- 상대방 정보: 쇼핑몰 운영자 김○○"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    상세할수록 더 정확한 고소장이 작성됩니다
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceedFromStep1}
                  className={`btn-primary text-lg px-8 py-4 ${
                    !canProceedFromStep1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  다음 단계 →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Personal Information */}
          {currentStep === 2 && (
            <div className="card-hover animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">개인정보를 입력해주세요</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-semibold text-gray-900 mb-3">
                      이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input text-lg"
                      placeholder="홍길동"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-lg font-semibold text-gray-900 mb-3">
                      전화번호
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input text-lg"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ssn" className="block text-lg font-semibold text-gray-900 mb-3">
                    주민등록번호
                  </label>
                  <input
                    type="text"
                    id="ssn"
                    name="ssn"
                    required
                    value={formData.ssn}
                    onChange={handleInputChange}
                    className="input text-lg"
                    placeholder="000000-0000000"
                  />
                  <div className="mt-3 p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-sm text-blue-800">
                        <strong>안전 보장:</strong> 모든 개인정보는 최고 수준의 암호화로 보호되며, 고소장 작성 목적으로만 사용됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  ← 이전 단계
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canProceedFromStep2}
                  className={`btn-primary text-lg px-8 py-4 ${
                    !canProceedFromStep2 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  다음 단계 →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Additional Information & Submit */}
          {currentStep === 3 && (
            <div className="card-hover animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">추가 정보 (선택사항)</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="bank" className="block text-lg font-semibold text-gray-900 mb-3">
                      은행명
                    </label>
                    <input
                      type="text"
                      id="bank"
                      name="bank"
                      value={formData.bank}
                      onChange={handleInputChange}
                      className="input text-lg"
                      placeholder="예: 국민은행 (피해 회복을 위한 정보)"
                    />
                  </div>

                  <div>
                    <label htmlFor="account" className="block text-lg font-semibold text-gray-900 mb-3">
                      계좌번호
                    </label>
                    <input
                      type="text"
                      id="account"
                      name="account"
                      value={formData.account}
                      onChange={handleInputChange}
                      className="input text-lg"
                      placeholder="000000-00-000000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="files" className="block text-lg font-semibold text-gray-900 mb-3">
                    증거 파일 업로드
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors duration-200">
                    <input
                      type="file"
                      id="files"
                      name="files"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="files" className="cursor-pointer">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-lg text-gray-600 mb-2">
                        클릭하여 파일을 선택하거나 드래그해서 놓으세요
                      </p>
                      <p className="text-sm text-gray-500">
                        사진, 문서, 녹음파일 등 관련 증거자료
                      </p>
                    </label>
                  </div>
                  {formData.files.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm text-gray-600 mb-2">선택된 파일:</p>
                      <ul className="space-y-1">
                        {formData.files.map((file, index) => (
                          <li key={index} className="text-sm text-blue-600 bg-blue-50 px-3 py-2 rounded-lg">
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">이제 AI가 고소장을 작성합니다!</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>입력하신 정보를 바탕으로 전문적인 고소장을 생성합니다</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>법조문과 판례를 참고하여 정확한 내용으로 작성됩니다</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>완성 후 다운로드하여 경찰서에 제출하실 수 있습니다</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn-secondary text-lg px-8 py-4"
                >
                  ← 이전 단계
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn-primary text-lg px-12 py-4 ${
                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>AI가 고소장을 작성 중...</span>
                    </div>
                  ) : (
                    'AI 고소장 생성하기'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}