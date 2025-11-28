import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const dataProjectA = [
  { name: '월 임대료', Before: 300, After: 750 },
  { name: '건물 가치', Before: 20, After: 42 },
];

const dataProjectB = [
  { name: '용적률', Before: 150, After: 280 },
];

export const Portfolio: React.FC = () => {
  return (
    <div>
      <div className="bg-navy-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">성공 사례</h1>
        <p className="text-xl text-gray-300">말보다 결과로 증명합니다. 선진개발이 만들어낸 성공의 기록들.</p>
      </div>

      <Section className="py-20 space-y-32">
        {/* Project A */}
        <div>
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <span className="inline-block bg-gold-500 text-white px-3 py-1 text-sm font-bold mb-4 rounded-sm">Project A</span>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">노후 상가주택 리모델링</h2>
              <dl className="space-y-4 text-gray-600">
                <div>
                  <dt className="font-bold text-navy-900">Challenge</dt>
                  <dd>30년 된 노후 건물, 높은 공실률, 수익률 저조</dd>
                </div>
                <div>
                  <dt className="font-bold text-navy-900">Solution</dt>
                  <dd>외관 리모델링 및 엘리베이터 신설, 트렌디한 카페 유치</dd>
                </div>
                <div>
                  <dt className="font-bold text-navy-900">Result</dt>
                  <dd className="text-gold-600 font-bold">월 임대료 250% 상승, 건물 가치 2배 상승</dd>
                </div>
              </dl>
            </div>
            <div className="w-full md:w-2/3 h-80 bg-white border border-gray-100 shadow-lg p-6 rounded-sm">
               <h3 className="text-sm text-gray-500 mb-4 text-center font-bold">수익 상승 분석 (단위: 만원/억)</h3>
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataProjectA} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Before" fill="#9CA3AF" name="개선 전" />
                  <Bar dataKey="After" fill="#C0A268" name="개선 후" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[1,2,3,4].map(i => (
               <img key={i} src={`https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=400&auto=format&fit=crop`} alt="Process" className="w-full h-40 object-cover rounded-sm hover:opacity-90 transition-opacity" />
             ))}
          </div>
        </div>

        {/* Project B */}
        <div>
          <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
            <div className="w-full md:w-1/3">
              <span className="inline-block bg-navy-800 text-white px-3 py-1 text-sm font-bold mb-4 rounded-sm">Project B</span>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">나대지 신축 개발</h2>
              <dl className="space-y-4 text-gray-600">
                <div>
                  <dt className="font-bold text-navy-900">Challenge</dt>
                  <dd>맹지에 가까운 불리한 지형 조건</dd>
                </div>
                <div>
                  <dt className="font-bold text-navy-900">Solution</dt>
                  <dd>인접 토지주와의 협상 및 합필, 효율적인 주차 공간 확보 설계</dd>
                </div>
                <div>
                  <dt className="font-bold text-navy-900">Result</dt>
                  <dd className="text-gold-600 font-bold">지역 내 랜드마크 빌딩으로 준공, 분양 100% 완료</dd>
                </div>
              </dl>
            </div>
             <div className="w-full md:w-2/3 h-80 bg-white border border-gray-100 shadow-lg p-6 rounded-sm">
               <h3 className="text-sm text-gray-500 mb-4 text-center font-bold">용적률 극대화 (%)</h3>
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dataProjectB} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} hide />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Before" fill="#9CA3AF" name="일반 설계" />
                  <Bar dataKey="After" fill="#0F2C59" name="선진 솔루션" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" alt="Building Exterior" className="w-full h-64 object-cover rounded-sm" />
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" alt="Interior" className="w-full h-64 object-cover rounded-sm" />
          </div>
        </div>
      </Section>

      <div className="bg-gray-100 py-20 text-center">
        <h3 className="text-3xl font-serif font-bold text-navy-900 mb-6">다음 성공 사례의 주인공은 바로 고객님입니다.</h3>
        <Button to="/contact" variant="primary" className="px-10 py-4 text-lg">
          유사 프로젝트 상담받기
        </Button>
      </div>
    </div>
  );
};