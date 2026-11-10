
export const mockPayments = [
  {
    id: 'tx_9841',
    trxId: 'TXN-BK-20261102-841',
    studentId: '221-15-5842',
    studentName: 'Tanvir Ahmed',
    hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    amount: 5200,
    purpose: 'Seat Confirmation & Caution Deposit (Fall 2026)',
    paymentMethod: 'bKash Gateway',
    paymentDate: '2026-11-09 14:22',
    status: 'Pending',
    receiptNumber: 'DIU-REC-2026-9841',
    breakdown: [
      { item: 'Seat Confirmation Fee (November 2026)', amount: 2200 },
      { item: 'Refundable Security Deposit', amount: 3000 }
    ]
  },
  {
    id: 'tx_9612',
    trxId: 'TXN-NAGAD-20261028-612',
    studentId: '213-15-4819',
    studentName: 'Fahim Shahriar',
    hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    amount: 7200,
    purpose: 'Hall Admission & 2 Months Advance Rent',
    paymentMethod: 'Nagad Online',
    paymentDate: '2026-10-28 11:15',
    status: 'Successful',
    receiptNumber: 'DIU-REC-2026-9612',
    breakdown: [
      { item: 'Room Rent (Oct - Nov 2026)', amount: 3200 },
      { item: 'Caution Deposit', amount: 4000 }
    ]
  },
  {
    id: 'tx_9501',
    trxId: 'TXN-BANK-20261015-501',
    studentId: '211-15-4301',
    studentName: 'Sabbir Ahmed',
    hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    amount: 2200,
    purpose: 'Monthly Seat Rent (October 2026)',
    paymentMethod: 'DBBL Nexus Gateway',
    paymentDate: '2026-10-15 09:30',
    status: 'Successful',
    receiptNumber: 'DIU-REC-2026-9501',
    breakdown: [
      { item: 'Monthly Seat Rent (4-Bed Shared)', amount: 2200 }
    ]
  },
  {
    id: 'tx_9410',
    trxId: 'TXN-MANUAL-20261108-410',
    studentId: '223-15-6012',
    studentName: 'Al Amin',
    hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    amount: 2200,
    purpose: 'Monthly Seat Rent (November 2026)',
    paymentMethod: 'Bank Deposit Slip (Offline)',
    paymentDate: '2026-11-08 15:40',
    status: 'Under Verification',
    receiptNumber: 'DIU-REC-PENDING-410',
    slipImageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    bankBranch: 'Uttara Bank Ltd, Daffodil Smart City Branch',
    slipNumber: 'DEP-8849102'
  }
];

export const mockFeeStructure = [
  { id: 'fee_1', title: '4-Bed Shared Room Rent', type: 'Monthly', amount: 2200, hallType: 'All Halls', status: 'Active' },
  { id: 'fee_2', title: '2-Bed Standard Room Rent', type: 'Monthly', amount: 3200, hallType: 'All Halls', status: 'Active' },
  { id: 'fee_3', title: 'Single Deluxe Room Rent', type: 'Monthly', amount: 4500, hallType: 'Male Halls', status: 'Active' },
  { id: 'fee_4', title: 'Single Premium (Female) Room Rent', type: 'Monthly', amount: 4800, hallType: 'Female Halls', status: 'Active' },
  { id: 'fee_5', title: 'Hall Security Caution Deposit', type: 'One-time (Refundable)', amount: 3000, hallType: 'All Halls', status: 'Active' },
  { id: 'fee_6', title: 'Hall Identity & RFID Smart Card Fee', type: 'One-time', amount: 300, hallType: 'All Halls', status: 'Active' }
];

export const mockStudentDues = [
  { studentId: '221-15-5842', studentName: 'Tanvir Ahmed', hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)', roomNo: '301-B', totalDue: 5200, dueReason: 'Confirmation Fee & Security Deposit', deadline: '2026-11-14', status: 'Unpaid' },
  { studentId: '223-15-6012', studentName: 'Al Amin', hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)', roomNo: '201-A', totalDue: 2200, dueReason: 'November Rent (Bank Slip Awaiting Approval)', deadline: '2026-11-10', status: 'Processing' },
  { studentId: '212-15-4422', studentName: 'Mahmudul Hasan', hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)', roomNo: 'G01-B', totalDue: 2200, dueReason: 'November Rent (Overdue 2 Days)', deadline: '2026-11-09', status: 'Overdue' }
];

