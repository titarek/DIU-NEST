import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { UserPlus, CheckCircle, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../components/common/Button';

export default function RegisterPage({ onSuccess, onSwitchToLogin }) {
  const { showToast } = useToast();

  const [form, setForm] = useState({
    fullName: '',
    studentId: '',
    email: '',
    department: 'CSE',
    batch: '58th Batch',
    gender: 'Male',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAgreed: false
  });

  const [errors, setErrors] = useState({});
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required';
    if (!/^\d{3}-\d{2}-\d{4}$/.test(form.studentId)) {
      errs.studentId = 'Student ID must follow DIU format (e.g. 221-15-5842)';
    }
    if (!form.email.includes('@') || !form.email.endsWith('diu.edu.bd')) {
      errs.email = 'Must be an official DIU domain email (e.g. name@diu.edu.bd)';
    }
    if (!form.phone.trim()) errs.phone = 'Mobile number is required';
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match';
    if (!form.termsAgreed) errs.terms = 'You must agree to the DIU Hall Code of Conduct';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validate()) {
      showToast('Please fix the indicated errors in the form.', 'warning', 'Validation Error');
      return;
    }

    setIsSuccessModalOpen(true);
    showToast('Student registration completed and authenticated!', 'success', 'Welcome to DIU Nest');
  };

  return (
    <div style={{ maxWidth: '640px', margin: '2.5rem auto', padding: '0 1rem' }}>
      <div className="card" style={{ padding: '2rem', boxShadow: 'var(--shadow-xl)' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div className="brand-emblem" style={{ margin: '0 auto 1rem', width: 48, height: 48, fontSize: '1.25rem' }}>
            <span>DIU</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--diu-navy)' }}>
            Student Portal Registration
          </h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--diu-text-secondary)', marginTop: '0.25rem' }}>
            Create your account to apply for residential hall seats and track status
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label className="form-label">Full Name as per DIU ERP <span className="form-required">*</span></label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Tanvir Ahmed"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            />
            {errors.fullName && <div className="form-error">{errors.fullName}</div>}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">DIU Student ID <span className="form-required">*</span></label>
              <input
                type="text"
                className="form-control"
                placeholder="221-15-5842"
                value={form.studentId}
                onChange={(e) => setForm({ ...form, studentId: e.target.value })}
              />
              {errors.studentId && <div className="form-error">{errors.studentId}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Gender <span className="form-required">*</span></label>
              <select
                className="form-select"
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option value="Male">Male (Eligible for Yunus Khan Scholar Gardens)</option>
                <option value="Female">Female (Eligible for Rowshan Ara Scholar Gardens)</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Academic Department <span className="form-required">*</span></label>
              <select
                className="form-select"
                value={form.department}
                onChange={(e) => setForm({ ...form, department: e.target.value })}
              >
                <option value="CSE">Computer Science & Engineering (CSE)</option>
                <option value="SWE">Software Engineering (SWE)</option>
                <option value="EEE">Electrical & Electronic Engineering (EEE)</option>
                <option value="BBA">Business Administration (BBA)</option>
                <option value="Civil">Civil Engineering</option>
                <option value="Pharmacy">Department of Pharmacy</option>
                <option value="English">Department of English</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Batch</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. 58th Batch"
                value={form.batch}
                onChange={(e) => setForm({ ...form, batch: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">DIU Student Email <span className="form-required">*</span></label>
              <input
                type="email"
                className="form-control"
                placeholder="studentname@diu.edu.bd"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <div className="form-error">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Contact Phone <span className="form-required">*</span></label>
              <input
                type="tel"
                className="form-control"
                placeholder="+880 1712-345678"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && <div className="form-error">{errors.phone}</div>}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label">Password <span className="form-required">*</span></label>
              <input
                type="password"
                className="form-control"
                placeholder="Min 6 characters"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              {errors.password && <div className="form-error">{errors.password}</div>}
            </div>

            <div className="form-group">
              <label className="form-label">Confirm Password <span className="form-required">*</span></label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter password"
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              />
              {errors.confirmPassword && <div className="form-error">{errors.confirmPassword}</div>}
            </div>
          </div>

          <div style={{ marginBottom: '1.25rem' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--diu-text-secondary)', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={form.termsAgreed}
                onChange={(e) => setForm({ ...form, termsAgreed: e.target.checked })}
                style={{ marginTop: '2px' }}
              />
              <span>
                I certify that all academic and personal details match my official DIU ERP records, and I pledge to observe the Daffodil International University Residential Hall Disciplinary Regulations.
              </span>
            </label>
            {errors.terms && <div className="form-error" style={{ marginTop: '0.35rem' }}>{errors.terms}</div>}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            icon={UserPlus}
            style={{ width: '100%' }}
          >
            Complete Registration & Submit
          </Button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--diu-border)', fontSize: '0.85rem', color: 'var(--diu-text-secondary)' }}>
          Already have an account?{' '}
          <a
            href="#login"
            onClick={(e) => {
              e.preventDefault();
              onSwitchToLogin();
            }}
            style={{ fontWeight: 600, color: 'var(--diu-primary)' }}
          >
            Sign In Here →
          </a>
        </div>
      </div>

      {isSuccessModalOpen && (
        <div className="modal-overlay" onClick={() => setIsSuccessModalOpen(false)}>
          <div className="modal-dialog modal-sm" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
            <CheckCircle2 size={54} color="var(--diu-success)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.3rem', color: 'var(--diu-navy)', marginBottom: '0.5rem' }}>
              Registration Completed!
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--diu-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Account for <strong>{form.fullName}</strong> ({form.studentId}) has been created and verified. You are eligible to apply for Fall 2026 hall seats.
            </p>
            <Button
              variant="primary"
              size="md"
              style={{ width: '100%' }}
              onClick={() => {
                setIsSuccessModalOpen(false);
                onSwitchToLogin();
              }}
            >
              Proceed to Sign In
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
