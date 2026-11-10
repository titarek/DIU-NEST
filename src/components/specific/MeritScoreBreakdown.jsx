import React from 'react';
import { Award, Compass, DollarSign, Trophy, ShieldCheck, Info } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';

export default function MeritScoreBreakdown({ meritScore }) {
  if (!meritScore) {
    return (
      <Card title="Merit Score Calculation">
        <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--diu-text-muted)' }}>
          <Info size={32} style={{ margin: '0 auto 0.75rem', display: 'block', opacity: 0.5 }} />
          <p>Application is currently awaiting verification before automated merit scoring computation.</p>
        </div>
      </Card>
    );
  }

  const criteria = [
    {
      title: 'Academic Performance (CGPA)',
      weight: '40% Maximum Weight',
      score: meritScore.cgpaScore,
      max: 40,
      icon: Award,
      color: 'var(--diu-primary)',
      desc: 'Based on official CGPA verified from DIU ERP (3.82 / 4.00)'
    },
    {
      title: 'Geographic Distance from Campus',
      weight: '25% Maximum Weight',
      score: meritScore.distanceScore,
      max: 25,
      icon: Compass,
      color: 'var(--diu-navy)',
      desc: 'Permanent residence: Chittagong (265 km > 250km max tier)'
    },
    {
      title: 'Socio-Economic Evaluation',
      weight: '20% Maximum Weight',
      score: meritScore.financialNeedScore,
      max: 20,
      icon: DollarSign,
      color: 'var(--diu-success)',
      desc: 'Guardian verified annual household income below threshold'
    },
    {
      title: 'Co-Curricular & Leadership',
      weight: '10% Maximum Weight',
      score: meritScore.extracurricularScore,
      max: 10,
      icon: Trophy,
      color: 'var(--diu-warning)',
      desc: 'National programming contest participation & club leadership'
    },
    {
      title: 'Special Quota / Category Bonus',
      weight: '5 Points Additional',
      score: meritScore.quotaBonus || 0,
      max: 5,
      icon: ShieldCheck,
      color: 'var(--diu-accent-dark)',
      desc: 'Verified special quota credentials (if applicable)'
    }
  ];

  return (
    <Card
      title="Merit Score & Institutional Ranking"
      subtitle="Computed transparently based on university executive council allocation weights"
      action={<Badge variant="success">{meritScore.meritCategory || 'Shortlisted'}</Badge>}
    >

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.75rem', padding: '1.25rem', background: 'var(--diu-primary-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--diu-info-border)' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--diu-text-muted)', textTransform: 'uppercase' }}>
            Total Computed Merit Score
          </span>
          <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--diu-primary)', lineHeight: 1.1, marginTop: '0.25rem' }}>
            {meritScore.totalScore.toFixed(2)} <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--diu-text-secondary)' }}>/ 100</span>
          </div>
        </div>

        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--diu-text-muted)', textTransform: 'uppercase' }}>
            Allocated Institutional Rank
          </span>
          <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--diu-navy)', lineHeight: 1.1, marginTop: '0.25rem' }}>
            #{meritScore.rank} <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--diu-text-muted)' }}>of {meritScore.totalApplicants} applicants</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {criteria.map((c, i) => {
          const Icon = c.icon;
          const percentage = Math.min(100, Math.round((c.score / c.max) * 100));

          return (
            <div key={i} style={{ borderBottom: i < criteria.length - 1 ? '1px solid var(--diu-border-subtle)' : 'none', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon size={16} color={c.color} />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--diu-navy)' }}>{c.title}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)' }}>({c.weight})</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--diu-navy)' }}>
                  {c.score.toFixed(1)} <span style={{ fontSize: '0.8rem', color: 'var(--diu-text-muted)', fontWeight: 500 }}>/ {c.max}</span>
                </div>
              </div>

              <div style={{ width: '100%', height: '8px', background: 'var(--diu-surface-alt)', borderRadius: 'var(--radius-full)', overflow: 'hidden', margin: '0.4rem 0' }}>
                <div
                  style={{
                    width: `${percentage}%`,
                    height: '100%',
                    background: c.color,
                    borderRadius: 'var(--radius-full)',
                    transition: 'width 0.5s ease'
                  }}
                />
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--diu-text-muted)' }}>
                {c.desc}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '1.5rem', padding: '0.85rem 1rem', background: 'var(--diu-surface-alt)', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--diu-text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
        <Info size={16} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--diu-primary)' }} />
        <div>
          <strong>Transparent Ranking Assurance:</strong> Rankings are updated automatically after verification officer sign-off. Any manual administrative adjustment is recorded in public audit records and requires Provost Committee justification.
        </div>
      </div>
    </Card>
  );
}

