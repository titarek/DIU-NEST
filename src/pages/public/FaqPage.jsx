import React, { useState } from 'react';
import { Search, ChevronDown, HelpCircle, Mail, Phone } from 'lucide-react';
import Badge from '../../components/common/Badge';

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ['All', 'Eligibility', 'Application Process', 'Merit Scoring', 'Fees & Payments', 'Hall Living'];

  const allFaqs = [
    {
      category: 'Eligibility',
      q: 'Who can apply for DIU residential hall accommodation?',
      a: 'Any enrolled, full-time undergraduate or postgraduate student at Daffodil International University who has completed at least 15 academic credits, maintains a minimum CGPA of 2.50, and has a clean disciplinary record from the Proctor Office is eligible.'
    },
    {
      category: 'Eligibility',
      q: 'Can 1st semester freshman students apply immediately?',
      a: 'Freshman students can apply under the special First-Year Regional Quota during their first semester if their permanent residence is outside Dhaka division, upon submitting their admission letter and Higher Secondary certificate.'
    },
    {
      category: 'Application Process',
      q: 'How many applications can I submit at the same time?',
      a: 'Per university syndicate guidelines, a student can have at most ONE active application per application cycle. Submitting duplicate applications will flag the account.'
    },
    {
      category: 'Application Process',
      q: 'What should I do if my application enters "Correction Required" state?',
      a: 'Log in to your student dashboard, navigate to "Application Tracking" or "My Applications", view the officer remarks indicating which document was unclear or rejected, and use the re-upload button to submit a legible replacement.'
    },
    {
      category: 'Merit Scoring',
      q: 'How is geographic distance calculated?',
      a: 'Distance is measured in kilometers from the applicant’s permanent upazila/district administrative center to the Daffodil Smart City permanent campus at Ashulia. Students residing over 250 km away receive the maximum 25 distance points.'
    },
    {
      category: 'Merit Scoring',
      q: 'Can I appeal against my merit score or rank?',
      a: 'Yes. After provisional merit list publication, a 3-day appeal window is opened. Students can submit an appeal through the portal with supporting documentary evidence for review by the Provost Committee.'
    },
    {
      category: 'Fees & Payments',
      q: 'Which payment methods are supported for hall fees?',
      a: 'DIU Nest supports bKash, Nagad, and Rocket mobile financial services, DBBL Nexus debit cards, and offline bank deposit slips verified by the DIU Accounts Division.'
    },
    {
      category: 'Fees & Payments',
      q: 'Is the hall caution deposit refundable upon vacating?',
      a: 'Yes. The security caution deposit (BDT 3,000 to BDT 5,000 depending on room type) is 100% refundable upon graduation or formal vacating, after clearance from the Hall Warden regarding room inventory condition.'
    },
    {
      category: 'Hall Living',
      q: 'What are the hall entry and curfew timings?',
      a: 'All students are required to enter the hall by 9:30 PM on regular days. Extension of night stay or late entry requires prior written approval from the Hall Warden or Provost Office.'
    },
    {
      category: 'Hall Living',
      q: 'Can I request to swap seats with a friend in another room?',
      a: 'Yes. Once checked in, students can file a "Seat Swap Request" in the portal. Both students must accept the reciprocal swap request and it must be endorsed by the Hall Warden.'
    }
  ];

  const filteredFaqs = allFaqs.filter((f) => {
    const matchesCat = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = f.q.toLowerCase().includes(searchTerm.toLowerCase()) || f.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '840px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <Badge variant="warning" style={{ marginBottom: '0.75rem' }}>Frequently Asked Questions</Badge>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--diu-navy)', marginBottom: '0.75rem' }}>
          Got Questions? We’ve Got Answers
        </h1>
        <p style={{ color: 'var(--diu-text-secondary)', fontSize: '1rem' }}>
          Find fast answers regarding DIU hall policies, selection criteria, payment verifications, and accommodation rules.
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div className="input-with-icon" style={{ marginBottom: '1rem' }}>
          <Search size={18} className="input-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Search FAQs by keyword (e.g. CGPA, distance, payment, curfew)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`btn btn-sm ${activeCategory === c ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3rem' }}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid var(--diu-border)',
                borderRadius: 'var(--radius-md)',
                background: openIndex === idx ? 'var(--diu-surface-hover)' : 'var(--diu-surface)',
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
                  fontSize: '0.95rem',
                  color: 'var(--diu-navy)'
                }}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    flexShrink: 0
                  }}
                />
              </button>
              {openIndex === idx && (
                <div style={{ padding: '0 1.5rem 1.25rem', color: 'var(--diu-text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, borderTop: '1px solid var(--diu-border-subtle)' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--diu-text-muted)' }}>
            No matching questions found for "{searchTerm}".
          </div>
        )}
      </div>

      <div style={{ background: 'var(--diu-surface-alt)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', border: '1px solid var(--diu-border)' }}>
        <h4 style={{ color: 'var(--diu-navy)', marginBottom: '0.35rem' }}>Still have an unanswered inquiry?</h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--diu-text-secondary)', marginBottom: '0.75rem' }}>
          Contact the Office of the Provost or visit the Hall Administration counter in person.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--diu-primary)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Phone size={15} /> +880 1819-234567
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Mail size={15} /> provost.halls@diu.edu.bd
          </span>
        </div>
      </div>
    </div>
  );
}

