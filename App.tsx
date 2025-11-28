import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { AiAdvisor } from './components/AiAdvisor';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <AiAdvisor />
      </Layout>
    </HashRouter>
  );
};

export default App;