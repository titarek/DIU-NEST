import React from 'react';

export default function Card({
  children,
  title,
  subtitle,
  action,
  footer,
  hover = false,
  className = '',
  bodyClassName = '',
  ...props
}) {
  return (
    <div className={`card ${hover ? 'card-hover' : ''} ${className}`} {...props}>
      {(title || subtitle || action) && (
        <div className="card-header">
          <div>
            {title && <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{title}</h3>}
            {subtitle && <p style={{ fontSize: '0.8rem', color: 'var(--diu-text-muted)', marginTop: '0.2rem' }}>{subtitle}</p>}
          </div>
          {action && <div className="card-header-action">{action}</div>}
        </div>
      )}
      <div className={`card-body ${bodyClassName}`}>{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

