'use client';

import { useState } from 'react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    name: '홍길동',
    email: 'hong@example.com',
    phone: '010-1234-5678',
    ssn: '901010-1******',
    bank: '국민은행',
    account: '123-456-789012'
  });

  const [cases] = useState([
    {
      id: 'CASE001',
      type: '모욕',
      status: '변호사 검토 중',
      date: '2024-01-15',
      description: '온라인상에서 욕설을 당했습니다.'
    },
    {
      id: 'CASE002',
      type: '사기',
      status: '상대방 합의 시도 중',
      date: '2024-01-10',
      description: '온라인 쇼핑몰에서 상품을 주문했으나 돈만 받고 상품을 보내지 않음'
    }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '접수완료':
        return 'bg-blue-100 text-blue-800';
      case '변호사 검토 중':
        return 'bg-yellow-100 text-yellow-800';
      case '상대방 합의 시도 중':
        return 'bg-green-100 text-green-800';
      case '처리완료':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">내 계정</h1>
          <p className="text-xl text-gray-600">
            회원정보와 진행 중인 사건을 관리하세요
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  회원정보
                </button>
                <button
                  onClick={() => setActiveTab('cases')}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeTab === 'cases'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  진행 중인 사건
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                    activeTab === 'security'
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  보안 설정
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">회원정보</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        이름
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        이메일
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        전화번호
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="ssn" className="block text-sm font-medium text-gray-700 mb-2">
                        주민등록번호
                      </label>
                      <input
                        type="text"
                        id="ssn"
                        name="ssn"
                        value={userData.ssn}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        readOnly
                      />
                      <p className="text-sm text-gray-500 mt-1">보안을 위해 마스킹 처리됩니다</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="bank" className="block text-sm font-medium text-gray-700 mb-2">
                        은행명
                      </label>
                      <input
                        type="text"
                        id="bank"
                        name="bank"
                        value={userData.bank}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="account" className="block text-sm font-medium text-gray-700 mb-2">
                        계좌번호
                      </label>
                      <input
                        type="text"
                        id="account"
                        name="account"
                        value={userData.account}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                      정보 수정
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Cases Tab */}
            {activeTab === 'cases' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">진행 중인 사건</h2>
                  
                  {cases.length === 0 ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">진행 중인 사건이 없습니다</h3>
                      <p className="text-gray-600 mb-6">새로운 고소장을 작성해보세요</p>
                      <a
                        href="/submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                      >
                        고소장 작성하기
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cases.map((caseItem) => (
                        <div key={caseItem.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {caseItem.type} 사건 - {caseItem.id}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                접수일: {new Date(caseItem.date).toLocaleDateString('ko-KR')}
                              </p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(caseItem.status)}`}>
                              {caseItem.status}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-4">{caseItem.description}</p>
                          <div className="flex justify-between items-center">
                            <a
                              href={`/result/${caseItem.id}`}
                              className="text-blue-600 hover:underline font-medium"
                            >
                              자세히 보기 →
                            </a>
                            <button className="text-gray-500 hover:text-gray-700">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Additional Evidence Upload */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">추가 증거/서류 업로드</h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-600 mb-2">파일을 선택하거나 여기에 드롭하세요</p>
                    <p className="text-sm text-gray-500">이미지, 동영상, 문서 파일 지원</p>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">보안 설정</h2>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-gray-900">2단계 인증</h3>
                      <p className="text-sm text-gray-600">SMS 인증을 통한 추가 보안</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      설정
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-gray-900">비밀번호 변경</h3>
                      <p className="text-sm text-gray-600">정기적인 비밀번호 변경으로 보안 강화</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      변경
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h3 className="font-semibold text-gray-900">로그인 기록</h3>
                      <p className="text-sm text-gray-600">최근 로그인 활동 확인</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      확인
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 