import React, { useState } from 'react';
import { mockHalls, PLATFORM_HALL_METRICS } from '../../data/mockHalls';
import { Building2, Users, Layers, Home, Search, Phone, Mail, MapPin } from 'lucide-react';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';

export default function HallInfoPage({ onOpenRegister }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('All');
  const [selectedHall, setSelectedHall] = useState(null);

  const filteredHalls = mockHalls.filter((h) => {
    const matchesSearch = h.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          h.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          h.campus.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGender = genderFilter === 'All' || h.type.toLowerCase() === genderFilter.toLowerCase();
    return matchesSearch && matchesGender;
  });

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem' }}>

      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem' }}>
        <Badge variant="navy" style={{ marginBottom: '0.75rem' }}>Campus Hall Directory</Badge>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--diu-navy)', marginBottom: '0.75rem', fontWeight: 800 }}>
          Daffodil Residential Halls & Accommodations
        </h1>
        <p style={{ color: 'var(--diu-text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
          Official residential inventory for Daffodil Smart City, Ashulia. Explore seat capacities, room types, amenities, warden contacts, and transparent rental fees across all 13 halls.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }} className="card-hover">
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
            <Building2 size={22} />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--diu-navy)', fontFamily: 'var(--font-heading)' }}>
            13
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--diu-navy)', marginTop: '0.2rem' }}>
            Student Halls
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)', marginTop: '0.2rem' }}>
            7 Male · 6 Female Residences
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }} className="card-hover">
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
            <Layers size={22} />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--diu-navy)', fontFamily: 'var(--font-heading)' }}>
            101
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--diu-navy)', marginTop: '0.2rem' }}>
            Total Levels / Floors
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)', marginTop: '0.2rem' }}>
            Across 13 Residential Blocks
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }} className="card-hover">
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
            <Home size={22} />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--diu-navy)', fontFamily: 'var(--font-heading)' }}>
            2,033
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--diu-navy)', marginTop: '0.2rem' }}>
            Residential Rooms
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)', marginTop: '0.2rem' }}>
            Single, 2-Bed & 4-Bed Shared
          </div>
        </div>

        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }} className="card-hover">
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
            <Users size={22} />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--diu-navy)', fontFamily: 'var(--font-heading)' }}>
            7,706
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--diu-navy)', marginTop: '0.2rem' }}>
            Total Bed Capacity
          </div>
          <div style={{ fontSize: '0.75rem', color: '#16A34A', fontWeight: 600, marginTop: '0.2rem' }}>
            457 Active Vacancies Open
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem', background: '#FFF', padding: '1rem 1.25rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--diu-border)' }}>
        <div className="input-with-icon" style={{ flex: '1 1 300px' }}>
          <Search size={18} className="input-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Search hall name, serial code (e.g., SL/2026/0009), or block..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['All', 'Male', 'Female'].map((f) => (
            <button
              key={f}
              type="button"
              className={`btn btn-sm ${genderFilter === f ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setGenderFilter(f)}
            >
              {f === 'All' ? 'All Halls (13)' : f === 'Male' ? 'Male Halls (7)' : 'Female Halls (6)'}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {filteredHalls.map((hall, idx) => (
          <div
            key={hall.id}
            className={`card card-hover animate-fade-in-up stagger-${(idx % 6) + 1}`}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div className="card-img-zoom" style={{ height: '220px' }}>
              <img
                src={hall.image}
                alt={hall.name}
              />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 2 }}>
                <Badge variant={hall.type === 'Male' ? 'info' : 'warning'}>
                  {hall.type} Accommodation
                </Badge>
              </div>
              <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem', zIndex: 2, background: 'rgba(15,23,42,0.82)', backdropFilter: 'blur(6px)', padding: '0.25rem 0.65rem', borderRadius: 'var(--radius-sm)', color: '#FFF', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={13} color="var(--diu-accent)" />
                {hall.campus}
              </div>
            </div>

            <div className="card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--diu-navy)', fontWeight: 800 }}>
                  {hall.name}
                </h3>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--diu-text-muted)', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--diu-primary)' }}>Official Code: {hall.code}</span> · {hall.campus}
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--diu-text-secondary)', lineHeight: 1.5, marginBottom: '1.25rem', flex: 1 }}>
                {hall.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', background: 'var(--diu-surface-alt)', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem', textAlign: 'center', fontSize: '0.8125rem' }}>
                <div>
                  <span style={{ color: 'var(--diu-text-muted)', fontSize: '0.7rem', display: 'block' }}>Capacity</span>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--diu-navy)' }}>{hall.totalCapacity}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--diu-text-muted)', fontSize: '0.7rem', display: 'block' }}>Levels / Floors</span>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--diu-navy)' }}>{hall.floorsCount} Floors</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--diu-text-muted)', fontSize: '0.7rem', display: 'block' }}>Available</span>
                  <strong style={{ color: 'var(--diu-success)', fontSize: '0.95rem' }}>{hall.availableCount} Seats</strong>
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', color: 'var(--diu-text-secondary)', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <div><strong>Warden:</strong> {hall.warden}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={13} color="var(--diu-primary)" /> {hall.contact}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                <Button variant="outline" size="sm" style={{ flex: 1 }} onClick={() => setSelectedHall(hall)}>
                  View Floor & Room Info
                </Button>
                <Button variant="primary" size="sm" style={{ flex: 1 }} onClick={onOpenRegister}>
                  Apply to this Hall
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedHall && (
        <Modal
          isOpen={!!selectedHall}
          onClose={() => setSelectedHall(null)}
          title={`${selectedHall.name} — Comprehensive Profile`}
          size="lg"
        >
          <div>
            <div className="card-img-zoom" style={{ height: '260px', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem' }}>
              <img
                src={selectedHall.image}
                alt={selectedHall.name}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--diu-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Campus Facility</span>
                <div style={{ fontWeight: 800, color: 'var(--diu-navy)', fontSize: '1.2rem' }}>{selectedHall.campus}</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Badge variant={selectedHall.type === 'Male' ? 'info' : 'warning'}>
                  {selectedHall.type} Residential Hall
                </Badge>
                <Badge variant="navy">{selectedHall.code}</Badge>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem', background: 'var(--diu-surface-hover)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)' }}>Location</span>
                <div style={{ fontWeight: 600 }}>{selectedHall.campus}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)' }}>Warden In-Charge</span>
                <div style={{ fontWeight: 600 }}>{selectedHall.warden}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)' }}>Emergency Helpline</span>
                <div style={{ fontWeight: 600, color: 'var(--diu-primary)' }}>{selectedHall.contact}</div>
              </div>
            </div>

            <h4 style={{ fontSize: '1rem', color: 'var(--diu-navy)', marginBottom: '0.75rem' }}>Room Types & Pricing</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {selectedHall.roomTypes.map((rt, i) => (
                <div key={i} style={{ padding: '0.85rem 1rem', border: '1px solid var(--diu-border)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFF' }}>
                  <div>
                    <strong style={{ color: 'var(--diu-navy)' }}>{rt.type}</strong>
                    <p style={{ fontSize: '0.8rem', color: 'var(--diu-text-secondary)', marginTop: '0.15rem' }}>{rt.description}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--diu-primary)' }}>BDT {rt.rent.toLocaleString()}</div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--diu-text-muted)' }}>/ month + BDT {rt.deposit} deposit</span>
                  </div>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1rem', color: 'var(--diu-navy)', marginBottom: '0.75rem' }}>Included Amenities</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {selectedHall.amenities.map((a, i) => (
                <span key={i} style={{ fontSize: '0.8125rem', background: 'var(--diu-primary-subtle)', color: 'var(--diu-primary)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
                  ✓ {a}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <Button variant="ghost" size="sm" onClick={() => setSelectedHall(null)}>
                Close
              </Button>
              <Button variant="primary" size="sm" onClick={() => { setSelectedHall(null); onOpenRegister(); }}>
                Apply to this Hall
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
