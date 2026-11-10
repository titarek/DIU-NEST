
export const mockRequests = [
  {
    id: 'req_101',
    type: 'Maintenance',
    category: 'Electrical',
    studentId: '221-15-5842',
    studentName: 'Tanvir Ahmed',
    hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    roomNumber: '301',
    title: 'Ceiling Fan Making Abnormal Grinding Sound',
    description: 'The ceiling fan regulator and motor bearing are producing loud clicking noises, disrupting night study.',
    priority: 'Medium',
    submittedAt: '2026-11-08 11:20',
    status: 'In Progress',
    assignedTo: 'Md. Dulal Hossain (Electrician)',
    adminNotes: 'Work order #EL-49 issued. Technician scheduled for 2:30 PM today.'
  },
  {
    id: 'req_102',
    type: 'Seat Transfer',
    category: 'Room Upgrade',
    studentId: '211-15-4301',
    studentName: 'Sabbir Ahmed',
    hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    currentRoom: 'G01 (4-Bed)',
    requestedRoomType: '2-Bed Standard (Floor 2 or 3)',
    reason: 'Final year thesis work requires quieter study environment for software simulations.',
    priority: 'Normal',
    submittedAt: '2026-11-05 14:10',
    status: 'Open',
    adminNotes: 'Under review by Hall Warden. Awaiting vacancy on 3rd floor.'
  },
  {
    id: 'req_103',
    type: 'Grievance / Appeal',
    category: 'Merit Score Appeal',
    studentId: '223-15-6200',
    studentName: 'Shakil Mahmud',
    hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    title: 'Appeal regarding Distance Scoring calculation',
    description: 'My permanent residence is in Gazipur Sreepur Upazila (over 65km), but the automated portal calculated 42km based on district center. Requesting distance recalculation.',
    priority: 'High',
    submittedAt: '2026-11-07 16:45',
    status: 'Under Review by Provost',
    adminNotes: 'Documents forwarded to GIS Verification sub-committee.'
  },
  {
    id: 'req_104',
    type: 'Maintenance',
    category: 'Plumbing',
    studentId: '213-15-4819',
    studentName: 'Fahim Shahriar',
    hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    roomNumber: 'G03',
    title: 'Bathroom Basin Tap Leakage',
    description: 'Basin water mixer valve is continuously dripping.',
    priority: 'Low',
    submittedAt: '2026-11-02 09:00',
    status: 'Resolved',
    assignedTo: 'Plumber Karim',
    adminNotes: 'Washer replaced on Nov 3. Verified by student.'
  }
];

export const mockNotices = [
  {
    id: 'not_01',
    title: 'Fall 2026 Hall Seat Confirmation Deadline Notice',
    category: 'Administrative',
    date: '2026-11-08',
    hall: 'All Residential Halls',
    author: 'Office of the Provost',
    urgent: true,
    content: 'All shortlisted students offered hall accommodation for Fall 2026 must complete their seat confirmation and caution deposit payment through the DIU Nest portal before November 14, 2026, 11:59 PM. Unclaimed seats will immediately be offered to the next candidates on the general waitlist.'
  },
  {
    id: 'not_02',
    title: 'Wi-Fi Network Upgradation at Yunus Khan & Rowshan Ara Scholar Gardens',
    category: 'Maintenance',
    date: '2026-11-07',
    hall: 'Yunus Khan & Rowshan Ara Scholar Gardens',
    author: 'IT Infrastructure Division',
    urgent: false,
    content: 'Wi-Fi access points on floors 2, 3, and 4 will undergo high-density Wi-Fi 6 hardware upgrade on Friday from 2:00 PM to 6:00 PM. Temporary intermittent connectivity may occur.'
  },
  {
    id: 'not_03',
    title: 'Dining Hall Menu Update & Hygiene Audit Report',
    category: 'Welfare',
    date: '2026-11-04',
    hall: 'All Residential Halls',
    author: 'Hall Welfare Committee',
    urgent: false,
    content: 'The monthly food quality and hygiene audit scored 94.2% satisfaction. New breakfast options including egg-kichuri and milk-cornflakes have been added to the subsidized breakfast menu.'
  }
];

