'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Complaint {
  id: string;
  created_at: string;
  case_type: string;
  user_name: string;
  status: string;
  description: string;
}

export default function CasesPage() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('전체');

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const response = await fetch('/api/complaints');
      if (response.ok) {
        const data = await response.json();
        setComplaints(data);
      }
    } catch (error) {
      console.error('Failed to fetch complaints:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case '접수완료':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case '검토중':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case '처리완료':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCaseTypeIcon = (caseType: string) => {
    switch (caseType) {
      case '사기': return '💰';
      case '횡령': return '🏦';
      case '배임': return '📊';
      case '명예훼손': return '💬';
      case '모욕': return '😤';
      case '협박': return '⚠️';
      case '폭행': return '👊';
      case '상해': return '🩹';
      case '절도': return '🔐';
      case '사문서위조': return '📄';
      default: return '⚖️';
    }
  };

  const filteredComplaints = filterStatus === '전체' 
    ? complaints 
    : complaints.filter(complaint => complaint.status === filterStatus);

  const statusOptions = ['전체', '접수완료', '검토중', '처리완료'];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 text-lg">접수 현황을 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">접수 현황</h1>
          <p className="text-xl text-gray-600">고소장 접수 및 처리 현황을 확인하세요</p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {statusOptions.map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {status}
                {status !== '전체' && (
                  <span className="ml-2 text-sm opacity-75">
                    ({complaints.filter(c => c.status === status).length})
                  </span>
                )}
                {status === '전체' && (
                  <span className="ml-2 text-sm opacity-75">
                    ({complaints.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cases Grid */}
        {filteredComplaints.length === 0 ? (
          <div className="toss-card text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {filterStatus === '전체' ? '접수된 고소장이 없습니다' : `${filterStatus} 상태의 사건이 없습니다`}
            </h3>
            <p className="text-gray-600 mb-6">
              새로운 고소장을 접수해보세요
            </p>
            <Link
              href="/submit"
              className="toss-button-primary inline-block"
            >
              고소장 작성하기
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComplaints.map((complaint) => (
              <Link
                key={complaint.id}
                href={`/result/${complaint.id}`}
                className="block group"
              >
                <div className="toss-card group-hover:scale-105 transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {complaint.case_type} 사건
                        </h3>
                        <p className="text-sm text-gray-600">
                          접수자: {complaint.user_name}
                        </p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBadgeColor(complaint.status)}`}>
                      {complaint.status}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {complaint.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m-6 0l6 6" />
                      </svg>
                      <span>접수일: {new Date(complaint.created_at).toLocaleDateString('ko-KR')}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600 group-hover:text-blue-700">
                      <span>자세히 보기</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="toss-card max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">새로운 사건이 있으신가요?</h3>
            <p className="text-gray-600 mb-6">
              AI가 도와드리는 간편한 고소장 작성 서비스를 이용해보세요
            </p>
            <Link
              href="/submit"
              className="toss-button-primary w-full block text-center"
            >
              + 새 고소장 작성하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}