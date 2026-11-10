import React from 'react';
import { Building2, Phone, Mail, MapPin, Shield, CheckCircle } from 'lucide-react';

export default function PublicFooter({ onNavigate }) {
  return (
    <footer className="public-footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '1rem' }}>
              <div className="brand-emblem" style={{ background: '#FFF', color: 'var(--diu-navy)' }}>
                <span>DIU</span>
              </div>
              <div className="brand-text">
                <div className="brand-title" style={{ color: '#FFF' }}>
                  DIU <span style={{ color: 'var(--diu-accent)' }}>Nest</span>
                </div>
                <div className="brand-subtitle" style={{ color: '#94A3B8' }}>Smart Hall Seat Management</div>
              </div>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              A Smart, Transparent, and Unified Hall Seat Application System designed to digitize campus living, eliminate paperwork, and guarantee merit-based allocation for Daffodil International University students.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--diu-accent)', fontSize: '0.8rem', fontWeight: 600 }}>
              <Shield size={16} />
              <span>DIU Software Development Capstone Project</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Portal Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About DIU Nest</a></li>
              <li><a href="#halls" onClick={(e) => { e.preventDefault(); onNavigate('halls'); }}>Residential Halls</a></li>
              <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); onNavigate('how-it-works'); }}>How It Works</a></li>
              <li><a href="#faq" onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}>FAQs & Rules</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Provost Office Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Student & Staff</h4>
            <ul className="footer-links">
              <li><a href="#apply" onClick={(e) => { e.preventDefault(); onNavigate('register'); }}>Apply for Seat</a></li>
              <li><a href="#track" onClick={(e) => { e.preventDefault(); onNavigate('login'); }}>Track Status</a></li>
              <li><a href="#login" onClick={(e) => { e.preventDefault(); onNavigate('login'); }}>Student ERP Login</a></li>
              <li><a href="#login" onClick={(e) => { e.preventDefault(); onNavigate('login'); }}>Staff / Officer Portal</a></li>
              <li><a href="#login" onClick={(e) => { e.preventDefault(); onNavigate('login'); }}>Provost Committee</a></li>
              <li><a href="#login" onClick={(e) => { e.preventDefault(); onNavigate('login'); }}>Accounts Office</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Office of the Provost</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={18} color="var(--diu-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Permanent Campus, Daffodil Smart City, Ashulia, Savar, Dhaka-1216, Bangladesh.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={16} color="var(--diu-accent)" style={{ flexShrink: 0 }} />
                <span>+880 2-224441831-34 (Ext: 104)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={16} color="var(--diu-accent)" style={{ flexShrink: 0 }} />
                <span>provost.halls@diu.edu.bd</span>
              </div>
              <div style={{ marginTop: '0.5rem', padding: '0.6rem 0.8rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.775rem' }}>Hall 24/7 Helpline:</div>
                <div style={{ color: 'var(--diu-accent)', fontWeight: 700, fontSize: '0.875rem' }}>+880 1819-234567</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Daffodil International University. All rights reserved.
          </div>
          <div>
            Developed for Software Development Capstone Project · DIU Nest v2.4
          </div>
        </div>
      </div>
    </footer>
  );
}

