import React, { useState } from 'react';
import { LogIn, UserPlus, Menu, X } from 'lucide-react';
import Button from '../common/Button';

export default function PublicNavbar({ activePage, onNavigate, onOpenLogin, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About DIU Nest' },
    { key: 'halls', label: 'Residential Halls' },
    { key: 'how-it-works', label: 'How It Works' },
    { key: 'faq', label: 'FAQs' },
    { key: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (key) => {
    onNavigate(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="public-navbar">
      <div className="container public-navbar-container">
        <div className="brand-logo" onClick={() => handleNavClick('home')}>
          <div className="brand-emblem">
            <span>DIU</span>
          </div>
          <div className="brand-text">
            <div className="brand-title">
              DIU <span>Nest</span>
            </div>
            <div className="brand-subtitle">Smart Hall Management</div>
          </div>
        </div>

        <nav className="public-nav-links">
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`public-nav-link ${activePage === item.key ? 'active' : ''}`}
              onClick={() => handleNavClick(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="public-nav-actions">
          <Button
            variant="outline"
            size="sm"
            icon={LogIn}
            onClick={onOpenLogin}
          >
            Sign In
          </Button>

          <Button
            variant="primary"
            size="sm"
            icon={UserPlus}
            onClick={onOpenRegister}
          >
            Apply for Hall Seat
          </Button>

          <button
            type="button"
            className="btn-icon-only btn-ghost"
            style={{ display: 'none', '@media (max-width: 768px)': { display: 'flex' } }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{ background: '#FFF', borderBottom: '1px solid var(--diu-border)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {navItems.map((item) => (
            <button
              key={item.key}
              type="button"
              style={{ textAlign: 'left', padding: '0.6rem 0', fontWeight: 600, color: activePage === item.key ? 'var(--diu-primary)' : 'var(--diu-navy)' }}
              onClick={() => handleNavClick(item.key)}
            >
              {item.label}
            </button>
          ))}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--diu-border)' }}>
            <Button variant="outline" size="sm" style={{ flex: 1 }} onClick={onOpenLogin}>
              Sign In
            </Button>
            <Button variant="primary" size="sm" style={{ flex: 1 }} onClick={onOpenRegister}>
              Apply for Hall Seat
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
