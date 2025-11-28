import React from 'react';
import { Section } from '../components/Section';
import { COMPANY_INFO } from '../constants';
import { Quote } from 'lucide-react';

export const Company: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-navy-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">회사 소개</h1>
        <p className="text-xl text-gray-300">기본을 지키는 정직함, 한발 앞선 통찰력. 선진개발입니다.</p>
      </div>

      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          {/* Vision / Intro Message */}
          <div className="flex flex-col md:flex-row gap-12 mb-20 items-stretch">
             <div className="w-full md:w-1/3">
                <div className="h-full min-h-[400px] bg-gray-200 rounded-sm overflow-hidden shadow-lg relative">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Company Vision" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2">
                    <p className="font-serif font-bold text-navy-900">선진개발의 비전</p>
                  </div>
                </div>
             </div>
             <div className="w-full md:w-2/3 flex flex-col justify-center">
                <Quote className="text-gold-500 w-12 h-12 mb-6 opacity-50" />
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  "고객님의 전 재산을 다루는 무거운 책임감,<br/>
                  100%의 만족으로 보답하겠습니다."
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    안녕하십니까, 선진개발입니다.
                  </p>
                  <p>
                    부동산은 단순한 자산이 아닙니다. 누군가에게는 평생을 일궈온 땀의 결실이며, 누군가에게는 새로운 도약을 위한 발판입니다.
                    저희는 지난 수년간 수많은 현장을 누비며, 건축주 여러분의 고민과 꿈을 함께 해왔습니다.
                  </p>
                  <p>
                    선진개발은 화려한 말보다 정직한 땀을 믿습니다.
                    현장의 작은 변수 하나까지 놓치지 않는 디테일, 복잡한 이해관계를 풀어내는 협상력, 그리고 끝까지 책임지는 끈기로 고객님의 성공을 돕겠습니다.
                  </p>
                  <p>
                    믿고 맡겨주십시오. 결과로 증명하겠습니다.
                  </p>
                </div>
                <div className="mt-8 flex justify-end">
                   <p className="font-serif font-bold text-navy-900">대표이사 양희광 올림</p>
                </div>
             </div>
          </div>

          <hr className="border-gray-200 my-16" />

          {/* Philosophy */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-12">경영 철학</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '고객 중심', sub: 'Client First', desc: '건축주의 이익을 최우선으로 생각합니다.' },
                { title: '현장 중심', sub: 'On-Site', desc: '책상이 아닌 현장에서 답을 찾습니다.' },
                { title: '미래 지향', sub: 'Future Value', desc: '당장의 이익보다 지속 가능한 가치를 만듭니다.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                  <div className="text-gold-500 text-sm font-bold tracking-widest mb-2">{item.sub}</div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Box */}
      <div className="bg-gray-100 py-16 text-center">
        <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">믿을 수 있는 파트너를 찾으신다면</h3>
        <p className="text-gray-600 mb-8">지금 연락주십시오. 선진개발이 함께 하겠습니다.</p>
        <a href={`tel:${COMPANY_INFO.phone}`} className="inline-block bg-navy-900 text-white px-8 py-3 rounded-sm font-bold text-lg hover:bg-navy-800 transition-colors">
          {COMPANY_INFO.phone} 전화 연결
        </a>
      </div>
    </div>
  );
};