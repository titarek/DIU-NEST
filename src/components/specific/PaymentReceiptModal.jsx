import React from 'react';
import { Printer, Download, CheckCircle, ShieldCheck } from 'lucide-react';
import Modal from '../common/Modal';
import Button from '../common/Button';

export default function PaymentReceiptModal({ isOpen, onClose, transaction }) {
  if (!transaction) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Official Hall Fee Payment Receipt"
      size="md"
      footer={
        <div style={{ display: 'flex', gap: '0.75rem', width: '100%', justifyContent: 'space-between' }}>
          <Button variant="outline" size="sm" icon={Printer} onClick={handlePrint}>
            Print Receipt
          </Button>
          <Button variant="primary" size="sm" onClick={onClose}>
            Done
          </Button>
        </div>
      }
    >
      <div id="printable-receipt" style={{ padding: '1rem', border: '1px solid var(--diu-border)', borderRadius: 'var(--radius-md)', background: '#FFF' }}>

        <div style={{ textAlign: 'center', borderBottom: '2px solid var(--diu-navy)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--diu-text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Daffodil International University
          </div>
          <h2 style={{ fontSize: '1.35rem', color: 'var(--diu-navy)', margin: '0.2rem 0' }}>
            Office of Residential Halls & Finance Division
          </h2>
          <div style={{ fontSize: '0.85rem', color: 'var(--diu-primary)', fontWeight: 600 }}>
            Official Electronic Fee Voucher
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)', marginTop: '0.25rem' }}>
            Daffodil Smart City, Ashulia, Savar, Dhaka-1216, Bangladesh
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', background: 'var(--diu-success-subtle)', border: '1px solid var(--diu-success-border)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--diu-success-text)', fontWeight: 700, fontSize: '0.85rem' }}>
            <CheckCircle size={16} /> Payment Verified & Credited
          </div>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--diu-success-text)' }}>
            {transaction.receiptNumber}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.8125rem', marginBottom: '1.25rem' }}>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Student Name:</span>
            <div style={{ fontWeight: 600, color: 'var(--diu-navy)' }}>{transaction.studentName}</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Student ID:</span>
            <div style={{ fontWeight: 600, color: 'var(--diu-primary)' }}>{transaction.studentId}</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Residential Hall:</span>
            <div style={{ fontWeight: 600 }}>{transaction.hallName}</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Transaction Reference:</span>
            <div style={{ fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{transaction.trxId}</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Payment Channel:</span>
            <div>{transaction.paymentMethod}</div>
          </div>
          <div>
            <span style={{ color: 'var(--diu-text-muted)' }}>Date & Time:</span>
            <div>{transaction.paymentDate}</div>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem', marginBottom: '1.25rem' }}>
          <thead>
            <tr style={{ background: 'var(--diu-surface-alt)', borderBottom: '1px solid var(--diu-border)' }}>
              <th style={{ textAlign: 'left', padding: '0.5rem' }}>Particulars / Purpose</th>
              <th style={{ textAlign: 'right', padding: '0.5rem' }}>Amount (BDT)</th>
            </tr>
          </thead>
          <tbody>
            {(transaction.breakdown || [{ item: transaction.purpose, amount: transaction.amount }]).map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--diu-border-subtle)' }}>
                <td style={{ padding: '0.5rem' }}>{item.item}</td>
                <td style={{ textAlign: 'right', padding: '0.5rem', fontWeight: 600 }}>
                  BDT {item.amount.toLocaleString()}
                </td>
              </tr>
            ))}
            <tr style={{ borderTop: '2px solid var(--diu-navy)', fontWeight: 800 }}>
              <td style={{ padding: '0.6rem 0.5rem', color: 'var(--diu-navy)' }}>Total Paid</td>
              <td style={{ textAlign: 'right', padding: '0.6rem 0.5rem', color: 'var(--diu-primary)', fontSize: '1rem' }}>
                BDT {transaction.amount.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px dashed var(--diu-border)', paddingTop: '1rem', marginTop: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--diu-text-muted)', fontSize: '0.72rem' }}>
            <ShieldCheck size={20} color="var(--diu-success)" />
            <span>Cryptographically sealed by DIU Nest Central Finance Division.</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '90px', borderBottom: '1px solid var(--diu-text-muted)', margin: '0 auto 0.25rem' }}></div>
            <span style={{ fontSize: '0.6875rem', color: 'var(--diu-text-muted)' }}>Authorized Signatory</span>
          </div>
        </div>
      </div>
    </Modal>
  );
}

