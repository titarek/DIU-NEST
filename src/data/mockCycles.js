
export const mockCycles = [
  {
    id: 'cycle_fall_2026',
    term: 'Fall 2026',
    title: 'Fall 2026 Regular Hall Seat Application Cycle',
    status: 'Active',
    openDate: '2026-10-25',
    closeDate: '2026-11-20',
    verificationDeadline: '2026-11-24',
    meritPublishDate: '2026-11-26',
    seatAcceptanceDeadline: '2026-11-30',
    eligibleHalls: ['yksg-01-a', 'yksg-01-b', 'yksg-02-a', 'yksg-02-b', 'yksg-02-c', 'yksg-03-a', 'yksg-03-b', 'rasg-01-a', 'rasg-01-b', 'rasg-01-bb', 'rasg-02-main', 'rasg-02-ext-05', 'rasg-02-ext-02'],
    totalSeatsAvailable: 126,
    totalApplicationsReceived: 1482,
    verifiedApplications: 1290,
    scoringWeights: {
      cgpaWeight: 40,
      distanceWeight: 25,
      financialNeedWeight: 20,
      extracurricularWeight: 10,
      quotaBonusPoints: 5
    },
    eligibilityRules: {
      minCgpa: 2.50,
      minCreditsCompleted: 15,
      disciplinaryClearanceRequired: true,
      maxDistanceExemptionKm: 15
    },
    mandatoryDocuments: [
      { id: 'doc_id', name: 'DIU Student ID Card (Both sides)', required: true },
      { id: 'doc_grade', name: 'Latest Official Semester Grade Sheet', required: true },
      { id: 'doc_residence', name: 'Permanent Address Proof (Utility Bill / Chairman Certificate)', required: true },
      { id: 'doc_income', name: 'Guardian Annual Income Certificate', required: false },
      { id: 'doc_extra', name: 'Co-curricular / Sports Achievement Certificates', required: false },
      { id: 'doc_quota', name: 'Special Quota Certificate (if applicable)', required: false }
    ]
  },
  {
    id: 'cycle_spring_2027',
    term: 'Spring 2027',
    title: 'Spring 2027 Upcoming Hall Seat Application Cycle',
    status: 'Upcoming',
    openDate: '2027-02-15',
    closeDate: '2027-03-05',
    verificationDeadline: '2027-03-10',
    meritPublishDate: '2027-03-12',
    seatAcceptanceDeadline: '2027-03-18',
    eligibleHalls: ['yksg-01-a', 'yksg-01-b', 'yksg-02-a', 'yksg-02-b', 'yksg-02-c', 'yksg-03-a', 'yksg-03-b', 'rasg-01-a', 'rasg-01-b', 'rasg-01-bb', 'rasg-02-main', 'rasg-02-ext-05', 'rasg-02-ext-02'],
    totalSeatsAvailable: 150,
    totalApplicationsReceived: 0,
    verifiedApplications: 0,
    scoringWeights: {
      cgpaWeight: 40,
      distanceWeight: 25,
      financialNeedWeight: 20,
      extracurricularWeight: 10,
      quotaBonusPoints: 5
    },
    eligibilityRules: {
      minCgpa: 2.50,
      minCreditsCompleted: 15,
      disciplinaryClearanceRequired: true,
      maxDistanceExemptionKm: 15
    }
  }
];

