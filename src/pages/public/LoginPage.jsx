import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { LogIn, Key, UserCheck, ShieldCheck, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

export default function LoginPage({ onSuccess, onSwitchToRegister }) {
  const { showToast } = useToast();

  const [loginType, setLoginType] = useState('student');
  const [identifier, setIdentifier] = useState('221-15-5842');
  const [password, setPassword] = useState('••••••••');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleStandardLogin = (e) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
    showToast(`Authenticated via DIU Central Directory Service`, 'success', 'Login Verified');
  };

  return (
    <div style={{ maxWidth: '480px', margin: '3rem auto', padding: '0 1rem' }}>
      <div className="card" style={{ padding: '2.25rem', boxShadow: 'var(--shadow-xl)' }}>

        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div className="brand-emblem" style={{ margin: '0 auto 1rem', width: 48, height: 48, fontSize: '1.25rem' }}>
            <span>DIU</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--diu-navy)' }}>
            Sign In to DIU Nest
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--diu-text-secondary)', marginTop: '0.25rem' }}>
            Official Residential Hall Portal · Daffodil International University
          </p>
        </div>

        <div style={{ display: 'flex', background: 'var(--diu-surface-hover)', padding: '0.3rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--diu-border)' }}>
          <button
            type="button"
            className={`btn btn-sm ${loginType === 'student' ? 'btn-primary' : 'btn-ghost'}`}
            style={{ flex: 1 }}
            onClick={() => {
              setLoginType('student');
              setIdentifier('221-15-5842');
            }}
          >
            Student Sign In
          </button>
          <button
            type="button"
            className={`btn btn-sm ${loginType === 'staff' ? 'btn-primary' : 'btn-ghost'}`}
            style={{ flex: 1 }}
            onClick={() => {
              setLoginType('staff');
              setIdentifier('warden.bbhall@diu.edu.bd');
            }}
          >
            Hall Staff / Authority
          </button>
        </div>

        <form onSubmit={handleStandardLogin}>
          <div className="form-group">
            <label className="form-label">
              {loginType === 'student' ? 'DIU Student ID' : 'Official University Email'}
            </label>
            <input
              type="text"
              className="form-control"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder={loginType === 'student' ? 'e.g. 221-15-5842' : 'officer@diu.edu.bd'}
              required
            />
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="form-label">Password</label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); showToast('Password reset link sent to your DIU domain inbox.', 'info'); }} style={{ fontSize: '0.75rem' }}>
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1rem 0', fontSize: '0.78rem', color: 'var(--diu-text-muted)' }}>
            <ShieldCheck size={16} color="var(--diu-primary)" />
            <span>Secured via DIU Single Sign-On (SSO) authentication.</span>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            icon={LogIn}
            style={{ width: '100%', marginTop: '0.25rem' }}
          >
            Sign In to Account
          </Button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--diu-border)', fontSize: '0.85rem', color: 'var(--diu-text-secondary)' }}>
          Need to apply for a hall seat?{' '}
          <a
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToRegister();
            }}
            style={{ fontWeight: 600, color: 'var(--diu-primary)' }}
          >
            Student Registration →
          </a>
        </div>
      </div>

      {isSuccessModalOpen && (
        <div className="modal-overlay" onClick={() => setIsSuccessModalOpen(false)}>
          <div className="modal-dialog modal-sm" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
            <CheckCircle2 size={54} color="var(--diu-success)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', color: 'var(--diu-navy)', marginBottom: '0.5rem' }}>
              Authentication Verified
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--diu-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Account <strong>{identifier}</strong> successfully verified against DIU Active Directory.
            </p>
            <Button variant="primary" size="md" style={{ width: '100%' }} onClick={() => setIsSuccessModalOpen(false)}>
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
