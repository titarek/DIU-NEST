import React from 'react';
import { Printer, CheckCircle, FileText, QrCode } from 'lucide-react';
import Modal from '../common/Modal';
import Button from '../common/Button';

export default function AcknowledgementSlipModal({ isOpen, onClose, application }) {
  if (!application) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Application Acknowledgement Slip"
      size="md"
      footer={
        <div style={{ display: 'flex', gap: '0.75rem', width: '100%', justifyContent: 'space-between' }}>
          <Button variant="outline" size="sm" icon={Printer} onClick={handlePrint}>
            Print / Save as PDF
          </Button>
          <Button variant="primary" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>
      }
    >
      <div id="printable-ack-slip" style={{ padding: '1rem', border: '1px solid var(--diu-border)', borderRadius: 'var(--radius-md)', background: '#FFF' }}>

        <div style={{ textAlign: 'center', borderBottom: '2px solid var(--diu-navy)', paddingBottom: '0.85rem', marginBottom: '1rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--diu-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Daffodil International University
          </div>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--diu-navy)', margin: '0.15rem 0' }}>
            Hall Seat Application Acknowledgement
          </h2>
          <div style={{ fontSize: '0.8rem', color: 'var(--diu-primary)', fontWeight: 600 }}>
            {application.cycleName}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--diu-surface-hover)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--diu-border)', marginBottom: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)' }}>Application Reference Number</span>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--diu-navy)', fontFamily: 'var(--font-mono)' }}>
              {application.appNumber}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--diu-success-text)', fontWeight: 600 }}>
              Submitted on: {application.submissionDate}
            </span>
          </div>
          <div style={{ padding: '0.5rem', background: '#FFF', borderRadius: 'var(--radius-sm)', border: '1px solid var(--diu-border)', textAlign: 'center' }}>
            <QrCode size={48} color="var(--diu-navy)" />
            <div style={{ fontSize: '0.65rem', color: 'var(--diu-text-muted)' }}>VERIFIED</div>
          </div>
        </div>

        <h4 style={{ fontSize: '0.875rem', color: 'var(--diu-navy)', borderBottom: '1px solid var(--diu-border-subtle)', paddingBottom: '0.35rem', marginBottom: '0.5rem' }}>
          Applicant Particulars
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.8rem', marginBottom: '1rem' }}>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Full Name:</span>
            <div style={{ fontWeight: 600 }}>{application.studentName}</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Student ID:</span>
            <div style={{ fontWeight: 600, color: 'var(--diu-primary)' }}>{application.studentId}</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Department:</span>
            <div>{application.department} ({application.deptShort})</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Semester & CGPA:</span>
            <div>{application.semester} Semester (CGPA: {application.cgpa})</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Permanent District:</span>
            <div>{application.homeDistrict} (~{application.distanceKm} km from Campus)</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Current Status:</span>
            <div style={{ fontWeight: 600, color: 'var(--diu-primary)' }}>{application.status}</div>
          </div>
        </div>

        <h4 style={{ fontSize: '0.875rem', color: 'var(--diu-navy)', borderBottom: '1px solid var(--diu-border-subtle)', paddingBottom: '0.35rem', marginBottom: '0.5rem' }}>
          Submitted Hall Preferences
        </h4>
        <ol style={{ paddingLeft: '1.25rem', fontSize: '0.8rem', color: 'var(--diu-text-secondary)', marginBottom: '1rem' }}>
          {application.hallPreferences.map((pref, idx) => (
            <li key={idx} style={{ marginBottom: '0.25rem' }}>
              <strong>{pref.hallName}</strong> — {pref.roomType} (Priority {pref.priority})
            </li>
          ))}
        </ol>

        <div style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)', background: 'var(--diu-surface-alt)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
          <strong>Notice:</strong> Please preserve this digital acknowledgement slip for future reference. Merit rankings and provisional shortlists will be notified via email and portal dashboard.
        </div>
      </div>
    </Modal>
  );
}

