export default function NoticePage() {
  const notices = [
    {
      id: 1,
      title: "허위 신고 시 법적 책임 경고",
      content: "고의적인 허위 신고는 형사처벌의 대상이 될 수 있습니다. 정확한 사실에 근거한 신고만 부탁드립니다.",
      date: "2024-01-15",
      important: true
    },
    {
      id: 2,
      title: "수수료 정책 안내",
      content: "성공적 합의 시 합의금의 20% 수임료가 발생합니다. 해당 금액은 합의금 수령 시 자동 차감 후 입금 처리됩니다.",
      date: "2024-01-10",
      important: true
    },
    {
      id: 3,
      title: "서비스 이용 주의사항",
      content: "본 서비스는 법률 자문을 제공하는 것이며, 최종 판결은 법원에서 결정됩니다. 모든 절차는 관련 법령에 따라 진행됩니다.",
      date: "2024-01-05",
      important: false
    },
    {
      id: 4,
      title: "개인정보 보호 강화",
      content: "고객님의 개인정보 보호를 위해 모든 데이터는 암호화되어 저장되며, 엄격한 보안 정책을 적용하고 있습니다.",
      date: "2024-01-01",
      important: false
    },
    {
      id: 5,
      title: "운영시간 안내",
      content: "고객센터 운영시간은 평일 오전 9시부터 오후 6시까지입니다. 주말 및 공휴일에는 휴무입니다.",
      date: "2023-12-28",
      important: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">공지사항</h1>
          <p className="text-xl text-gray-600">
            중요한 서비스 정보와 업데이트 소식을 확인하세요
          </p>
        </div>

        {/* Notice List */}
        <div className="space-y-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className={`bg-white rounded-2xl p-8 shadow-sm border-l-4 ${
                notice.important 
                  ? 'border-red-500' 
                  : 'border-blue-500'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {notice.title}
                  </h2>
                  {notice.important && (
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded-full">
                      중요
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(notice.date).toLocaleDateString('ko-KR')}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {notice.content}
              </p>
            </div>
          ))}
        </div>

        {/* Legal Notice */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            법적 고지사항
          </h3>
          <div className="space-y-3 text-sm text-blue-800">
            <p>
              • 본 서비스는 법률 자문을 제공하는 것이며, 최종 판결은 법원에서 결정됩니다.
            </p>
            <p>
              • 허위 신고는 형사처벌의 대상이 될 수 있습니다.
            </p>
            <p>
              • 성공적 합의 시 합의금의 20% 수임료가 발생합니다.
            </p>
            <p>
              • 모든 절차는 관련 법령에 따라 진행됩니다.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            추가 문의사항이 있으시면 고객센터로 연락해주세요
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            고객센터 문의하기
          </a>
        </div>
      </div>
    </div>
  );
} 