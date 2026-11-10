import React from 'react';
import {
  Check,
  Clock,
  AlertTriangle,
  FileCheck,
  UserCheck,
  Award,
  CheckCircle,
  Home,
  Key,
  XCircle,
  FileText
} from 'lucide-react';
import Badge from '../common/Badge';

export default function ApplicationTimeline({ timeline = [], currentStatus = '' }) {
  const getIconForStatus = (status) => {
    switch (status) {
      case 'Draft': return FileText;
      case 'Submitted': return Check;
      case 'Under Verification': return Clock;
      case 'Correction Required': return AlertTriangle;
      case 'Verified': return FileCheck;
      case 'Scored & Ranked': return Award;
      case 'Shortlisted': return UserCheck;
      case 'Seat Offered': return Home;
      case 'Accepted': return CheckCircle;
      case 'Allocated': return CheckCircle;
      case 'Checked-in': return Key;
      case 'Rejected':
      case 'Declined': return XCircle;
      default: return Check;
    }
  };

  return (
    <div className="tracking-timeline">
      {timeline.map((item, idx) => {
        const Icon = getIconForStatus(item.status);
        const isLatest = idx === timeline.length - 1;
        const isWarn = item.status === 'Correction Required' || item.status === 'Rejected';

        return (
          <div
            key={idx}
            className={`timeline-item ${isLatest ? (isWarn ? 'warn' : 'active') : 'completed'}`}
          >
            <div className="timeline-node">
              <Icon size={17} />
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span className="timeline-title">{item.status}</span>
                  {isLatest && <Badge variant="info">Current State</Badge>}
                </div>
                <span className="timeline-date">{item.timestamp}</span>
              </div>
              <p className="timeline-desc">
                Action by: <strong>{item.actor}</strong>
              </p>
              {item.remarks && (
                <div className="timeline-remarks">
                  <strong>Remarks:</strong> {item.remarks}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

