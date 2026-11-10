import React from 'react';
import { ShieldCheck, Target, Award, Users, BookOpen, Compass, GraduationCap, Building2 } from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

export default function AboutPage({ onNavigate }) {
  const leadership = [
    {
      name: 'Prof. Dr. Syed Akhter Hossain',
      title: 'Provost of University Residential Halls',
      dept: 'Professor & Dean, FSIT',
      initials: 'SH',
      color: 'linear-gradient(135deg, #15345B 0%, #2563EB 100%)'
    },
    {
      name: 'Engr. M. A. Hasan',
      title: 'Senior Hall Warden',
      dept: 'Yunus Khan Scholar Gardens (Male Residence)',
      initials: 'MH',
      color: 'linear-gradient(135deg, #0D223C 0%, #1E4678 100%)'
    },
    {
      name: 'Dr. Shahina Parveen',
      title: 'Senior Hall Warden',
      dept: 'Rowshan Ara Scholar Gardens (Female Residence)',
      initials: 'SP',
      color: 'linear-gradient(135deg, #1E4678 0%, #0284C7 100%)'
    }
  ];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>

      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
        <Badge variant="navy" style={{ marginBottom: '0.75rem' }}>About DIU Nest</Badge>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--diu-navy)', marginBottom: '1rem' }}>
          Digitizing Campus Residence for 20,000+ Daffodil Students
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--diu-text-secondary)', lineHeight: 1.6 }}>
          DIU Nest is developed as an Enterprise Software Development Capstone Project to modernize, automate, and centralize the residential hall seat allocation ecosystem at Daffodil International University.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
        <Card title="Our Core Mission" hover>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--diu-primary-subtle)', color: 'var(--diu-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Target size={24} />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--diu-text-secondary)', lineHeight: 1.6 }}>
              Eliminate archaic paper applications, eliminate student queueing, and replace subjective decisions with an objective, mathematically verifiable merit-ranking algorithm across all campus halls.
            </p>
          </div>
        </Card>

        <Card title="Vision for Smart Campus" hover>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--diu-success-subtle)', color: 'var(--diu-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Compass size={24} />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--diu-text-secondary)', lineHeight: 1.6 }}>
              To deliver an integrated, enterprise-grade residence operating platform connecting students, wardens, accounts, and academic authorities with full transparency, auditability, and ease of use.
            </p>
          </div>
        </Card>

        <Card title="Capstone Project Credentials" hover>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--diu-warning-subtle)', color: 'var(--diu-warning)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Award size={24} />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--diu-text-secondary)', lineHeight: 1.6 }}>
              Engineered according to rigorous Software Engineering principles, ISO 25010 software quality models, responsive UI/UX conventions, and DIU academic syndicate residence guidelines.
            </p>
          </div>
        </Card>
      </div>

      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--diu-navy)', fontSize: '2rem' }}>Hall Management Authority</h2>
          <p style={{ color: 'var(--diu-text-muted)' }}>Leadership and Executive Provost Committee of DIU Residential Halls</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {leadership.map((member, idx) => (
            <div key={idx} className={`card card-hover animate-fade-in-up stagger-${idx + 1}`} style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>

              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  background: member.color,
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.75rem',
                  fontFamily: 'var(--font-heading)',
                  margin: '0 auto 1.25rem',
                  boxShadow: '0 8px 20px rgba(21, 52, 91, 0.28)',
                  border: '3px solid #FFFFFF',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {member.initials}
              </div>

              <h3 style={{ fontSize: '1.15rem', color: 'var(--diu-navy)', marginBottom: '0.3rem', fontWeight: 800 }}>{member.name}</h3>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--diu-primary)', marginBottom: '0.3rem' }}>{member.title}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--diu-text-muted)' }}>{member.dept}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--diu-surface-hover)', border: '1px solid var(--diu-border)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', color: 'var(--diu-navy)', marginBottom: '0.75rem' }}>
          Experience the Future of DIU Residential Life
        </h3>
        <p style={{ color: 'var(--diu-text-secondary)', maxWidth: '540px', margin: '0 auto 1.5rem' }}>
          Whether you are a new applicant or an existing resident, the unified portal handles all applications, fees, and room management.
        </p>
        <Button variant="primary" size="md" onClick={() => onNavigate('register')}>
          Start Your Hall Application Today
        </Button>
      </div>
    </div>
  );
}
