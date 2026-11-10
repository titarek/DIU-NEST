
export const APPLICATION_STATUS = {
  DRAFT: 'Draft',
  SUBMITTED: 'Submitted',
  UNDER_VERIFICATION: 'Under Verification',
  CORRECTION_REQUIRED: 'Correction Required',
  VERIFIED: 'Verified',
  SCORED_RANKED: 'Scored & Ranked',
  SHORTLISTED: 'Shortlisted',
  WAITLISTED: 'Waitlisted',
  SEAT_OFFERED: 'Seat Offered',
  ACCEPTED: 'Accepted',
  ALLOCATED: 'Allocated',
  CHECKED_IN: 'Checked-in',
  REJECTED: 'Rejected',
  DECLINED: 'Declined'
};

export const mockApplications = [
  {
    id: 'app_0842',
    appNumber: 'DIU-NEST-2026-F-0842',
    cycleId: 'cycle_fall_2026',
    cycleName: 'Fall 2026 Regular Application Cycle',
    studentId: '221-15-5842',
    studentName: 'Tanvir Ahmed',
    gender: 'Male',
    department: 'Computer Science and Engineering',
    deptShort: 'CSE',
    cgpa: 3.82,
    semester: '8th',
    homeDistrict: 'Chittagong',
    distanceKm: 265,
    submissionDate: '2026-11-02 14:35',
    status: APPLICATION_STATUS.SEAT_OFFERED,
    currentStepIndex: 7,
    hallPreferences: [
      { priority: 1, hallId: 'yksg-01-a', hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)', roomType: '4-Bed Shared' },
      { priority: 2, hallId: 'yksg-01-b', hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-B)', roomType: '4-Bed Shared' }
    ],
    specialCategory: 'Merit Scholarship Holder (Dean’s Honor List)',
    annualFamilyIncome: 360000,
    documents: [
      { id: 'doc_1', name: 'DIU Student ID Card', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80', status: 'Approved', verifiedBy: 'VO-FSIT-104' },
      { id: 'doc_2', name: 'Latest Official Grade Sheet', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80', status: 'Approved', verifiedBy: 'VO-FSIT-104' },
      { id: 'doc_3', name: 'Permanent Residence / Electricity Bill Proof', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80', status: 'Approved', verifiedBy: 'VO-FSIT-104' },
      { id: 'doc_4', name: 'Co-curricular Achievement (ACM ICPC Certificate)', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1589330694653-dad6bc0140fa?auto=format&fit=crop&w=800&q=80', status: 'Approved', verifiedBy: 'VO-FSIT-104' }
    ],
    meritScore: {
      cgpaScore: 38.2,
      distanceScore: 25.0,
      financialNeedScore: 18.0,
      extracurricularScore: 6.0,
      quotaBonus: 0,
      totalScore: 87.2,
      rank: 14,
      totalApplicants: 420,
      meritCategory: 'Category A (Direct Shortlist)'
    },
    seatOffer: {
      offerId: 'OFR-2026-842',
      hallId: 'yksg-01-a',
      hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
      floorName: '3rd Floor',
      roomNumber: '301',
      seatNumber: 'Seat B',
      roomType: '4-Bed Shared',
      monthlyRent: 2200,
      confirmationDeposit: 3000,
      totalInitialPayable: 5200,
      offeredDate: '2026-11-09 10:00',
      expiryDate: '2026-11-14 23:59',
      status: 'Pending Acceptance'
    },
    timeline: [
      { status: APPLICATION_STATUS.DRAFT, timestamp: '2026-11-01 10:15', actor: 'Tanvir Ahmed', remarks: 'Application started and draft saved' },
      { status: APPLICATION_STATUS.SUBMITTED, timestamp: '2026-11-02 14:35', actor: 'Tanvir Ahmed', remarks: 'Application submitted successfully with all required documents' },
      { status: APPLICATION_STATUS.UNDER_VERIFICATION, timestamp: '2026-11-03 09:20', actor: 'Dr. Kazi Mahfuzur Rahman (VO)', remarks: 'Application assigned to FSIT verification committee' },
      { status: APPLICATION_STATUS.VERIFIED, timestamp: '2026-11-04 16:40', actor: 'Dr. Kazi Mahfuzur Rahman (VO)', remarks: 'All credentials and academic records verified from DIU ERP' },
      { status: APPLICATION_STATUS.SCORED_RANKED, timestamp: '2026-11-06 11:00', actor: 'Automated Scoring Engine', remarks: 'Merit score computed: 87.20 / 100.00. Institutional Rank #14' },
      { status: APPLICATION_STATUS.SHORTLISTED, timestamp: '2026-11-07 15:30', actor: 'Office of the Provost', remarks: 'Provisional merit list approved by Provost Committee' },
      { status: APPLICATION_STATUS.SEAT_OFFERED, timestamp: '2026-11-09 10:00', actor: 'Hall Administration', remarks: 'Seat offer issued: Yunus Khan Scholar Garden- 01 (BLOCK-A), Room 301, Seat B. Confirmation required before Nov 14.' }
    ]
  },
  {
    id: 'app_0891',
    appNumber: 'DIU-NEST-2026-F-0891',
    cycleId: 'cycle_fall_2026',
    cycleName: 'Fall 2026 Regular Application Cycle',
    studentId: '222-15-5801',
    studentName: 'Nusrat Jahan',
    gender: 'Female',
    department: 'Software Engineering',
    deptShort: 'SWE',
    cgpa: 3.91,
    semester: '6th',
    homeDistrict: 'Sylhet',
    distanceKm: 280,
    submissionDate: '2026-11-03 16:10',
    status: APPLICATION_STATUS.UNDER_VERIFICATION,
    currentStepIndex: 2,
    hallPreferences: [
      { priority: 1, hallId: 'rasg-01-a', hallName: 'Rowshan Ara Scholar Garden-01 (BLOCK-A)', roomType: '2-Bed Standard' },
      { priority: 2, hallId: 'rasg-01-b', hallName: 'Rowshan Ara Scholar Garden-01 (BLOCK-B)', roomType: '4-Bed Shared' }
    ],
    specialCategory: 'None',
    annualFamilyIncome: 420000,
    documents: [
      { id: 'doc_10', name: 'DIU Student ID Card', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80', status: 'Pending', verifiedBy: null },
      { id: 'doc_11', name: 'Latest Official Grade Sheet', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80', status: 'Pending', verifiedBy: null },
      { id: 'doc_12', name: 'Permanent Residence Proof (Chairman Certificate)', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80', status: 'Pending', verifiedBy: null }
    ],
    meritScore: null,
    seatOffer: null,
    timeline: [
      { status: APPLICATION_STATUS.DRAFT, timestamp: '2026-11-03 11:00', actor: 'Nusrat Jahan', remarks: 'Application started' },
      { status: APPLICATION_STATUS.SUBMITTED, timestamp: '2026-11-03 16:10', actor: 'Nusrat Jahan', remarks: 'Application submitted successfully' },
      { status: APPLICATION_STATUS.UNDER_VERIFICATION, timestamp: '2026-11-04 10:00', actor: 'Dr. Kazi Mahfuzur Rahman (VO)', remarks: 'Under formal document review' }
    ]
  },
  {
    id: 'app_0765',
    appNumber: 'DIU-NEST-2026-F-0765',
    cycleId: 'cycle_fall_2026',
    cycleName: 'Fall 2026 Regular Application Cycle',
    studentId: '221-15-5120',
    studentName: 'Rakibul Islam',
    gender: 'Male',
    department: 'Electrical and Electronic Engineering',
    deptShort: 'EEE',
    cgpa: 3.45,
    semester: '7th',
    homeDistrict: 'Rangpur',
    distanceKm: 310,
    submissionDate: '2026-11-01 19:20',
    status: APPLICATION_STATUS.CORRECTION_REQUIRED,
    currentStepIndex: 3,
    hallPreferences: [
      { priority: 1, hallId: 'yksg-01-a', hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)', roomType: '4-Bed Shared' }
    ],
    specialCategory: 'None',
    annualFamilyIncome: 280000,
    documents: [
      { id: 'doc_20', name: 'DIU Student ID Card', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80', status: 'Approved', verifiedBy: 'VO-FSIT-104' },
      { id: 'doc_21', name: 'Grade Sheet (BLURRED / UNREADABLE)', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80', status: 'Needs Correction', verifiedBy: 'VO-FSIT-104', remarks: 'Uploaded image is blurred. Please upload official DIU portal grade sheet.' },
      { id: 'doc_22', name: 'Permanent Residence Proof', type: 'image/jpeg', url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80', status: 'Approved', verifiedBy: 'VO-FSIT-104' }
    ],
    correctionRemarks: 'Your submitted Grade Sheet document is blurred and cannot be verified against DIU ERP records. Please re-upload a clear scanned copy or PDF from the student portal.',
    meritScore: null,
    seatOffer: null,
    timeline: [
      { status: APPLICATION_STATUS.SUBMITTED, timestamp: '2026-11-01 19:20', actor: 'Rakibul Islam', remarks: 'Submitted' },
      { status: APPLICATION_STATUS.UNDER_VERIFICATION, timestamp: '2026-11-02 11:30', actor: 'Dr. Kazi Mahfuzur Rahman (VO)', remarks: 'Verification in progress' },
      { status: APPLICATION_STATUS.CORRECTION_REQUIRED, timestamp: '2026-11-03 14:15', actor: 'Dr. Kazi Mahfuzur Rahman (VO)', remarks: 'Needs correction: Grade sheet image is blurred and unreadable.' }
    ]
  },
  {
    id: 'app_0650',
    appNumber: 'DIU-NEST-2026-F-0650',
    cycleId: 'cycle_fall_2026',
    cycleName: 'Fall 2026 Regular Application Cycle',
    studentId: '213-15-4819',
    studentName: 'Fahim Shahriar',
    gender: 'Male',
    department: 'Business Administration',
    deptShort: 'BBA',
    cgpa: 3.78,
    semester: '8th',
    homeDistrict: 'Khulna',
    distanceKm: 270,
    submissionDate: '2026-10-28 10:15',
    status: APPLICATION_STATUS.CHECKED_IN,
    currentStepIndex: 10,
    hallPreferences: [
      { priority: 1, hallId: 'yksg-01-a', hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)', roomType: '2-Bed Standard' }
    ],
    specialCategory: 'None',
    annualFamilyIncome: 450000,
    documents: [],
    meritScore: {
      cgpaScore: 37.8,
      distanceScore: 25.0,
      financialNeedScore: 16.0,
      extracurricularScore: 8.0,
      quotaBonus: 0,
      totalScore: 86.8,
      rank: 16,
      totalApplicants: 420
    },
    seatOffer: {
      offerId: 'OFR-2026-650',
      hallId: 'yksg-01-a',
      hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
      roomNumber: 'G03',
      seatNumber: 'Seat A',
      roomType: '2-Bed Standard',
      monthlyRent: 3200,
      status: 'Allocated'
    },
    timeline: [
      { status: APPLICATION_STATUS.SUBMITTED, timestamp: '2026-10-28 10:15', actor: 'Fahim Shahriar', remarks: 'Submitted' },
      { status: APPLICATION_STATUS.VERIFIED, timestamp: '2026-10-29 12:00', actor: 'Verification Officer', remarks: 'Verified' },
      { status: APPLICATION_STATUS.SCORED_RANKED, timestamp: '2026-10-31 09:00', actor: 'Scoring Engine', remarks: 'Score: 86.80' },
      { status: APPLICATION_STATUS.SEAT_OFFERED, timestamp: '2026-11-01 11:00', actor: 'Provost Office', remarks: 'Offered Room G03 Seat A' },
      { status: APPLICATION_STATUS.ACCEPTED, timestamp: '2026-11-02 14:00', actor: 'Fahim Shahriar', remarks: 'Offer accepted' },
      { status: APPLICATION_STATUS.ALLOCATED, timestamp: '2026-11-03 16:00', actor: 'Accounts Officer', remarks: 'Confirmation fee BDT 4,000 paid' },
      { status: APPLICATION_STATUS.CHECKED_IN, timestamp: '2026-11-05 09:30', actor: 'Engr. M. A. Hasan (Warden)', remarks: 'Key issued, digital check-in completed' }
    ]
  },
  {
    id: 'app_0544',
    appNumber: 'DIU-NEST-2026-F-0544',
    cycleId: 'cycle_fall_2026',
    cycleName: 'Fall 2026 Regular Application Cycle',
    studentId: '223-15-6200',
    studentName: 'Shakil Mahmud',
    gender: 'Male',
    department: 'Civil Engineering',
    deptShort: 'Civil',
    cgpa: 2.95,
    semester: '4th',
    homeDistrict: 'Gazipur',
    distanceKm: 42,
    submissionDate: '2026-11-04 11:20',
    status: APPLICATION_STATUS.WAITLISTED,
    currentStepIndex: 5,
    hallPreferences: [
      { priority: 1, hallId: 'yksg-01-a', hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)', roomType: '4-Bed Shared' }
    ],
    meritScore: {
      cgpaScore: 29.5,
      distanceScore: 8.0,
      financialNeedScore: 12.0,
      extracurricularScore: 2.0,
      quotaBonus: 0,
      totalScore: 51.5,
      rank: 214,
      waitlistNumber: 4,
      totalApplicants: 420
    },
    seatOffer: null,
    timeline: [
      { status: APPLICATION_STATUS.SUBMITTED, timestamp: '2026-11-04 11:20', actor: 'Shakil Mahmud', remarks: 'Submitted' },
      { status: APPLICATION_STATUS.VERIFIED, timestamp: '2026-11-05 15:00', actor: 'Dr. Kazi Mahfuzur Rahman', remarks: 'Verified' },
      { status: APPLICATION_STATUS.SCORED_RANKED, timestamp: '2026-11-06 11:00', actor: 'Scoring Engine', remarks: 'Score: 51.50 (Rank 214)' },
      { status: APPLICATION_STATUS.WAITLISTED, timestamp: '2026-11-07 15:30', actor: 'Provost Committee', remarks: 'Assigned to General Waitlist #4' }
    ]
  }
];

