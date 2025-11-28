import React, { useState } from 'react';
import { Section } from '../components/Section';
import { COMPANY_INFO } from '../constants';
import { Phone, Clock, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div>
      <div className="bg-navy-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">상담 문의</h1>
        <p className="text-xl text-gray-300">성공적인 부동산 투자의 시작, 선진개발과의 만남입니다.</p>
      </div>

      <Section className="py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-8 border-b-2 border-gold-500 inline-block pb-2">
              Contact Information
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase mb-1">대표 전화</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-3xl font-bold text-navy-900 hover:text-gold-600 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase mb-1">운영 시간</p>
                  <p className="text-lg text-navy-900">평일 09:00 ~ 18:00</p>
                  <p className="text-gray-500">주말/공휴일 사전 예약 가능</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase mb-1">오시는 길</p>
                  <p className="text-lg text-navy-900">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Simulated Map */}
            <div className="mt-12 bg-gray-200 h-64 w-full rounded-sm flex items-center justify-center text-gray-500">
               지도 영역 (Google Maps / Naver Maps API)
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 border border-gray-200 shadow-xl rounded-sm">
            <h2 className="text-2xl font-serif font-bold text-navy-900 mb-2">간편 상담 신청</h2>
            <p className="text-gray-500 mb-8 text-sm">정보를 남겨주시면 확인 후 신속히 연락드립니다.</p>
            
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 text-center rounded-sm">
                <h3 className="font-bold text-xl mb-2">신청이 완료되었습니다.</h3>
                <p>빠른 시일 내에 연락드리겠습니다. 감사합니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                  <input required type="text" id="name" className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-navy-900 focus:border-navy-900 p-3 border" placeholder="홍길동" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                  <input required type="tel" id="phone" className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-navy-900 focus:border-navy-900 p-3 border" placeholder="010-0000-0000" />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">보유 부동산 위치 (선택)</label>
                  <input type="text" id="location" className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-navy-900 focus:border-navy-900 p-3 border" placeholder="예: 서울시 강남구 역삼동" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">문의 내용</label>
                  <textarea required id="message" rows={4} className="w-full border-gray-300 rounded-sm shadow-sm focus:ring-navy-900 focus:border-navy-900 p-3 border" placeholder="상가 리모델링 견적 문의드립니다."></textarea>
                </div>
                
                <div className="flex items-start">
                  <input required id="privacy" type="checkbox" className="h-4 w-4 text-navy-900 focus:ring-navy-900 border-gray-300 rounded" />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-500">
                    개인정보 수집 및 이용에 동의합니다. (상담 목적으로만 활용됩니다)
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-navy-900 text-white font-bold py-4 rounded-sm hover:bg-navy-800 transition-colors disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? '전송 중...' : '상담 신청하기'}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};