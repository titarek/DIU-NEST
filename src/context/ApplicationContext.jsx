import React, { createContext, useContext, useState } from 'react';
import { mockHalls } from '../data/mockHalls';
import { mockApplications, APPLICATION_STATUS } from '../data/mockApplications';
import { mockCycles } from '../data/mockCycles';
import { mockPayments } from '../data/mockPayments';
import { mockRequests, mockNotices } from '../data/mockRequests';
import { mockAuditLogs } from '../data/mockAuditLogs';

const ApplicationContext = createContext(null);

export function ApplicationProvider({ children }) {
  const [halls, setHalls] = useState(mockHalls);
  const [applications, setApplications] = useState(mockApplications);
  const [cycles, setCycles] = useState(mockCycles);
  const [payments, setPayments] = useState(mockPayments);
  const [requests, setRequests] = useState(mockRequests);
  const [notices, setNotices] = useState(mockNotices);
  const [auditLogs, setAuditLogs] = useState(mockAuditLogs);

  const studentApplication = applications.find((a) => a.studentId === '221-15-5842') || applications[0];

  const addAuditLog = (action, target, user, role, justification) => {
    const newLog = {
      id: `log_${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      user: user || 'Authorized User',
      role: role || 'Administrator',
      action,
      target,
      ipAddress: '10.20.14.32 (Authorized Subnet)',
      justification: justification || 'Administrative system operation.'
    };
    setAuditLogs((prev) => [newLog, ...prev]);
  };

  const submitApplication = (appData) => {
    const newAppNumber = `DIU-NEST-2026-F-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApp = {
      id: `app_${Date.now()}`,
      appNumber: newAppNumber,
      cycleId: 'cycle_fall_2026',
      cycleName: 'Fall 2026 Regular Application Cycle',
      studentId: appData.studentId || '221-15-5842',
      studentName: appData.studentName || 'Tanvir Ahmed',
      gender: appData.gender || 'Male',
      department: appData.department || 'Computer Science and Engineering',
      deptShort: appData.deptShort || 'CSE',
      cgpa: appData.cgpa || 3.82,
      semester: appData.semester || '8th',
      homeDistrict: appData.homeDistrict || 'Chittagong',
      distanceKm: appData.distanceKm || 265,
      submissionDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: APPLICATION_STATUS.SUBMITTED,
      currentStepIndex: 1,
      hallPreferences: appData.hallPreferences || [
        { priority: 1, hallId: 'yksg-01-a', hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)', roomType: '4-Bed Shared' }
      ],
      specialCategory: appData.specialCategory || 'None',
      annualFamilyIncome: appData.annualFamilyIncome || 360000,
      documents: appData.documents || [],
      meritScore: null,
      seatOffer: null,
      timeline: [
        { status: APPLICATION_STATUS.DRAFT, timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16), actor: appData.studentName, remarks: 'Draft saved' },
        { status: APPLICATION_STATUS.SUBMITTED, timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16), actor: appData.studentName, remarks: 'Application submitted with all mandatory proofs' }
      ]
    };

    setApplications((prev) => [newApp, ...prev]);
    addAuditLog('NEW_APPLICATION_SUBMITTED', newAppNumber, appData.studentName, 'Student', 'Student self-service submission');
    return newApp;
  };

  const acceptSeatOffer = (appId) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.id === appId) {
          const updatedTimeline = [
            ...app.timeline,
            {
              status: APPLICATION_STATUS.ACCEPTED,
              timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
              actor: app.studentName,
              remarks: 'Seat offer accepted. Proceeding to confirmation fee payment.'
            }
          ];
          return {
            ...app,
            status: APPLICATION_STATUS.ACCEPTED,
            currentStepIndex: 8,
            seatOffer: {
              ...app.seatOffer,
              status: 'Accepted'
            },
            timeline: updatedTimeline
          };
        }
        return app;
      })
    );
    addAuditLog('SEAT_OFFER_ACCEPTED', `Application ${appId}`, 'Tanvir Ahmed', 'Student', 'Student confirmed acceptance of offered room');
  };

  const declineSeatOffer = (appId, reason) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.id === appId) {
          const updatedTimeline = [
            ...app.timeline,
            {
              status: APPLICATION_STATUS.DECLINED,
              timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
              actor: app.studentName,
              remarks: `Seat offer declined by student. Reason: ${reason || 'Personal preference'}`
            }
          ];
          return {
            ...app,
            status: APPLICATION_STATUS.DECLINED,
            timeline: updatedTimeline
          };
        }
        return app;
      })
    );
    addAuditLog('SEAT_OFFER_DECLINED', `Application ${appId}`, 'Tanvir Ahmed', 'Student', `Offer declined: ${reason}`);
  };

  const processPayment = (paymentData) => {
    const newTx = {
      id: `tx_${Date.now()}`,
      trxId: `TXN-${paymentData.method.toUpperCase().substring(0, 4)}-${Date.now().toString().slice(-6)}`,
      studentId: paymentData.studentId || '221-15-5842',
      studentName: paymentData.studentName || 'Tanvir Ahmed',
      hallName: paymentData.hallName || 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
      amount: paymentData.amount || 5200,
      purpose: paymentData.purpose || 'Seat Confirmation Fee & Caution Deposit',
      paymentMethod: paymentData.method || 'bKash Gateway',
      paymentDate: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Successful',
      receiptNumber: `DIU-REC-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      breakdown: [
        { item: 'Seat Confirmation Fee', amount: 2200 },
        { item: 'Refundable Security Deposit', amount: 3000 }
      ]
    };

    setPayments((prev) => [newTx, ...prev]);

    setApplications((prev) =>
      prev.map((app) => {
        if (app.studentId === paymentData.studentId) {
          const updatedTimeline = [
            ...app.timeline,
            {
              status: APPLICATION_STATUS.ALLOCATED,
              timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
              actor: 'Automated Payment Gateway',
              remarks: `Payment of BDT ${paymentData.amount} verified. Seat formally allocated.`
            }
          ];
          return {
            ...app,
            status: APPLICATION_STATUS.ALLOCATED,
            currentStepIndex: 9,
            timeline: updatedTimeline
          };
        }
        return app;
      })
    );

    addAuditLog('PAYMENT_CONFIRMATION_COMPLETED', newTx.trxId, paymentData.studentName, 'Accounts Gateway', `Amount: BDT ${paymentData.amount}`);
    return newTx;
  };

  const submitStudentRequest = (req) => {
    const newReq = {
      id: `req_${Date.now()}`,
      type: req.type,
      category: req.category,
      studentId: req.studentId || '221-15-5842',
      studentName: req.studentName || 'Tanvir Ahmed',
      hallName: req.hallName || 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
      roomNumber: req.roomNumber || '301',
      title: req.title,
      description: req.description,
      priority: req.priority || 'Medium',
      submittedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'Open',
      assignedTo: 'Awaiting Staff Assignment',
      adminNotes: 'Submitted via student portal.'
    };
    setRequests((prev) => [newReq, ...prev]);
    return newReq;
  };

  const updateVerification = (appId, decision, remarks, officerName) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.id === appId) {
          let nextStatus = APPLICATION_STATUS.VERIFIED;
          let stepIdx = 4;
          if (decision === 'correction') {
            nextStatus = APPLICATION_STATUS.CORRECTION_REQUIRED;
            stepIdx = 3;
          } else if (decision === 'reject') {
            nextStatus = APPLICATION_STATUS.REJECTED;
          }

          const updatedTimeline = [
            ...app.timeline,
            {
              status: nextStatus,
              timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
              actor: officerName || 'Verification Officer',
              remarks: remarks || `Verification status updated to ${nextStatus}`
            }
          ];

          return {
            ...app,
            status: nextStatus,
            currentStepIndex: stepIdx,
            correctionRemarks: decision === 'correction' ? remarks : app.correctionRemarks,
            timeline: updatedTimeline
          };
        }
        return app;
      })
    );

    addAuditLog(`VERIFICATION_${decision.toUpperCase()}`, `App ${appId}`, officerName, 'Verification Officer', remarks);
  };

  const updateSeatStatus = (hallId, floorNumber, roomNumber, seatId, newStatus, extraData = {}) => {
    setHalls((prevHalls) =>
      prevHalls.map((h) => {
        if (h.id === hallId) {
          const updatedFloors = h.floors.map((fl) => {
            if (fl.floorNumber === floorNumber) {
              const updatedRooms = fl.rooms.map((rm) => {
                if (rm.roomNumber === roomNumber) {
                  const updatedBeds = rm.beds.map((b) => {
                    if (b.id === seatId) {
                      return {
                        ...b,
                        status: newStatus,
                        student: newStatus === 'available' ? null : (extraData.student || b.student),
                        maintenanceNote: extraData.maintenanceNote || null
                      };
                    }
                    return b;
                  });
                  return { ...rm, beds: updatedBeds };
                }
                return rm;
              });
              return { ...fl, rooms: updatedRooms };
            }
            return fl;
          });
          return { ...h, floors: updatedFloors };
        }
        return h;
      })
    );

    addAuditLog('SEAT_STATUS_UPDATED', `${hallId} Room ${roomNumber} Seat ${seatId}`, 'Engr. M. A. Hasan', 'Hall Warden', `Changed to ${newStatus}. ${extraData.justification || ''}`);
  };

  const checkInStudent = (studentId, hallId, roomNumber, seatId) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.studentId === studentId) {
          return {
            ...app,
            status: APPLICATION_STATUS.CHECKED_IN,
            currentStepIndex: 10,
            timeline: [
              ...app.timeline,
              {
                status: APPLICATION_STATUS.CHECKED_IN,
                timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
                actor: 'Engr. M. A. Hasan (Hall Warden)',
                remarks: `Student checked-in to Room ${roomNumber}, ${seatId}. Room keys and inventory signed.`
              }
            ]
          };
        }
        return app;
      })
    );
    addAuditLog('STUDENT_CHECKED_IN', `Student ${studentId}`, 'Engr. M. A. Hasan', 'Hall Warden', `Allocated Room ${roomNumber}`);
  };

  const updateScoringWeights = (cycleId, newWeights, justification) => {
    setCycles((prev) =>
      prev.map((c) => (c.id === cycleId ? { ...c, scoringWeights: newWeights } : c))
    );
    addAuditLog('SCORING_WEIGHTS_UPDATED', `Cycle ${cycleId}`, 'Prof. Dr. Syed Akhter Hossain', 'Provost', justification || 'Syndicate policy revision');
  };

  const publishMeritList = (cycleId, justification) => {
    setCycles((prev) =>
      prev.map((c) => (c.id === cycleId ? { ...c, status: 'Merit Published' } : c))
    );
    addAuditLog('MERIT_LIST_PUBLISHED', `Cycle ${cycleId}`, 'Prof. Dr. Syed Akhter Hossain', 'Provost', justification || 'Final merit rankings approved for public viewing');
  };

  return (
    <ApplicationContext.Provider
      value={{
        halls,
        applications,
        cycles,
        payments,
        requests,
        notices,
        auditLogs,
        studentApplication,
        submitApplication,
        acceptSeatOffer,
        declineSeatOffer,
        processPayment,
        submitStudentRequest,
        updateVerification,
        updateSeatStatus,
        checkInStudent,
        updateScoringWeights,
        publishMeritList,
        addAuditLog
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export function useApplications() {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplications must be used within an ApplicationProvider');
  }
  return context;
}

