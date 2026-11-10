
export const mockAuditLogs = [
  {
    id: 'log_01',
    timestamp: '2026-11-09 10:00:22',
    user: 'Prof. Dr. Syed Akhter Hossain (Provost)',
    role: 'Provost / Authority',
    action: 'PUBLISH_PROVISIONAL_OFFERS',
    target: 'Batch Fall 2026 Male Halls',
    ipAddress: '10.20.4.15 (DIU Executive Network)',
    justification: 'Approved provisional shortlist based on merit rank 1-120 according to approved policy weights.'
  },
  {
    id: 'log_02',
    timestamp: '2026-11-07 14:15:08',
    user: 'Prof. Dr. Syed Akhter Hossain (Provost)',
    role: 'Provost / Authority',
    action: 'MANUAL_RANK_ADJUSTMENT',
    target: 'Student 223-15-5912 (Quota Verification)',
    ipAddress: '10.20.4.15',
    justification: 'Verified National Debate Championship Gold Medal certificate; awarded 5 co-curricular merit bonus points as per syndicate resolution #2024/7.'
  },
  {
    id: 'log_03',
    timestamp: '2026-11-05 16:40:12',
    user: 'Dr. Kazi Mahfuzur Rahman (Verification Officer)',
    role: 'Verification Officer',
    action: 'APPLICATION_VERIFICATION_COMPLETE',
    target: 'App DIU-NEST-2026-F-0842 (Tanvir Ahmed)',
    ipAddress: '10.20.12.88',
    justification: 'Cross-checked CGPA with DIU ERP and verified student ID card & electricity bill.'
  },
  {
    id: 'log_04',
    timestamp: '2026-11-04 11:32:00',
    user: 'Engr. M. A. Hasan (Hall Warden)',
    role: 'Hall Warden',
    action: 'ROOM_STATUS_MAINTENANCE_TOGGLE',
    target: 'Yunus Khan Scholar Garden- 01 (BLOCK-A) Room 102 Bed B',
    ipAddress: '10.20.18.2',
    justification: 'Reported ceiling plaster dampness; temporarily decommissioned bed pending civil repair.'
  },
  {
    id: 'log_05',
    timestamp: '2026-11-03 09:12:45',
    user: 'Mr. Golam Sarwar (Accounts Officer)',
    role: 'Accounts Officer',
    action: 'OFFLINE_PAYMENT_APPROVAL',
    target: 'Receipt DIU-REC-2026-9612 (Fahim Shahriar)',
    ipAddress: '10.20.8.40',
    justification: 'Verified bank slip DEP-8849102 deposit match in Uttara Bank Smart City branch statement.'
  },
  {
    id: 'log_06',
    timestamp: '2026-10-25 00:00:01',
    user: 'Engr. Saiful Islam (Super Admin)',
    role: 'Super Admin',
    action: 'APPLICATION_CYCLE_ACTIVATION',
    target: 'Cycle Fall 2026 Regular',
    ipAddress: '10.20.1.1',
    justification: 'Automated scheduler launched Fall 2026 portal application window.'
  }
];

