import React from 'react';

export default function Badge({
  children,
  variant = 'neutral',
  dot = false,
  className = ''
}) {
  const getVariant = (val) => {
    if (!val) return 'neutral';
    const lower = String(val).toLowerCase();
    if (lower.includes('success') || lower.includes('verified') || lower.includes('approved') || lower.includes('allocated') || lower.includes('checked-in') || lower.includes('available') || lower.includes('active')) return 'success';
    if (lower.includes('warning') || lower.includes('pending') || lower.includes('correction') || lower.includes('waitlisted') || lower.includes('almost') || lower.includes('reserved') || lower.includes('offer')) return 'warning';
    if (lower.includes('danger') || lower.includes('error') || lower.includes('rejected') || lower.includes('declined') || lower.includes('overdue') || lower.includes('maintenance')) return 'danger';
    if (lower.includes('info') || lower.includes('submitted') || lower.includes('scored') || lower.includes('shortlisted') || lower.includes('occupied')) return 'info';
    if (lower.includes('draft') || lower.includes('closed')) return 'neutral';
    return variant;
  };

  const computedVariant = variant === 'auto' ? getVariant(children) : variant;

  return (
    <span className={`badge badge-${computedVariant} ${className}`}>
      {dot && <span className="badge-dot" style={{ backgroundColor: 'currentColor' }} />}
      {children}
    </span>
  );
}

