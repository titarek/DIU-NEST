import React from 'react';

export default function StatCard({
  label,
  value,
  subtext,
  icon: Icon,
  variant = 'primary',
  trend
}) {
  return (
    <div className={`stat-card stat-${variant}`}>
      <div className="stat-content">
        <span className="stat-label">{label}</span>
        <span className="stat-value">{value}</span>
        {subtext && <span className="stat-subtext">{subtext}</span>}
      </div>
      {Icon && (
        <div className="stat-icon" style={{ backgroundColor: `var(--diu-${variant === 'primary' ? 'primary-subtle' : variant === 'navy' ? 'surface-alt' : variant + '-subtle'})`, color: `var(--diu-${variant})` }}>
          <Icon size={22} />
        </div>
      )}
    </div>
  );
}

