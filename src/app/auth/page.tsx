'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "고소는 어렵고, 변호사는 비싸다고요?",
      description: "AI가 도와드리는 간편한 고소장 작성",
      image: "📋"
    },
    {
      title: "무료로 평균 5분이면 접수 완료",
      description: "복잡한 절차 없이 전문적인 고소장 생성",
      image: "⚡"
    },
    {
      title: "형사처벌까지 모두 무료 진행",
      description: "변호사가 직접 대리하여 합의금까지 확보",
      image: "💼"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex">
      {/* 왼쪽: 서비스 소개 슬라이드 */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12">
        <div className="max-w-md mx-auto flex flex-col justify-center">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">{slides[currentSlide].image}</div>
            <h1 className="text-3xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl opacity-90">{slides[currentSlide].description}</p>
          </div>
          
          {/* 슬라이드 인디케이터 */}
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 오른쪽: 로그인/회원가입 폼 */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* 로고 */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">법</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">법대로go</h1>
            </div>
            <p className="text-gray-600">AI 기반 법률 서비스 플랫폼</p>
          </div>

          {/* 탭 전환 */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                isLogin ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              로그인
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                !isLogin ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600'
              }`}
            >
              회원가입
            </button>
          </div>

          {/* 소셜 로그인 */}
          <div className="space-y-4 mb-8">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3c5.799 0 10.5 4.701 10.5 10.5S17.799 24 12 24S1.5 19.299 1.5 13.5S6.201 3 12 3m0 1.5c-4.971 0-9 4.029-9 9s4.029 9 9 9s9-4.029 9-9s-4.029-9-9-9z"/>
                <path d="M12 6.75c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5s-2.015-4.5-4.5-4.5z"/>
              </svg>
              <span>카카오로 {isLogin ? '로그인' : '회원가입'}</span>
            </button>
            
            <button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-medium py-3 px-4 rounded-xl border border-gray-300 transition-colors flex items-center justify-center space-x-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>구글로 {isLogin ? '로그인' : '회원가입'}</span>
            </button>
          </div>

          {/* 구분선 */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>

          {/* 이메일 로그인 폼 */}
          {isLogin ? (
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="이메일을 입력하세요"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                로그인
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                소셜 계정으로 간편하게 회원가입하세요
              </p>
              <p className="text-sm text-gray-500">
                회원가입 시 <Link href="/terms" className="text-blue-600 hover:underline">이용약관</Link>과{' '}
                <Link href="/privacy" className="text-blue-600 hover:underline">개인정보처리방침</Link>에 동의합니다.
              </p>
            </div>
          )}

          {/* 하단 링크 */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-600 hover:underline text-sm">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 