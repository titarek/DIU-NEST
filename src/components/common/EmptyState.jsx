import React from 'react';
import { Inbox } from 'lucide-react';
import Button from './Button';

export default function EmptyState({
  icon: Icon = Inbox,
  title = 'No Data Available',
  description = 'There are no items or activities to display at this moment.',
  actionLabel,
  onAction
}) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <Icon size={32} />
      </div>
      <h4 className="empty-state-title">{title}</h4>
      <p className="empty-state-text">{description}</p>
      {actionLabel && onAction && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

