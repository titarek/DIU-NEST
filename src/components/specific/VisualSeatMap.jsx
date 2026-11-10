import React, { useState } from 'react';
import { useApplications } from '../../context/ApplicationContext';
import { useToast } from '../../context/ToastContext';
import {
  Building2,
  Layers,
  User,
  Wrench,
  CheckCircle2,
  Clock,
  ShieldAlert,
  LayoutGrid,
  List,
  Phone,
  Mail,
  Calendar,
  AlertCircle
} from 'lucide-react';
import Badge from '../common/Badge';
import Modal from '../common/Modal';
import Button from '../common/Button';

export default function VisualSeatMap({ selectedHallId = 'yksg-01-a', isEditable = false }) {
  const { halls, updateSeatStatus } = useApplications();
  const { showToast } = useToast();

  const [activeHallId, setActiveHallId] = useState(selectedHallId);
  const currentHall = halls.find((h) => h.id === activeHallId) || halls[0];

  const [activeFloorNum, setActiveFloorNum] = useState(1);
  const [viewMode, setViewMode] = useState('grid');
  const [selectedBed, setSelectedBed] = useState(null);
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);

  const [actionReason, setActionReason] = useState('');

  const currentFloor = currentHall.floors.find((f) => f.floorNumber === activeFloorNum) || currentHall.floors[0];

  const handleBedClick = (room, bed) => {
    setSelectedBed({
      roomNumber: room.roomNumber,
      roomType: room.type,
      floorNumber: currentFloor.floorNumber,
      floorName: currentFloor.floorName,
      hallId: currentHall.id,
      hallName: currentHall.name,
      ...bed
    });
    setIsInspectorOpen(true);
  };

  const handleStatusChange = (newStatus) => {
    if (!selectedBed) return;
    updateSeatStatus(
      selectedBed.hallId,
      selectedBed.floorNumber,
      selectedBed.roomNumber,
      selectedBed.id,
      newStatus,
      {
        maintenanceNote: newStatus === 'maintenance' ? (actionReason || 'Under maintenance inspection') : null,
        justification: actionReason
      }
    );
    showToast(`Seat ${selectedBed.label} in Room ${selectedBed.roomNumber} updated to ${newStatus}`, 'success', 'Inventory Updated');
    setIsInspectorOpen(false);
    setActionReason('');
  };

  return (
    <div className="seat-visualizer">

      <div className="seat-visualizer-controls">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--diu-text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
              Select Residential Hall
            </label>
            <select
              className="form-select"
              value={activeHallId}
              onChange={(e) => {
                setActiveHallId(e.target.value);
                setActiveFloorNum(1);
              }}
              style={{ fontWeight: 600, minWidth: '220px' }}
            >
              {halls.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.name} ({h.type})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--diu-text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
              Select Floor
            </label>
            <div className="floor-selector">
              {currentHall.floors.map((floor) => (
                <button
                  key={floor.floorNumber}
                  type="button"
                  className={`floor-pill ${activeFloorNum === floor.floorNumber ? 'active' : ''}`}
                  onClick={() => setActiveFloorNum(floor.floorNumber)}
                >
                  <Layers size={14} style={{ display: 'inline', marginRight: '4px' }} />
                  {floor.floorName}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div className="seat-legend">
            <div className="legend-item">
              <span className="legend-box available" />
              <span>Available</span>
            </div>
            <div className="legend-item">
              <span className="legend-box reserved" />
              <span>Reserved</span>
            </div>
            <div className="legend-item">
              <span className="legend-box occupied" />
              <span>Occupied</span>
            </div>
            <div className="legend-item">
              <span className="legend-box maintenance" />
              <span>Maintenance</span>
            </div>
          </div>

          <div style={{ display: 'flex', border: '1px solid var(--diu-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <button
              type="button"
              className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setViewMode('grid')}
              style={{ borderRadius: 0 }}
              title="Grid Visual View"
            >
              <LayoutGrid size={15} />
            </button>
            <button
              type="button"
              className={`btn btn-sm ${viewMode === 'table' ? 'btn-primary' : 'btn-ghost'}`}
              onClick={() => setViewMode('table')}
              style={{ borderRadius: 0 }}
              title="Table List View"
            >
              <List size={15} />
            </button>
          </div>
        </div>
      </div>

      {viewMode === 'grid' && (
        <div>
          <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--diu-navy)' }}>
              {currentHall.name} — {currentFloor?.floorName || 'Ground Floor'} ({currentFloor?.rooms?.length || 0} Rooms)
            </span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--diu-text-muted)' }}>
              Click any seat for resident inspection & seat management actions
            </span>
          </div>

          <div className="rooms-grid">
            {currentFloor?.rooms?.map((room) => (
              <div key={room.roomNumber} className="room-card">
                <div className="room-header">
                  <div className="room-number">
                    <Building2 size={16} color="var(--diu-primary)" />
                    Room {room.roomNumber}
                  </div>
                  <span className="room-type-badge">{room.type}</span>
                </div>

                <div className="room-beds">
                  {room.beds.map((bed) => {
                    let Icon = CheckCircle2;
                    if (bed.status === 'occupied') Icon = User;
                    if (bed.status === 'reserved') Icon = Clock;
                    if (bed.status === 'maintenance') Icon = Wrench;

                    return (
                      <div
                        key={bed.id}
                        className={`bed-box ${bed.status}`}
                        onClick={() => handleBedClick(room, bed)}
                        title={`Seat: ${bed.label} | Status: ${bed.status}`}
                        role="button"
                        tabIndex={0}
                      >
                        <div className="bed-title">
                          <span>{bed.label}</span>
                          <Icon size={14} />
                        </div>
                        <div className="bed-status-label">{bed.status}</div>
                        {bed.student && (
                          <div className="bed-resident" title={bed.student.name}>
                            {bed.student.name}
                          </div>
                        )}
                        {bed.maintenanceNote && (
                          <div className="bed-resident" style={{ color: 'var(--diu-danger)' }}>
                            {bed.maintenanceNote}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {viewMode === 'table' && (
        <div className="table-responsive">
          <table className="data-table">
            <thead>
              <tr>
                <th>Room</th>
                <th>Seat</th>
                <th>Type</th>
                <th>Status</th>
                <th>Occupant / Student ID</th>
                <th>Department</th>
                <th>Check-in Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentFloor?.rooms?.flatMap((room) =>
                room.beds.map((bed) => (
                  <tr key={bed.id}>
                    <td><strong>Room {room.roomNumber}</strong></td>
                    <td>{bed.label}</td>
                    <td>{room.type}</td>
                    <td>
                      <Badge variant={bed.status === 'available' ? 'success' : bed.status === 'occupied' ? 'info' : bed.status === 'reserved' ? 'warning' : 'danger'}>
                        {bed.status}
                      </Badge>
                    </td>
                    <td>
                      {bed.student ? (
                        <div>
                          <div style={{ fontWeight: 600 }}>{bed.student.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--diu-text-muted)' }}>{bed.student.studentId}</div>
                        </div>
                      ) : (
                        <span style={{ color: 'var(--diu-text-light)' }}>— Unallocated —</span>
                      )}
                    </td>
                    <td>{bed.student?.dept || '—'}</td>
                    <td>{bed.student?.checkInDate || '—'}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleBedClick(room, bed)}
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {selectedBed && (
        <Modal
          isOpen={isInspectorOpen}
          onClose={() => setIsInspectorOpen(false)}
          title={`Seat Details: ${selectedBed.hallName} - Room ${selectedBed.roomNumber} (${selectedBed.label})`}
          size="md"
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--diu-border)' }}>
              <div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--diu-text-muted)' }}>Floor & Unit</span>
                <div style={{ fontWeight: 700, color: 'var(--diu-navy)' }}>{selectedBed.floorName} · {selectedBed.roomType}</div>
              </div>
              <Badge variant={selectedBed.status === 'available' ? 'success' : selectedBed.status === 'occupied' ? 'info' : selectedBed.status === 'reserved' ? 'warning' : 'danger'}>
                {selectedBed.status.toUpperCase()}
              </Badge>
            </div>

            {selectedBed.status === 'occupied' && selectedBed.student && (
              <div style={{ background: 'var(--diu-surface-hover)', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid var(--diu-border)', marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--diu-navy)' }}>
                  <User size={16} /> Current Resident Details
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: 'var(--diu-text-muted)', fontSize: '0.75rem' }}>Student Name:</span>
                    <div style={{ fontWeight: 600 }}>{selectedBed.student.name}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--diu-text-muted)', fontSize: '0.75rem' }}>Student ID:</span>
                    <div style={{ fontWeight: 600, color: 'var(--diu-primary)' }}>{selectedBed.student.studentId}</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--diu-text-muted)', fontSize: '0.75rem' }}>Department & Semester:</span>
                    <div>{selectedBed.student.dept || 'CSE'} ({selectedBed.student.semester || '8th'})</div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--diu-text-muted)', fontSize: '0.75rem' }}>Contact Phone:</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Phone size={13} color="var(--diu-primary)" />
                      {selectedBed.student.phone || '+880 1712-345678'}
                    </div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--diu-text-muted)', fontSize: '0.75rem' }}>Check-in Date:</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={13} color="var(--diu-text-muted)" />
                      {selectedBed.student.checkInDate || '2025-01-15'}
                    </div>
                  </div>
                  <div>
                    <span style={{ color: 'var(--diu-text-muted)', fontSize: '0.75rem' }}>Rent Payment Status:</span>
                    <div style={{ color: 'var(--diu-success)', fontWeight: 600 }}>Up to date</div>
                  </div>
                </div>
              </div>
            )}

            {selectedBed.status === 'maintenance' && (
              <div style={{ background: 'var(--diu-danger-subtle)', border: '1px solid var(--diu-danger-border)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--diu-danger-text)', fontWeight: 700, marginBottom: '0.25rem' }}>
                  <ShieldAlert size={18} /> Out of Order Notice
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--diu-danger-text)' }}>
                  {selectedBed.maintenanceNote || 'Facility repair or sanitation maintenance is currently active for this seat.'}
                </p>
              </div>
            )}

            <div style={{ marginTop: '1rem' }}>
              <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--diu-navy)', display: 'block', marginBottom: '0.4rem' }}>
                Administrative Action / Remark
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Reason or technician ticket reference..."
                value={actionReason}
                onChange={(e) => setActionReason(e.target.value)}
                style={{ marginBottom: '1rem' }}
              />

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'flex-end' }}>
                {selectedBed.status !== 'available' && (
                  <Button variant="success" size="sm" onClick={() => handleStatusChange('available')}>
                    Mark as Available
                  </Button>
                )}
                {selectedBed.status !== 'reserved' && (
                  <Button variant="secondary" size="sm" onClick={() => handleStatusChange('reserved')}>
                    Set Reserved
                  </Button>
                )}
                {selectedBed.status !== 'maintenance' && (
                  <Button variant="danger" size="sm" onClick={() => handleStatusChange('maintenance')}>
                    Mark Maintenance
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={() => setIsInspectorOpen(false)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

