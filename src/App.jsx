import React, { useState } from 'react';
import { ToastProvider } from './context/ToastContext';

import './index.css';
import './styles/components.css';
import './styles/portal.css';

import PublicNavbar from './components/layouts/PublicNavbar';
import PublicFooter from './components/layouts/PublicFooter';

import LandingPage from './pages/public/LandingPage';
import AboutPage from './pages/public/AboutPage';
import HallInfoPage from './pages/public/HallInfoPage';
import HowItWorksPage from './pages/public/HowItWorksPage';
import FaqPage from './pages/public/FaqPage';
import ContactPage from './pages/public/ContactPage';
import LoginPage from './pages/public/LoginPage';
import RegisterPage from './pages/public/RegisterPage';

function MainPublicApp() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <LandingPage
            onNavigate={handleNavigate}
            onOpenLogin={() => handleNavigate('login')}
            onOpenRegister={() => handleNavigate('register')}
          />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'halls':
        return <HallInfoPage onOpenRegister={() => handleNavigate('register')} />;
      case 'how-it-works':
        return <HowItWorksPage onOpenRegister={() => handleNavigate('register')} />;
      case 'faq':
        return <FaqPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return (
          <LoginPage
            onSuccess={() => handleNavigate('home')}
            onSwitchToRegister={() => handleNavigate('register')}
          />
        );
      case 'register':
        return (
          <RegisterPage
            onSuccess={() => handleNavigate('login')}
            onSwitchToLogin={() => handleNavigate('login')}
          />
        );
      default:
        return (
          <LandingPage
            onNavigate={handleNavigate}
            onOpenLogin={() => handleNavigate('login')}
            onOpenRegister={() => handleNavigate('register')}
          />
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'var(--diu-bg)' }}>
      <PublicNavbar
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenLogin={() => handleNavigate('login')}
        onOpenRegister={() => handleNavigate('register')}
      />

      <main style={{ flex: 1 }}>
        {renderCurrentPage()}
      </main>

      <PublicFooter onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <MainPublicApp />
    </ToastProvider>
  );
}
