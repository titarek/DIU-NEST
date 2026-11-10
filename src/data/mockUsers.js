
export const ROLES = {
  STUDENT: 'student',
  VERIFICATION_OFFICER: 'verification_officer',
  WARDEN: 'warden',
  PROVOST: 'provost',
  ACCOUNTS_OFFICER: 'accounts_officer',
  SUPER_ADMIN: 'super_admin'
};

export const ROLE_LABELS = {
  [ROLES.STUDENT]: 'Student',
  [ROLES.VERIFICATION_OFFICER]: 'Verification Officer',
  [ROLES.WARDEN]: 'Hall Warden / Admin',
  [ROLES.PROVOST]: 'Provost / Authority',
  [ROLES.ACCOUNTS_OFFICER]: 'Accounts Officer',
  [ROLES.SUPER_ADMIN]: 'Super Admin'
};

export const mockUsers = {
  [ROLES.STUDENT]: {
    id: 'usr_student_01',
    role: ROLES.STUDENT,
    name: 'Tanvir Ahmed',
    studentId: '221-15-5842',
    email: 'tanvir.cse@diu.edu.bd',
    phone: '+880 1712-345678',
    avatar: null,
    department: 'Computer Science and Engineering',
    deptShort: 'CSE',
    faculty: 'Faculty of Science & Information Technology (FSIT)',
    program: 'B.Sc. in CSE',
    batch: '58th Batch',
    semester: '8th Semester',
    currentLevelTerm: 'Level-4, Term-2',
    cgpa: 3.82,
    completedCredits: 124,
    gender: 'Male',
    bloodGroup: 'B+',
    dob: '2002-09-18',
    nid: '19985421589632145',
    permanentAddress: {
      division: 'Chittagong',
      district: 'Chittagong',
      upazila: 'Hathazari',
      villageRoad: 'House #42, Road #3, CDA R/A',
      distanceKm: 265
    },
    presentAddress: 'Daffodil Smart City, Ashulia, Dhaka',
    guardian: {
      fatherName: 'Md. Rafiqul Islam',
      fatherOccupation: 'Retired Government Officer',
      motherName: 'Shahana Begum',
      motherOccupation: 'Homemaker',
      emergencyContact: '+880 1819-876543',
      guardianRelation: 'Father',
      annualIncomeBdt: 360000
    },
    profileCompletion: 92,
    activeAllocation: {
      hallId: 'yksg-01-a',
      hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
      roomNumber: '301',
      seatNumber: 'Seat B',
      type: '4-Bed Shared',
      monthlyRent: 2200,
      allocatedDate: '2026-11-01',
      status: 'Active'
    }
  },

  [ROLES.VERIFICATION_OFFICER]: {
    id: 'usr_vo_01',
    role: ROLES.VERIFICATION_OFFICER,
    name: 'Dr. Kazi Mahfuzur Rahman',
    officerId: 'VO-FSIT-104',
    email: 'kazi.cse@diu.edu.bd',
    phone: '+880 1711-234567',
    designation: 'Associate Professor & Verification Officer',
    department: 'Department of CSE',
    avatar: null,
    assignedCycle: 'Fall 2026 Regular Cycle',
    assignedFaculty: 'FSIT & FE',
    verifiedCount: 142,
    pendingCount: 18
  },

  [ROLES.WARDEN]: {
    id: 'usr_warden_01',
    role: ROLES.WARDEN,
    name: 'Engr. M. A. Hasan',
    staffId: 'WARDEN-YKSG-01',
    email: 'warden.yksg1a@diu.edu.bd',
    phone: '+880 1819-234001',
    designation: 'Senior Hall Warden',
    assignedHallId: 'yksg-01-a',
    hallName: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    avatar: null,
    totalSeatsManaged: 856,
    currentResidents: 808
  },

  [ROLES.PROVOST]: {
    id: 'usr_provost_01',
    role: ROLES.PROVOST,
    name: 'Prof. Dr. Syed Akhter Hossain',
    staffId: 'PROVOST-01',
    email: 'provost.halls@diu.edu.bd',
    phone: '+880 1713-001122',
    designation: 'Provost, Residential Halls & Professor',
    avatar: null,
    authorityLevel: 'University Executive Authority',
    managedHallsCount: 4
  },

  [ROLES.ACCOUNTS_OFFICER]: {
    id: 'usr_accounts_01',
    role: ROLES.ACCOUNTS_OFFICER,
    name: 'Mr. Golam Sarwar',
    staffId: 'ACC-SR-402',
    email: 'accounts.hall@diu.edu.bd',
    phone: '+880 1715-445566',
    designation: 'Senior Accounts Officer, Hall Revenue Section',
    avatar: null,
    department: 'Finance & Accounts Division, DIU'
  },

  [ROLES.SUPER_ADMIN]: {
    id: 'usr_admin_01',
    role: ROLES.SUPER_ADMIN,
    name: 'Engr. Saiful Islam',
    staffId: 'SYS-ADMIN-01',
    email: 'saiful.it@diu.edu.bd',
    phone: '+880 1718-998877',
    designation: 'Lead Enterprise Systems Architect',
    avatar: null,
    department: 'Information Technology & Infrastructure Services'
  }
};
