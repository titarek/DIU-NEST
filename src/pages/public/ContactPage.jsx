import React, { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

export default function ContactPage() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields.', 'warning', 'Missing Information');
      return;
    }
    setSubmitted(true);
    showToast('Your inquiry has been logged with ticket #INQ-8821.', 'success', 'Message Dispatched');
  };

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem', maxWidth: '1080px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Badge variant="navy" style={{ marginBottom: '0.75rem' }}>Office of the Provost</Badge>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--diu-navy)', marginBottom: '0.75rem' }}>
          Contact DIU Hall Management
        </h1>
        <p style={{ color: 'var(--diu-text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          Need assistance with your seat application, room transfer, or payment verification? Reach out directly to our hall administration officers.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'start' }}>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--diu-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={20} color="var(--diu-primary)" /> Permanent Campus Office
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--diu-text-secondary)', lineHeight: 1.6 }}>
              Office of the Provost & Hall Administration<br />
              Daffodil Smart City, Ashulia, Savar,<br />
              Dhaka-1216, Bangladesh.
            </p>
          </div>

          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--diu-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={20} color="var(--diu-primary)" /> Visiting & Office Hours
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--diu-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div><strong>Sunday — Thursday:</strong> 9:00 AM — 4:30 PM</div>
              <div><strong>Friday — Saturday:</strong> Closed (Helpline active 24/7)</div>
              <div><strong>Student Counseling:</strong> 2:00 PM — 4:00 PM</div>
            </div>
          </div>

          <div className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--diu-navy)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={20} color="var(--diu-primary)" /> Emergency & Hall Helplines
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--diu-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div><strong>Yunus Khan Scholar Gardens (Male):</strong> +880 1819-234001</div>
              <div><strong>Rowshan Ara Scholar Gardens (Female):</strong> +880 1715-987009</div>
              <div><strong>Accounts Office Counter:</strong> +880 1715-445566</div>
              <div><strong>Email:</strong> provost.halls@diu.edu.bd</div>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.35rem', color: 'var(--diu-navy)', marginBottom: '0.5rem' }}>
            Submit an Inquiry / Support Request
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--diu-text-muted)', marginBottom: '1.5rem' }}>
            Our administration will review and respond to your DIU student email within 24 working hours.
          </p>

          {submitted ? (
            <div style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--diu-success-subtle)', borderRadius: 'var(--radius-md)', border: '1px solid var(--diu-success-border)' }}>
              <CheckCircle2 size={44} color="var(--diu-success)" style={{ margin: '0 auto 1rem' }} />
              <h4 style={{ color: 'var(--diu-success-text)', marginBottom: '0.5rem' }}>Inquiry Submitted Successfully</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--diu-text-secondary)', marginBottom: '1.5rem' }}>
                Your ticket <strong>#INQ-8821</strong> has been assigned to the Residential Welfare Officer.
              </p>
              <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name <span className="form-required">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Tanvir Ahmed"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">DIU Student ID / Roll</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. 221-15-5842"
                    value={formData.studentId}
                    onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address <span className="form-required">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="student@diu.edu.bd"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject Category</label>
                <select
                  className="form-select"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="General Inquiry">General Hall Seat Inquiry</option>
                  <option value="Application Issue">Application / Document Upload Issue</option>
                  <option value="Payment Issue">Payment Verification / Dues Dispute</option>
                  <option value="Seat Transfer">Seat Transfer / Swap Request</option>
                  <option value="Emergency Maintenance">Facility Maintenance / Emergency</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message Details <span className="form-required">*</span></label>
                <textarea
                  className="form-control"
                  rows={4}
                  placeholder="Explain your inquiry or issue clearly..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                icon={Send}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                Send Message to Hall Office
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

