import React from 'react';
import {
  UserCheck,
  FileText,
  Search,
  Award,
  CreditCard,
  Key,
  CheckCircle,
  AlertCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import Card from '../../components/common/Card';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';

export default function HowItWorksPage({ onOpenRegister }) {
  const steps = [
    {
      num: 'Step 1',
      title: 'Student Standing & Eligibility Check',
      icon: UserCheck,
      details: [
        'Must be an actively enrolled undergraduate or master’s student at DIU.',
        'Must have completed a minimum of 15 academic credits with CGPA >= 2.50.',
        'No pending university proctorial disciplinary charges or previous hall code violations.'
      ]
    },
    {
      num: 'Step 2',
      title: '8-Step Online Application Wizard',
      icon: FileText,
      details: [
        'Select priority ranking of residential halls (1st, 2nd, 3rd choice).',
        'Choose preferred room type: 4-bed shared, 2-bed standard, or single deluxe.',
        'Upload required documents: Student ID, latest grade sheet, guardian income certificate, permanent residence utility bill.',
        'Provide emergency guardian contacts and submit digital honor code declaration.'
      ]
    },
    {
      num: 'Step 3',
      title: 'Faculty Officer Verification',
      icon: Search,
      details: [
        'Designated Verification Officers cross-check submitted CGPA against DIU ERP.',
        'Document clarity is inspected (ID, address proof, quota credentials).',
        'If a document is unclear, application enters "Correction Required" with specific officer feedback.'
      ]
    },
    {
      num: 'Step 4',
      title: 'Merit-Based Automated Scoring & Ranking',
      icon: Award,
      details: [
        'CGPA Score (40 points max) = (CGPA / 4.00) * 40.',
        'Geographic Distance (25 points max) = Graduated tiers based on distance from Savar Campus.',
        'Socio-Economic Need (20 points max) = Evaluated against family income bracket.',
        'Co-curricular Achievements (10 points max) = ICPC, sports, robotics, and club leadership.',
        'Special Quota Bonus (5 points max) = Validated physically challenged or remote hill tracts quota.'
      ]
    },
    {
      num: 'Step 5',
      title: 'Provisional Shortlist & Seat Offer Issuance',
      icon: ShieldCheck,
      details: [
        'Provost Committee reviews and publishes provisional allocation list.',
        'Shortlisted candidates receive seat offer notification with room & bed assignment.',
        'Candidate has a 5-day confirmation window to accept or decline the offer.'
      ]
    },
    {
      num: 'Step 6',
      title: 'Confirmation Fee Payment & Digital Check-in',
      icon: CreditCard,
      details: [
        'Pay seat confirmation fee and refundable security deposit via bKash, Nagad, or Bank deposit.',
        'Receive official electronic payment voucher and admission clearance slip.',
        'Visit hall warden office with digital QR slip, collect RFID smart room key, and move in!'
      ]
    }
  ];

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '960px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Badge variant="info" style={{ marginBottom: '0.75rem' }}>Complete Lifecycle Guide</Badge>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--diu-navy)', marginBottom: '0.75rem' }}>
          How the DIU Nest Application System Works
        </h1>
        <p style={{ color: 'var(--diu-text-secondary)', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
          Understand every milestone in the hall seat allocation workflow, from digital eligibility validation to physical check-in.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3.5rem' }}>
        {steps.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div key={idx} className={`card card-hover animate-fade-in-up stagger-${idx + 1}`} style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', padding: '1.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: 54, height: 54, borderRadius: 'var(--radius-lg)', background: 'var(--diu-primary-subtle)', color: 'var(--diu-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={26} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--diu-primary)', textTransform: 'uppercase' }}>{st.num}</span>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--diu-navy)', margin: 0 }}>{st.title}</h3>
                </div>
                <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.875rem', color: 'var(--diu-text-secondary)' }}>
                  {st.details.map((d, dIdx) => (
                    <li key={dIdx}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', background: 'var(--diu-navy)', color: '#FFF', padding: '3rem 2rem', borderRadius: 'var(--radius-xl)' }}>
        <h3 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '0.75rem' }}>Ready to Begin Your Application?</h3>
        <p style={{ color: '#CBD5E1', marginBottom: '1.75rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
          Applications for Fall 2026 are actively being processed. Prepare your Student ID and transcripts.
        </p>
        <Button variant="primary" size="lg" onClick={onOpenRegister}>
          Start Online Application Now
        </Button>
      </div>
    </div>
  );
}

