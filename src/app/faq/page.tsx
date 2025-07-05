'use client';

import { useState } from 'react';

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: "수수료는 얼마인가요?",
      answer: "성공적 합의 시 합의금의 20% 수임료가 발생합니다. 해당 금액은 합의금 수령 시 자동 차감 후 입금 처리됩니다. 합의 불성립 시에는 수수료가 발생하지 않습니다."
    },
    {
      id: 2,
      question: "성공 확률은 어떻게 되나요?",
      answer: "모욕죄의 경우: • 벌금 선고 확률: 72% • 평균 합의금: 90만 원 • 전과 기록 남을 가능성: 약 50% • 실제 판례: 2023고단1234 (요약문 링크)"
    },
    {
      id: 3,
      question: "진행 과정에서 제가 할 일이 있나요?",
      answer: "접수 완료 후에는 변호사가 모든 절차를 대리로 진행합니다. 필요시에만 추가 자료 요청이나 진행 상황을 안내드립니다."
    },
    {
      id: 4,
      question: "합의가 안 되면 어떻게 되나요?",
      answer: "합의가 불성립되면 경찰 수사가 진행되며, 검찰 송치 후 기소 여부가 결정됩니다. 이 경우에도 변호사가 지속적으로 사건을 관리합니다."
    },
    {
      id: 5,
      question: "고소장 작성에 얼마나 걸리나요?",
      answer: "평균 5분 내에 AI가 전문적인 고소장을 작성합니다. 작성된 고소장은 변호사의 검토를 거쳐 최종 제출됩니다."
    },
    {
      id: 6,
      question: "어떤 사건 유형을 처리할 수 있나요?",
      answer: "사기, 횡령, 배임, 명예훼손, 모욕, 협박, 폭행, 상해, 절도, 사문서위조 등 다양한 형사사건을 처리합니다."
    },
    {
      id: 7,
      question: "개인정보는 안전한가요?",
      answer: "모든 개인정보는 최고 수준의 암호화로 보호되며, 고소장 작성 목적으로만 사용됩니다. 엄격한 보안 정책을 적용하고 있습니다."
    },
    {
      id: 8,
      question: "증거자료는 어떻게 제출하나요?",
      answer: "사건 접수 시 이미지, 동영상, 문서 등 증거자료를 업로드할 수 있습니다. 파일 크기는 총 50MB까지 가능합니다."
    },
    {
      id: 9,
      question: "진행 상황을 어떻게 확인할 수 있나요?",
      answer: "접수 현황 페이지에서 실시간으로 진행 상황을 확인할 수 있으며, 주요 단계별로 SMS 알림을 발송합니다."
    },
    {
      id: 10,
      question: "환불 정책은 어떻게 되나요?",
      answer: "서비스 자체는 무료이므로 환불이 발생하지 않습니다. 합의금 수령 시에만 20% 수임료가 차감됩니다."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">자주 묻는 질문</h1>
          <p className="text-xl text-gray-600">
            고객님들이 자주 묻는 질문들을 모았습니다
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    openItems.includes(faq.id) ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItems.includes(faq.id) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-blue-100 mb-6">
            위의 FAQ에서 답변을 찾지 못하셨다면, 고객센터로 문의해주세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              고객센터 문의하기
            </a>
            <a
              href="tel:1588-1234"
              className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              1588-1234
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-600">고객 만족도</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">24시간</div>
            <p className="text-gray-600">평균 응답 시간</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">1,000+</div>
            <p className="text-gray-600">성공한 사건</p>
          </div>
        </div>
      </div>
    </div>
  );
} 