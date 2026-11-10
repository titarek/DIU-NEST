import React, { useState } from 'react';
import { mockHalls } from '../../data/mockHalls';
import { mockApplications } from '../../data/mockApplications';
import {
  Building2,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Users,
  Award,
  MapPin,
  Wifi,
  Clock,
  Compass,
  FileCheck,
  ChevronDown,
  HelpCircle,
  PhoneCall,
  Search,
  ExternalLink,
  GitBranch,
  Calendar,
  Home,
  Layers
} from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import Card from '../../components/common/Card';
import Modal from '../../components/common/Modal';

export default function LandingPage({ onNavigate, onOpenLogin, onOpenRegister }) {
  const [selectedHall, setSelectedHall] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [hallFilter, setHallFilter] = useState('All');

  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [trackerQuery, setTrackerQuery] = useState('221-15-5842');
  const [trackedApp, setTrackedApp] = useState(mockApplications[0]);

  const filteredHalls = hallFilter === 'All'
    ? mockHalls
    : mockHalls.filter((h) => h.type.toLowerCase() === hallFilter.toLowerCase());

  const stats = [
    { label: 'Student Halls', value: '13 Halls', sub: 'Scholar Garden Campus Residences' },
    { label: 'Total Levels / Floors', value: '101 Floors', sub: 'Across 13 Residential Blocks' },
    { label: 'Residential Rooms', value: '2,033 Rooms', sub: 'Standard & Shared Living Units' },
    { label: 'Total Bed Capacity', value: '7,706 Beds', sub: 'Male & Female Accommodations' }
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Student ID Authentication',
      desc: 'Verify eligibility using DIU student credentials and semester academic status.'
    },
    {
      num: '02',
      title: 'Multi-Step Application',
      desc: 'Submit hall and room preferences, personal information, and required documents.'
    },
    {
      num: '03',
      title: 'Officer Verification',
      desc: 'Official verification committee validates uploaded transcripts and residence proofs.'
    },
    {
      num: '04',
      title: 'Automated Merit Ranking',
      desc: 'Transparent scoring engine evaluates CGPA, distance, and socio-economic criteria.'
    },
    {
      num: '05',
      title: 'Seat Offer & Online Payment',
      desc: 'Shortlisted candidates accept hall offers and pay confirmation fees digitally.'
    },
    {
      num: '06',
      title: 'Digital Check-in',
      desc: 'Collect RFID room key, sign room condition inventory, and move into your hall.'
    }
  ];

  const faqs = [
    {
      q: 'Who is eligible to apply for DIU residential hall accommodation?',
      a: 'Any regular full-time undergraduate or postgraduate student of Daffodil International University with a minimum CGPA of 2.50, at least 15 completed credits, and no active disciplinary infractions is eligible.'
    },
    {
      q: 'How does the merit-based allocation algorithm work?',
      a: 'DIU Nest employs a transparent 100-point merit scoring formula: 40% CGPA, 25% geographic distance from Savar campus, 20% guardian socio-economic evaluation, 10% co-curricular achievements, and 5% special quota bonus. Full scoring breakdowns are visible to applicants.'
    },
    {
      q: 'What happens if my uploaded documents are unclear or rejected?',
      a: 'If a Verification Officer spots an issue (e.g., blurred grade sheet), the application transitions to "Correction Required". You receive an instant notification with specific administrative remarks to re-upload without losing your application priority.'
    },
    {
      q: 'How long do I have to accept a seat offer?',
      a: 'Seat offers carry a strict 5-day confirmation deadline. If an offer is declined or expires, the seat is automatically re-allocated to the top candidate on the general waitlist.'
    },
    {
      q: 'Can I request a room or hall transfer after allocation?',
      a: 'Yes. Once checked in, students can submit a formal Seat Transfer Request through their student dashboard, subject to vacancy and Warden approval.'
    }
  ];

  const handleSearchTracker = (e) => {
    e.preventDefault();
    const query = trackerQuery.trim();
    const found = mockApplications.find(
      (a) => a.studentId === query || a.appNumber.toLowerCase() === query.toLowerCase()
    );
    if (found) {
      setTrackedApp(found);
    } else {
      setTrackedApp(null);
    }
  };

  return (
    <div className="landing-page">

      <section style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)', padding: '5rem 0 4rem', borderBottom: '1px solid var(--diu-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3.5rem', alignItems: 'center' }}>
            <div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.9rem', background: 'var(--diu-primary-subtle)', borderRadius: 'var(--radius-full)', border: '1px solid var(--diu-info-border)', marginBottom: '1.5rem' }}>
                <ShieldCheck size={16} color="var(--diu-primary)" />
                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--diu-primary)', letterSpacing: '0.02em' }}>
                  Official Digital Hall Platform · Daffodil International University
                </span>
              </div>

              <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--diu-navy)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                A Smarter, Fairer Way to Live at <span style={{ color: 'var(--diu-primary)' }}>DIU Campus</span>
              </h1>

              <p style={{ fontSize: '1.1rem', color: 'var(--diu-text-secondary)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '580px' }}>
                Welcome to <strong>DIU Nest</strong>. Digitize your entire residential hall experience — from multi-step seat application and real-time document verification to transparent merit scoring and online fee confirmation.
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Button
                  variant="primary"
                  size="lg"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={onOpenRegister}
                >
                  Apply for Hall Seat
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={Building2}
                  onClick={() => onNavigate('halls')}
                >
                  Explore Available Halls
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  icon={GitBranch}
                  onClick={() => setIsTrackerOpen(true)}
                >
                  Track Application →
                </Button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.8125rem', color: 'var(--diu-text-muted)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={15} color="var(--diu-success)" />
                  <span>Merit-Based Allocation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={15} color="var(--diu-success)" />
                  <span>Zero Manual Paperwork</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle size={15} color="var(--diu-success)" />
                  <span>Real-Time Seat Tracking</span>
                </div>
              </div>
            </div>

            <div className="animate-scale-in" style={{ animationDelay: '0.15s' }}>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(21, 52, 91, 0.28)', border: '1px solid var(--diu-border)', transform: 'translateZ(0)' }} className="card-hover">
                <div className="card-img-zoom" style={{ height: '390px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                    alt="Daffodil International University Residential Hall Campus"
                  />
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.75rem', background: 'linear-gradient(to top, rgba(15,23,42,0.96) 0%, rgba(15,23,42,0.65) 60%, transparent 100%)', color: '#FFF' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--diu-accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Daffodil Smart City, Ashulia
                      </div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                        Yunus Khan & Rowshan Ara Scholar Gardens
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#CBD5E1', marginTop: '0.2rem' }}>
                        13 Halls · 101 Floors · 7,706 Beds
                      </div>
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.35rem 0.8rem', background: 'rgba(34, 197, 94, 0.2)', border: '1px solid rgba(34, 197, 94, 0.4)', borderRadius: 'var(--radius-full)', color: '#4ADE80', fontSize: '0.75rem', fontWeight: 700 }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} className="pulse-glow" />
                      Open for Fall 2026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '2.5rem 0', background: 'var(--diu-navy)', color: '#FFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {stats.map((s, idx) => (
              <div key={idx} style={{ borderRight: idx < stats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none', padding: '0.5rem 1rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--diu-accent)', fontFamily: 'var(--font-heading)' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, marginTop: '0.25rem' }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.2rem' }}>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="halls-section" style={{ padding: '5rem 0', background: 'var(--diu-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem' }}>
            <Badge variant="navy" style={{ marginBottom: '0.75rem' }}>Campus Accommodations</Badge>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--diu-navy)' }}>
              Explore DIU Residential Halls
            </h2>
            <p style={{ marginTop: '0.5rem' }}>
              Modern, secure, and fully equipped university residential halls providing conducive living and study environments.
            </p>

            <div style={{ display: 'inline-flex', background: 'var(--diu-surface)', padding: '0.35rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--diu-border)', marginTop: '1.5rem', gap: '0.35rem' }}>
              {['All', 'Male', 'Female'].map((f) => (
                <button
                  key={f}
                  type="button"
                  className={`btn btn-sm ${hallFilter === f ? 'btn-primary' : 'btn-ghost'}`}
                  onClick={() => setHallFilter(f)}
                >
                  {f === 'All' ? 'All Halls' : `${f} Halls`}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {filteredHalls.map((hall, idx) => (
              <div
                key={hall.id}
                className={`card card-hover animate-fade-in-up stagger-${(idx % 6) + 1}`}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div className="card-img-zoom" style={{ height: '210px' }}>
                  <img
                    src={hall.image}
                    alt={hall.name}
                  />
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 2 }}>
                    <Badge variant={hall.type === 'Male' ? 'info' : 'warning'}>
                      {hall.type} Accommodation
                    </Badge>
                  </div>
                  <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', zIndex: 2, background: 'rgba(15,23,42,0.82)', backdropFilter: 'blur(6px)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)', color: '#FFF', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={13} color="var(--diu-accent)" />
                    {hall.campus}
                  </div>
                </div>

                <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--diu-navy)', fontWeight: 800 }}>
                    {hall.name}
                  </h3>
                  <div style={{ fontSize: '0.825rem', color: 'var(--diu-text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <MapPin size={13} style={{ color: 'var(--diu-primary)' }} />
                    <span>{hall.campus}</span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--diu-text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5, flex: 1 }}>
                    {hall.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', padding: '0.75rem', background: 'var(--diu-surface-alt)', borderRadius: 'var(--radius-md)', marginBottom: '1.15rem', textAlign: 'center', fontSize: '0.8125rem' }}>
                    <div>
                      <span style={{ color: 'var(--diu-text-muted)', display: 'block', fontSize: '0.7rem' }}>Total Capacity</span>
                      <strong style={{ color: 'var(--diu-navy)', fontSize: '0.95rem' }}>{hall.totalCapacity} Seats</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--diu-text-muted)', display: 'block', fontSize: '0.7rem' }}>Levels / Floors</span>
                      <strong style={{ color: 'var(--diu-navy)', fontSize: '0.95rem' }}>{hall.floorsCount} Floors</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--diu-text-muted)', display: 'block', fontSize: '0.7rem' }}>Available Now</span>
                      <strong style={{ color: 'var(--diu-success)', fontSize: '0.95rem' }}>{hall.availableCount} Available</strong>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {hall.amenities.slice(0, 4).map((amenity, i) => (
                      <span key={i} style={{ fontSize: '0.72rem', background: 'var(--diu-surface-hover)', border: '1px solid var(--diu-border)', padding: '0.18rem 0.5rem', borderRadius: 'var(--radius-sm)', color: 'var(--diu-text-secondary)' }}>
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '0.65rem', marginTop: 'auto' }}>
                    <Button
                      variant="outline"
                      size="sm"
                      style={{ flex: 1 }}
                      onClick={() => setSelectedHall(hall)}
                    >
                      View Hall Details
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      style={{ flex: 1 }}
                      onClick={onOpenRegister}
                    >
                      Apply Seat
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'var(--diu-surface)', borderTop: '1px solid var(--diu-border)', borderBottom: '1px solid var(--diu-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
            <Badge variant="info" style={{ marginBottom: '0.75rem' }}>Step-by-Step Procedure</Badge>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--diu-navy)' }}>
              How the Application Process Works
            </h2>
            <p style={{ marginTop: '0.5rem' }}>
              A fully digitized 6-step lifecycle from student eligibility authentication to physical room check-in.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {workflowSteps.map((step, idx) => (
              <div key={idx} style={{ padding: '1.75rem', borderRadius: 'var(--radius-lg)', background: 'var(--diu-surface-hover)', border: '1px solid var(--diu-border)', position: 'relative' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--diu-primary)', opacity: 0.25, lineHeight: 1, marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  {step.num}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--diu-navy)', marginBottom: '0.5rem' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--diu-text-secondary)', lineHeight: 1.5 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'var(--diu-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <Badge variant="navy" style={{ marginBottom: '0.75rem' }}>Syndicate Approved Policy</Badge>
              <h2 style={{ fontSize: '2.2rem', color: 'var(--diu-navy)', marginBottom: '1rem' }}>
                Guaranteed Fairness & Transparent Merit Ranking
              </h2>
              <p style={{ color: 'var(--diu-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Unlike manual queues or non-transparent selection, DIU Nest evaluates every application against objective institutional weights configured by the Provost Council.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--diu-primary-subtle)', color: 'var(--diu-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>40%</div>
                  <div>
                    <strong style={{ color: 'var(--diu-navy)', fontSize: '0.95rem' }}>Academic Excellence (CGPA)</strong>
                    <p style={{ fontSize: '0.825rem', marginTop: '0.15rem' }}>Direct integration with DIU ERP prevents tampered grades.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--diu-primary-subtle)', color: 'var(--diu-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>25%</div>
                  <div>
                    <strong style={{ color: 'var(--diu-navy)', fontSize: '0.95rem' }}>Geographic Distance from Campus</strong>
                    <p style={{ fontSize: '0.825rem', marginTop: '0.15rem' }}>Prioritizes students residing outside Dhaka and remote districts.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--diu-primary-subtle)', color: 'var(--diu-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>20%</div>
                  <div>
                    <strong style={{ color: 'var(--diu-navy)', fontSize: '0.95rem' }}>Socio-Economic Evaluation</strong>
                    <p style={{ fontSize: '0.825rem', marginTop: '0.15rem' }}>Guardian income certification ensures support for deserving students.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--diu-primary-subtle)', color: 'var(--diu-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', flexShrink: 0 }}>15%</div>
                  <div>
                    <strong style={{ color: 'var(--diu-navy)', fontSize: '0.95rem' }}>Co-Curriculars & Special Quota</strong>
                    <p style={{ fontSize: '0.825rem', marginTop: '0.15rem' }}>Recognizes athletic, cultural, debate, and accessibility requirements.</p>
                  </div>
                </div>
              </div>

              <Button variant="navy" size="md" onClick={() => onNavigate('how-it-works')}>
                Read Full Scoring Guidelines
              </Button>
            </div>

            <div style={{ background: '#FFF', borderRadius: 'var(--radius-xl)', padding: '2rem', border: '1px solid var(--diu-border)', boxShadow: 'var(--shadow-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--diu-border)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--diu-primary)', textTransform: 'uppercase' }}>Sample Applicant Ranking</div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--diu-navy)' }}>DIU-NEST-2026-F-0842</div>
                </div>
                <Badge variant="success">Provisional Shortlist #14</Badge>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--diu-primary)' }}>87.20</span>
                <span style={{ color: 'var(--diu-text-muted)', fontSize: '1rem' }}>/ 100.00 Total Score</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--diu-text-secondary)' }}>Academic CGPA (3.82)</span>
                  <strong>38.20 / 40.0</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--diu-text-secondary)' }}>Distance: Chittagong (265 km)</span>
                  <strong>25.00 / 25.0</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--diu-text-secondary)' }}>Socio-economic Need</span>
                  <strong>18.00 / 20.0</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--diu-text-secondary)' }}>Co-curricular (ICPC Contestant)</span>
                  <strong>6.00 / 10.0</strong>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '0.75rem', background: 'var(--diu-surface-alt)', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', color: 'var(--diu-text-muted)' }}>
                🔒 Every computation is locked and mathematically auditable by the Office of the Provost.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 0', background: 'var(--diu-surface)', borderTop: '1px solid var(--diu-border)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Badge variant="warning" style={{ marginBottom: '0.75rem' }}>Student Help Center</Badge>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--diu-navy)' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ marginTop: '0.5rem' }}>
              Common answers regarding hall seat applications, eligibility rules, and payments.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid var(--diu-border)',
                  borderRadius: 'var(--radius-md)',
                  background: activeFaq === idx ? 'var(--diu-surface-hover)' : 'var(--diu-surface)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)'
                }}
              >
                <button
                  type="button"
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--diu-navy)'
                  }}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="animate-fade-in-up" style={{ padding: '0 1.5rem 1.25rem', color: 'var(--diu-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, borderTop: '1px solid var(--diu-border-subtle)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, var(--diu-navy) 0%, var(--diu-primary) 100%)', color: '#FFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ color: '#FFF', fontSize: '2.4rem', marginBottom: '1rem' }}>
            Ready to Secure Your Campus Seat?
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '1.05rem', marginBottom: '2rem' }}>
            Fall 2026 application cycle is currently active. Submit your preferences today before the deadline closes.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              size="lg"
              style={{ background: '#FFF', color: 'var(--diu-navy)', boxShadow: 'var(--shadow-lg)' }}
              onClick={onOpenRegister}
            >
              Start Hall Application
            </Button>
            <Button
              variant="outline"
              size="lg"
              style={{ color: '#FFF', borderColor: '#FFF' }}
              onClick={onOpenLogin}
            >
              Sign In to Account
            </Button>
          </div>
        </div>
      </section>

      {selectedHall && (
        <Modal
          isOpen={!!selectedHall}
          onClose={() => setSelectedHall(null)}
          title={selectedHall.name}
          size="lg"
        >
          <div>
            <div className="card-img-zoom" style={{ height: '260px', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
              <img
                src={selectedHall.image}
                alt={selectedHall.name}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--diu-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Residential Facility</span>
                <div style={{ fontWeight: 800, color: 'var(--diu-navy)', fontSize: '1.15rem' }}>{selectedHall.campus}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Badge variant={selectedHall.type === 'Male' ? 'info' : 'warning'}>
                  {selectedHall.type} Residential Hall
                </Badge>
                <Badge variant="navy">{selectedHall.code}</Badge>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', padding: '0.85rem', background: 'var(--diu-surface-alt)', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--diu-navy)' }}>{selectedHall.beds}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--diu-text-muted)' }}>Total Bed Capacity</div>
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--diu-navy)' }}>{selectedHall.floorsCount}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--diu-text-muted)' }}>Levels / Floors</div>
              </div>
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--diu-navy)' }}>{selectedHall.roomsCount}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--diu-text-muted)' }}>Residential Rooms</div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--diu-text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              {selectedHall.description}
            </p>

            <h4 style={{ fontSize: '0.95rem', color: 'var(--diu-navy)', marginBottom: '0.5rem' }}>
              Available Room Configurations & Fee Breakdown
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {selectedHall.roomTypes.map((rt, i) => (
                <div key={i} style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--diu-border)', background: 'var(--diu-surface-hover)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--diu-navy)', fontSize: '0.95rem' }}>{rt.type}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--diu-primary)', margin: '0.25rem 0' }}>
                    BDT {rt.rent.toLocaleString()} <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--diu-text-muted)' }}>/ month</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)', marginBottom: '0.5rem' }}>
                    Caution Deposit: BDT {rt.deposit.toLocaleString()} (Refundable)
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--diu-text-secondary)' }}>
                    {rt.description}
                  </div>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '0.95rem', color: 'var(--diu-navy)', marginBottom: '0.5rem' }}>
              Hall Facilities & Safety Infrastructure
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {selectedHall.amenities.map((a, i) => (
                <span key={i} style={{ fontSize: '0.8rem', background: 'var(--diu-primary-subtle)', color: 'var(--diu-primary)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
                  ✓ {a}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', borderTop: '1px solid var(--diu-border)', paddingTop: '1rem' }}>
              <Button variant="ghost" size="sm" onClick={() => setSelectedHall(null)}>
                Close
              </Button>
              <Button variant="primary" size="sm" onClick={() => { setSelectedHall(null); onOpenRegister(); }}>
                Apply to this Hall
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {isTrackerOpen && (
        <Modal
          isOpen={isTrackerOpen}
          onClose={() => setIsTrackerOpen(false)}
          title="Track Hall Seat Application Status"
          size="md"
        >
          <div>
            <form onSubmit={handleSearchTracker} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <div className="input-with-icon" style={{ flex: 1 }}>
                <Search size={16} className="input-icon" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Student ID (e.g. 221-15-5842) or App ID..."
                  value={trackerQuery}
                  onChange={(e) => setTrackerQuery(e.target.value)}
                  style={{ fontSize: '0.875rem' }}
                />
              </div>
              <Button type="submit" variant="primary" size="sm">
                Track
              </Button>
            </form>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.75rem', color: 'var(--diu-text-muted)' }}>
              <span>Try sample:</span>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{ padding: '0.15rem 0.45rem', fontSize: '0.72rem' }}
                onClick={() => {
                  setTrackerQuery('221-15-5842');
                  setTrackedApp(mockApplications[0]);
                }}
              >
                221-15-5842 (Offered)
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                style={{ padding: '0.15rem 0.45rem', fontSize: '0.72rem' }}
                onClick={() => {
                  setTrackerQuery('222-15-5801');
                  setTrackedApp(mockApplications[1]);
                }}
              >
                222-15-5801 (Verification)
              </button>
            </div>

            {trackedApp ? (
              <div style={{ border: '1px solid var(--diu-border)', borderRadius: 'var(--radius-md)', padding: '1.25rem', background: 'var(--diu-surface-hover)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div>
                    <strong style={{ color: 'var(--diu-navy)', fontSize: '1rem', fontFamily: 'var(--font-mono)' }}>
                      {trackedApp.appNumber}
                    </strong>
                    <div style={{ fontSize: '0.8rem', color: 'var(--diu-text-secondary)', marginTop: '0.15rem' }}>
                      {trackedApp.studentName} ({trackedApp.studentId}) · {trackedApp.deptShort}
                    </div>
                  </div>
                  <Badge variant="auto">{trackedApp.status}</Badge>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem', marginBottom: '1rem' }}>
                  <div>
                    <span style={{ color: 'var(--diu-text-muted)' }}>Preferred Hall:</span>
                    <div style={{ fontWeight: 600 }}>{trackedApp.hallPreferences[0]?.hallName}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--diu-text-muted)' }}>Submitted:</span>
                    <div>{trackedApp.submissionDate}</div>
                  </div>
                  {trackedApp.meritScore && (
                    <div>
                      <span style={{ color: 'var(--diu-text-muted)' }}>Merit Score & Rank:</span>
                      <div style={{ color: 'var(--diu-primary)', fontWeight: 700 }}>
                        {trackedApp.meritScore.totalScore.toFixed(2)} pts (Rank #{trackedApp.meritScore.rank})
                      </div>
                    </div>
                  )}
                  {trackedApp.seatOffer && (
                    <div>
                      <span style={{ color: 'var(--diu-text-muted)' }}>Allotted Seat:</span>
                      <div style={{ color: 'var(--diu-success-text)', fontWeight: 700 }}>
                        Room {trackedApp.seatOffer.roomNumber} ({trackedApp.seatOffer.seatNumber})
                      </div>
                    </div>
                  )}
                </div>

                <div style={{ fontSize: '0.78rem', color: 'var(--diu-text-muted)', borderTop: '1px solid var(--diu-border-subtle)', paddingTop: '0.75rem' }}>
                  <strong>Latest Milestone:</strong> {trackedApp.timeline[trackedApp.timeline.length - 1]?.remarks}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--diu-text-muted)' }}>
                No active application record found for "{trackerQuery}".
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
