'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    type: '',
    title: '',
    content: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log('문의 제출:', formData);
    alert('문의가 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">고객센터</h1>
          <p className="text-xl text-gray-600">
            궁금한 점이나 문의사항이 있으시면 언제든 연락해주세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">연락처 정보</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">전화 문의</h3>
                    <p className="text-gray-600">1588-1234</p>
                    <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">이메일 문의</h3>
                    <p className="text-gray-600">support@lawdaero.go</p>
                    <p className="text-sm text-gray-500">24시간 접수 가능</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">응답 시간</h3>
                    <p className="text-gray-600">평일 24시간 이내</p>
                    <p className="text-sm text-gray-500">주말/공휴일 48시간 이내</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">자주 묻는 질문</h2>
              <div className="space-y-4">
                <a href="/faq" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-1">수수료는 얼마인가요?</h3>
                  <p className="text-sm text-gray-600">성공적 합의 시 합의금의 20% 수임료가 발생합니다</p>
                </a>
                <a href="/faq" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-1">성공 확률은 어떻게 되나요?</h3>
                  <p className="text-sm text-gray-600">모욕죄의 경우 평균 72%의 성공률을 보입니다</p>
                </a>
                <a href="/faq" className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-1">진행 과정에서 제가 할 일이 있나요?</h3>
                  <p className="text-sm text-gray-600">접수 완료 후에는 변호사가 모든 절차를 대리로 진행합니다</p>
                </a>
              </div>
              <div className="mt-6 text-center">
                <a href="/faq" className="text-blue-600 hover:underline font-medium">
                  더 많은 FAQ 보기 →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">문의하기</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                  문의 유형 <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  required
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">문의 유형을 선택하세요</option>
                  <option value="service">서비스 이용 문의</option>
                  <option value="technical">기술적 문제</option>
                  <option value="billing">결제/수수료 문의</option>
                  <option value="legal">법률 상담</option>
                  <option value="other">기타</option>
                </select>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                  제목 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="문의 제목을 입력하세요"
                />
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                  상세 내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={6}
                  required
                  value={formData.content}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="문의하실 내용을 자세히 작성해주세요"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="답변받을 이메일"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    전화번호
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
              >
                문의하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 