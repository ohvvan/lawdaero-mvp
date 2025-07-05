'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface ComplaintDetail {
  id: string;
  created_at: string;
  case_type: string;
  description: string;
  user_name: string;
  phone: string;
  complaint_draft: string;
  status: string;
  evidence_files: any[];
}

export default function ResultPage() {
  const params = useParams();
  const [complaint, setComplaint] = useState<ComplaintDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showFullComplaint, setShowFullComplaint] = useState(false);

  useEffect(() => {
    if (params.id) {
      fetchComplaint(params.id as string);
    }
  }, [params.id]);

  const fetchComplaint = async (id: string) => {
    try {
      const response = await fetch(`/api/complaints/${id}`);
      if (response.ok) {
        const data = await response.json();
        setComplaint(data);
      }
    } catch (error) {
      console.error('Failed to fetch complaint:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!complaint) return;
    
    const element = document.createElement('a');
    const file = new Blob([complaint.complaint_draft], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `고소장_${complaint.case_type}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 text-lg">고소장을 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!complaint) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="toss-card text-center py-16">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">고소장을 찾을 수 없습니다</h3>
            <p className="text-gray-600 mb-6">
              요청하신 고소장이 존재하지 않거나 삭제되었을 수 있습니다.
            </p>
            <Link href="/" className="toss-button-primary inline-block">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">고소장 생성 완료!</h1>
          <p className="text-xl text-gray-600">
            AI가 작성한 전문적인 고소장이 준비되었습니다
          </p>
        </div>

        {/* Case Overview */}
        <div className="toss-card mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{complaint.case_type} 사건</h2>
                <p className="text-gray-600">접수자: {complaint.user_name}</p>
              </div>
            </div>
            <div className={`px-4 py-2 rounded-xl text-sm font-semibold border ${getStatusBadgeColor(complaint.status)}`}>
              {complaint.status}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div>
                <span className="text-gray-500">접수 일시</span>
                <p className="font-medium text-gray-900">
                  {new Date(complaint.created_at).toLocaleString('ko-KR')}
                </p>
              </div>
              <div>
                <span className="text-gray-500">연락처</span>
                <p className="font-medium text-gray-900">{complaint.phone}</p>
              </div>
            </div>
            <div>
              <span className="text-gray-500">사건 번호</span>
              <p className="font-medium text-gray-900 font-mono">{complaint.id.substring(0, 8).toUpperCase()}</p>
            </div>
          </div>
        </div>

        {/* Case Description */}
        <div className="toss-card mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">사건 개요</h3>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {complaint.description}
            </p>
          </div>
        </div>

        {/* Generated Complaint */}
        <div className="toss-card mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">AI 생성 고소장</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowFullComplaint(!showFullComplaint)}
                className="toss-button-secondary text-sm px-4 py-2"
              >
                {showFullComplaint ? '접기' : '전체 보기'}
              </button>
              <button
                onClick={handleDownload}
                className="toss-button-primary text-sm px-4 py-2"
              >
                다운로드
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-200">
            <div className={`text-gray-700 font-mono text-sm leading-relaxed whitespace-pre-wrap ${
              !showFullComplaint ? 'max-h-64 overflow-hidden' : ''
            }`}>
              {complaint.complaint_draft}
            </div>
            {!showFullComplaint && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
            )}
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-xl">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">💡 이용 안내</p>
                <ul className="space-y-1 text-xs">
                  <li>• 생성된 고소장은 초안이므로, 제출 전 반드시 검토해 주세요</li>
                  <li>• 필요시 변호사나 법무사와 상담하여 내용을 보완하실 수 있습니다</li>
                  <li>• 완성된 고소장은 관할 경찰서나 검찰청에 제출하시면 됩니다</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={handleDownload}
            className="toss-button-primary text-lg px-8 py-4"
          >
            📥 고소장 다운로드
          </button>
          <Link
            href="/cases"
            className="toss-button-secondary text-lg px-8 py-4 text-center"
          >
            📊 접수 현황 보기
          </Link>
          <Link
            href="/submit"
            className="toss-button-secondary text-lg px-8 py-4 text-center"
          >
            ✨ 새 고소장 작성
          </Link>
        </div>

        {/* Next Steps */}
        <div className="toss-card">
          <h3 className="text-xl font-bold text-gray-900 mb-6">📋 다음 단계</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">고소장 검토</h4>
              <p className="text-sm text-gray-600">
                생성된 고소장 내용을 꼼꼼히 확인하고 필요시 수정하세요
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">증거자료 준비</h4>
              <p className="text-sm text-gray-600">
                사건과 관련된 증거자료들을 함께 준비하세요
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">관할 기관 제출</h4>
              <p className="text-sm text-gray-600">
                경찰서나 검찰청에 고소장과 증거자료를 제출하세요
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}