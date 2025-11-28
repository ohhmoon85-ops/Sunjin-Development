import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Ruler, HardHat, TrendingUp } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      id: 'consulting',
      icon: <Ruler className="w-12 h-12 text-gold-500" />,
      title: 'Development Consulting',
      krTitle: '부동산 개발 컨설팅',
      desc: '사업 초기 단계부터 정밀한 분석을 통해 성공의 밑그림을 그립니다.',
      items: [
        '사업 부지 입지 분석 및 시장 조사 (Feasibility Study)',
        '법규 검토 및 최유효 이용 방안(Best Use) 수립',
        '사업 수지 분석(Cash Flow) 및 리스크 헷지 전략'
      ],
      // Updated to a reliable meeting/consulting image
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 'pm',
      icon: <HardHat className="w-12 h-12 text-gold-500" />,
      title: 'Project Management (PM/CM)',
      krTitle: '건설 사업 관리',
      desc: '복잡한 건축 과정을 건축주를 대신하여 투명하고 전문적으로 관리합니다.',
      items: [
        '최적의 설계사/시공사 선정 및 계약 관리',
        '공정 관리, 원가 관리, 품질 관리 (Total Management)',
        '복잡한 인허가 및 대관 업무 대행'
      ],
      // Reliable construction/architecture image
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: 'asset',
      icon: <TrendingUp className="w-12 h-12 text-gold-500" />,
      title: 'Investment & Asset Management',
      krTitle: '투자 및 자산관리',
      desc: '보유하신 부동산의 가치를 극대화하는 솔루션을 제공합니다.',
      items: [
        '저평가된 노후 건물 리모델링 밸류업(Value-up)',
        '상업용 부동산 매입/매각 자문',
        '절세 전략 수립 및 금융 컨설팅 연계'
      ],
      // Reliable skyscraper/business image
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div>
       <div className="bg-navy-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">사업 영역</h1>
        <p className="text-xl text-gray-300">토지 매입부터 준공 후 관리까지, 부동산의 A to Z를 책임집니다.</p>
      </div>

      <Section className="py-20 space-y-24">
        {services.map((service, index) => (
          <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative group overflow-hidden rounded-sm shadow-xl h-[400px]">
                <img 
                  src={service.image} 
                  alt={service.krTitle} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                {service.icon}
                <span className="block mt-4 text-gold-600 font-bold tracking-widest text-sm uppercase">{service.title}</span>
                <h2 className="text-3xl font-serif font-bold text-navy-900 mt-2">{service.krTitle}</h2>
              </div>
              <p className="text-lg text-gray-600 mb-8 font-light">
                {service.desc}
              </p>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-sm border-l-4 border-gold-500">
                    <span className="font-medium text-navy-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Section>

      <div className="bg-navy-900 py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
           <h3 className="text-2xl font-serif font-bold mb-6">어떤 고민을 가지고 계신가요?</h3>
           <p className="mb-8 text-gray-300">상황에 맞는 맞춤형 솔루션을 제안해 드립니다.</p>
           <Button to="/contact" variant="secondary" className="px-8 py-3">
             서비스 문의하기
           </Button>
        </div>
      </div>
    </div>
  );
};