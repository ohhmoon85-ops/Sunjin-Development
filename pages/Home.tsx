import React from 'react';
import { Button } from '../components/Button';
import { SERVICES_SUMMARY, COMPANY_INFO } from '../constants';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Skyscraper" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in-up">
            잠자고 있는 당신의 땅,<br/>
            <span className="text-gold-500">선진개발</span>이 황금알로 바꿉니다.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
            복잡한 인허가부터 시공, 분양까지. 선진개발의 전문가 그룹이 제공하는 원스톱 부동산 솔루션.<br className="hidden md:block"/> 
            불확실한 시장 속에서 확실한 성공 파트너가 되어 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Button to="/contact" variant="secondary" className="text-lg px-8 py-4">
              무료 견적/상담 신청하기
            </Button>
            <Button to="/portfolio" variant="white" className="text-lg px-8 py-4">
              성공 사례 보기
            </Button>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden relative shadow-xl">
                 <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" alt="High Rise Development" className="object-cover w-full h-full" />
                 <div className="absolute bottom-0 left-0 right-0 bg-navy-900/90 text-white p-6">
                   <p className="font-serif italic text-lg">"10년 뒤의 가치까지 내다봅니다."</p>
                 </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-500 hidden md:block"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
                개발 제한, 복잡한 법규,<br/>치솟는 공사비... 막막하신가요?
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  부동산 개발은 단순한 건축이 아닙니다. 금융, 법률, 시공, 마케팅이 완벽하게 맞물려야 하는 종합 예술입니다.
                </p>
                <p>
                  선진개발은 단순한 조언을 넘어, <strong className="text-navy-900 font-bold bg-gold-400/20 px-1">실행 가능한 마스터플랜</strong>을 제시합니다. 
                  수많은 규제 속에서 숨겨진 기회를 찾아내고, 리스크는 최소화하며 수익을 극대화하는 길을 안내해 드립니다.
                </p>
                <ul className="space-y-3 pt-4">
                   {[
                     '리스크 사전 차단 및 법규 검토',
                     '최적의 용도 변경 제안',
                     '투명한 공정 관리 시스템'
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3">
                       <CheckCircle2 className="text-gold-500 w-5 h-5 flex-shrink-0" />
                       <span className="font-medium text-navy-900">{item}</span>
                     </li>
                   ))}
                </ul>
                <div className="pt-6">
                  <Button to="/services" variant="outline" className="group">
                    서비스 자세히 보기 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Core Competency</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">선진개발만의 핵심 경쟁력</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_SUMMARY.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-md hover:-translate-y-2 transition-transform duration-300 border-t-4 border-transparent hover:border-gold-500">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <img 
             src="https://images.unsplash.com/photo-1479839672679-a455b1809852?q=80&w=2070&auto=format&fit=crop" 
             alt="City Skyline" 
             className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-navy-900/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8 leading-snug">
            "부동산 개발은 결국 <span className="text-gold-500">사람</span>이 합니다.<br/>
            선진개발이 고객님의 성공을 위해<br/>끝까지 책임지겠습니다."
          </h2>
          <div className="flex flex-col items-center justify-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="inline-flex items-center gap-3 text-3xl md:text-5xl font-bold text-white hover:text-gold-500 transition-colors"
            >
              <Phone className="w-8 h-8 md:w-12 md:h-12" />
              {COMPANY_INFO.phone}
            </a>
            <p className="text-gray-400 text-sm">상단 번호를 누르시면 바로 연결됩니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
