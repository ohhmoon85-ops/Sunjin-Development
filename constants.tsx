import React from 'react';
import { NavItem } from './types';
import { Building2, Ruler, TrendingUp } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Company', path: '/company' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
];

export const COMPANY_INFO = {
  name: '선진개발',
  ceo: '양희광',
  phone: '010-4100-8777',
  address: '서울특별시 강남구 테헤란로 123 선진빌딩 10F (예시)',
  email: 'contact@sunjin.dev',
};

export const SERVICES_SUMMARY = [
  {
    icon: <Ruler className="w-8 h-8 text-gold-500" />,
    title: '정밀 타당성 분석',
    desc: '빅데이터 기반의 상권 분석과 법규 검토를 통해 실패 없는 개발 방향을 설정합니다.'
  },
  {
    icon: <Building2 className="w-8 h-8 text-gold-500" />,
    title: '책임 PM/CM 시스템',
    desc: '기획 단계부터 준공까지, 건축주를 대신해 투명하고 깐깐하게 현장을 관리합니다.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-gold-500" />,
    title: '수익 극대화 전략',
    desc: '최적의 용도 변경과 공간 구성을 통해 임대 수익과 자산 가치를 동시에 높입니다.'
  }
];