import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} className="text-gold-500" /> {COMPANY_INFO.phone}</span>
            <span className="flex items-center gap-2"><Mail size={14} className="text-gold-500" /> {COMPANY_INFO.email}</span>
          </div>
          <div className="text-gray-300">
            부동산의 가치를 높이는 확실한 선택, 선진개발
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-navy-900 flex items-center justify-center text-gold-500 font-bold font-serif text-xl rounded-sm">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-navy-900 leading-none tracking-tight">선진개발</span>
                <span className="text-[0.65rem] text-gold-600 font-medium tracking-widest uppercase">Sunjin Development</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-gold-600 ${
                    location.pathname === item.path ? 'text-navy-900 font-bold' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="bg-navy-900 text-white px-4 py-2 text-sm font-medium rounded-sm hover:bg-navy-800 transition-colors"
              >
                상담 문의
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-navy-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
            <div className="flex flex-col py-4 px-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-base font-medium text-gray-800 hover:text-navy-900"
                >
                  {item.label}
                </Link>
              ))}
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-navy-900 text-white text-center py-3 rounded-sm font-medium"
              >
                전화 연결 {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-navy-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-white font-serif text-2xl font-bold mb-4">선진개발</h3>
              <p className="text-sm leading-relaxed text-gray-400 mb-6">
                복잡한 부동산 규제와 개발의 난관을 뚫고,<br/>
                고객 자산의 최대 가치를 실현합니다.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Menu</h4>
              <ul className="space-y-2 text-sm">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="hover:text-gold-500 transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4 border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-gold-500 shrink-0" />
                  <span>{COMPANY_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-gold-500 shrink-0" />
                  <span className="text-lg font-bold text-white">{COMPANY_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-gold-500 shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-xs text-center text-gray-500">
            &copy; {new Date().getFullYear()} Sunjin Development. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};