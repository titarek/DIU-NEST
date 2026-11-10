
export const mockHalls = [

  {
    id: 'yksg-01-a',
    code: 'SL/2026/0001',
    name: 'Yunus Khan Scholar Garden- 01 (BLOCK-A)',
    type: 'Male',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 856,
    beds: 856,
    allocatedCount: 808,
    availableCount: 48,
    floorsCount: 7,
    roomsCount: 226,
    warden: 'Prof. Dr. Kazi Mahfuzur Rahman',
    contact: '+880 1819-234001',
    email: 'warden.yksg1a@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['High-speed Wi-Fi', '24/7 Security & CCTV', 'Gymnasium', 'Reading Room', 'Dining Hall', 'Solar Backup', 'Water Purifier', 'Sports Lounge'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2200, deposit: 3000, description: 'Spacious four-student shared room with personal study desk, wardrobe and balcony' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Two-student shared room with attached washroom and individual storage' },
      { type: 'Single Deluxe', rent: 4500, deposit: 5000, description: 'Single occupancy room with personal study unit and attached bath' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Ground Floor (Level 1)',
        rooms: [
          {
            roomNumber: '101',
            type: '4-Bed Shared',
            beds: [
              { id: '101-A', label: 'Seat A', status: 'occupied', student: { name: 'Sabbir Ahmed', studentId: '211-15-4301', dept: 'CSE' } },
              { id: '101-B', label: 'Seat B', status: 'occupied', student: { name: 'Mahmudul Hasan', studentId: '212-15-4422', dept: 'SWE' } },
              { id: '101-C', label: 'Seat C', status: 'available', student: null },
              { id: '101-D', label: 'Seat D', status: 'reserved', student: { name: 'Provisional Hold', studentId: 'QUOTA-001' } },
            ]
          },
          {
            roomNumber: '102',
            type: '4-Bed Shared',
            beds: [
              { id: '102-A', label: 'Seat A', status: 'occupied', student: { name: 'Tariqul Islam', studentId: '221-15-5100', dept: 'EEE' } },
              { id: '102-B', label: 'Seat B', status: 'maintenance', student: null, maintenanceNote: 'Painting & desk upgrade' },
              { id: '102-C', label: 'Seat C', status: 'available', student: null },
              { id: '102-D', label: 'Seat D', status: 'available', student: null },
            ]
          }
        ]
      },
      {
        floorNumber: 2,
        floorName: 'Level 2',
        rooms: [
          {
            roomNumber: '201',
            type: '2-Bed Standard',
            beds: [
              { id: '201-A', label: 'Seat A', status: 'occupied', student: { name: 'Tanvir Ahmed', studentId: '221-15-5842', dept: 'CSE' } },
              { id: '201-B', label: 'Seat B', status: 'available', student: null },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'yksg-01-b',
    code: 'SL/2026/0002',
    name: 'Yunus Khan Scholar Garden- 01 (BLOCK-B)',
    type: 'Male',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 759,
    beds: 759,
    allocatedCount: 724,
    availableCount: 35,
    floorsCount: 13,
    roomsCount: 193,
    warden: 'Engr. M. A. Hasan',
    contact: '+880 1819-234002',
    email: 'warden.yksg1b@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['High-speed Wi-Fi', '24/7 Security & CCTV', 'High-Speed Elevators', 'Study Room', 'Cafeteria', 'Prayer Room'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2200, deposit: 3000, description: 'Modern shared room with dedicated wardrobes and ceiling fan' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Two-student room with private balcony' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Ground Floor',
        rooms: [
          {
            roomNumber: 'B101',
            type: '4-Bed Shared',
            beds: [
              { id: 'B101-A', label: 'Seat A', status: 'occupied', student: { name: 'Al Amin', studentId: '223-15-6012', dept: 'Civil' } },
              { id: 'B101-B', label: 'Seat B', status: 'available', student: null },
              { id: 'B101-C', label: 'Seat C', status: 'available', student: null },
              { id: 'B101-D', label: 'Seat D', status: 'occupied', student: { name: 'Kamrul Islam', studentId: '231-15-6810', dept: 'SWE' } },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'yksg-02-a',
    code: 'SL/2026/0003',
    name: 'Yunus Khan Scholar Garden- 02 (BLOCK-A)',
    type: 'Male',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 1006,
    beds: 1006,
    allocatedCount: 944,
    availableCount: 62,
    floorsCount: 9,
    roomsCount: 261,
    warden: 'Dr. Md. Rashedul Islam',
    contact: '+880 1819-234003',
    email: 'warden.yksg2a@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['Wi-Fi Coverage', '24/7 CCTV', 'Reading Hall', 'Laundry Corner', 'Table Tennis & Carrom', 'Filtered Water'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2200, deposit: 3000, description: 'Four-bed layout with personal storage units' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Dual sharing room with study desk' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Level 1',
        rooms: [
          {
            roomNumber: '2A-101',
            type: '4-Bed Shared',
            beds: [
              { id: '2A101-A', label: 'Seat A', status: 'occupied', student: { name: 'Fahim Shahriar', studentId: '213-15-4819', dept: 'BBA' } },
              { id: '2A101-B', label: 'Seat B', status: 'available', student: null },
              { id: '2A101-C', label: 'Seat C', status: 'available', student: null },
              { id: '2A101-D', label: 'Seat D', status: 'occupied', student: { name: 'Shahadat Hossain', studentId: '221-15-5201', dept: 'CSE' } },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'yksg-02-b',
    code: 'SL/2026/0005',
    name: 'Yunus Khan Scholar Garden- 02 (BLOCK-B)',
    type: 'Male',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 1133,
    beds: 1133,
    allocatedCount: 1063,
    availableCount: 70,
    floorsCount: 11,
    roomsCount: 296,
    warden: 'Mr. Md. Ashraful Alam',
    contact: '+880 1819-234005',
    email: 'warden.yksg2b@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['Elevator Facilities', 'High-speed Wi-Fi', 'Dedicated Dining Hall', 'Study Room', 'Badminton Court', 'First Aid Station'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2200, deposit: 3000, description: 'Shared room equipped with wall shelving and desks' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Comfortable two-bed accommodation' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Level 1',
        rooms: [
          {
            roomNumber: '2B-101',
            type: '4-Bed Shared',
            beds: [
              { id: '2B101-A', label: 'Seat A', status: 'occupied', student: { name: 'Hasan Ali', studentId: '231-15-6800', dept: 'Pharmacy' } },
              { id: '2B101-B', label: 'Seat B', status: 'available', student: null },
              { id: '2B101-C', label: 'Seat C', status: 'available', student: null },
              { id: '2B101-D', label: 'Seat D', status: 'available', student: null },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'yksg-02-c',
    code: 'SL/2026/0006',
    name: 'Yunus Khan Scholar Garden- 02 (BLOCK-C)',
    type: 'Male',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 67,
    beds: 67,
    allocatedCount: 59,
    availableCount: 8,
    floorsCount: 3,
    roomsCount: 21,
    warden: 'Mr. Nazmul Huda',
    contact: '+880 1819-234006',
    email: 'warden.yksg2c@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['Quiet Study Environment', 'High-speed Wi-Fi', '24/7 Security', 'Dining Access', 'Balcony Garden'],
    roomTypes: [
      { type: '3-Bed Shared', rent: 2400, deposit: 3000, description: 'Triple sharing low-density student block' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Dual sharing room with quiet exposure' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Level 1',
        rooms: [
          {
            roomNumber: '2C-101',
            type: '3-Bed Shared',
            beds: [
              { id: '2C101-A', label: 'Seat A', status: 'occupied', student: { name: 'Rony Mia', studentId: '221-15-5600', dept: 'English' } },
              { id: '2C101-B', label: 'Seat B', status: 'available', student: null },
              { id: '2C101-C', label: 'Seat C', status: 'available', student: null },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'yksg-03-a',
    code: 'SL/2026/0007',
    name: 'Yunus Khan Scholar Garden- 03 (BLOCK-A)',
    type: 'Male',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 258,
    beds: 258,
    allocatedCount: 242,
    availableCount: 16,
    floorsCount: 7,
    roomsCount: 40,
    warden: 'Dr. Md. Saiful Islam',
    contact: '+880 1819-234007',
    email: 'warden.yksg3a@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['Modern Architecture', 'High-speed Wi-Fi', '24/7 Security', 'Indoor Games', 'Solar Backup'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2200, deposit: 3000, description: 'Four-bed layout with individual wardrobes' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Twin sharing room with attached balcony' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Level 1',
        rooms: [
          {
            roomNumber: '3A-101',
            type: '4-Bed Shared',
            beds: [
              { id: '3A101-A', label: 'Seat A', status: 'occupied', student: { name: 'Sohanur Rahman', studentId: '221-15-5612', dept: 'English' } },
              { id: '3A101-B', label: 'Seat B', status: 'available', student: null },
              { id: '3A101-C', label: 'Seat C', status: 'available', student: null },
              { id: '3A101-D', label: 'Seat D', status: 'available', student: null },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'yksg-03-b',
    code: 'SL/2026/0008',
    name: 'Yunus Khan Scholar Garden- 03 (BLOCK-B)',
    type: 'Male',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 420,
    beds: 420,
    allocatedCount: 394,
    availableCount: 26,
    floorsCount: 9,
    roomsCount: 90,
    warden: 'Engr. Zahidul Haque',
    contact: '+880 1819-234008',
    email: 'warden.yksg3b@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['Elevator Access', 'High-speed Wi-Fi', 'CCTV Security', 'Study Pavilion', 'Filtered Drinking Water'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2200, deposit: 3000, description: 'Standard 4-bed shared living unit' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Two-bed student room with study station' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Level 1',
        rooms: [
          {
            roomNumber: '3B-101',
            type: '4-Bed Shared',
            beds: [
              { id: '3B101-A', label: 'Seat A', status: 'occupied', student: { name: 'Arif Hossain', studentId: '222-15-5901', dept: 'CSE' } },
              { id: '3B101-B', label: 'Seat B', status: 'available', student: null },
              { id: '3B101-C', label: 'Seat C', status: 'available', student: null },
              { id: '3B101-D', label: 'Seat D', status: 'available', student: null },
            ]
          }
        ]
      }
    ]
  },

  {
    id: 'rasg-01-a',
    code: 'SL/2026/0009',
    name: 'Rowshan Ara Scholar Garden-01 (BLOCK-A)',
    type: 'Female',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 748,
    beds: 748,
    allocatedCount: 706,
    availableCount: 42,
    floorsCount: 9,
    roomsCount: 195,
    warden: 'Prof. Dr. Farhana Helal Mehtab',
    contact: '+880 1715-987009',
    email: 'warden.rasg1a@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['High-speed Wi-Fi', '24/7 Female Security Guards', 'Reading Room', 'Dining Facility', 'Indoor Badminton Court', 'Solar Water Heating'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2200, deposit: 3000, description: 'Four-student shared room with attached washroom and study tables' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Two-student room with private balcony and wardrobe' },
      { type: 'Single Deluxe', rent: 4500, deposit: 5000, description: 'Single room with air conditioning provision and study unit' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Ground Floor (Level 1)',
        rooms: [
          {
            roomNumber: '1A-101',
            type: '4-Bed Shared',
            beds: [
              { id: '1A101-A', label: 'Seat A', status: 'occupied', student: { name: 'Ayesha Siddiqua', studentId: '223-15-6120', dept: 'CSE' } },
              { id: '1A101-B', label: 'Seat B', status: 'available', student: null },
              { id: '1A101-C', label: 'Seat C', status: 'available', student: null },
              { id: '1A101-D', label: 'Seat D', status: 'occupied', student: { name: 'Tahmina Islam', studentId: '223-15-6125', dept: 'CSE' } },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'rasg-01-b',
    code: 'SL/2026/0010',
    name: 'Rowshan Ara Scholar Garden-01 (BLOCK-B)',
    type: 'Female',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 544,
    beds: 544,
    allocatedCount: 513,
    availableCount: 31,
    floorsCount: 6,
    roomsCount: 144,
    warden: 'Mrs. Nusrat Jahan',
    contact: '+880 1715-987010',
    email: 'warden.rasg1b@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['High-speed Wi-Fi', '24/7 Security & CCTV', 'Lounge Area', 'Dining Hall', 'Rooftop Garden'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2200, deposit: 3000, description: 'Spacious four-bed unit' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Two-bed shared room with wardrobe' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Level 1',
        rooms: [
          {
            roomNumber: '1B-101',
            type: '4-Bed Shared',
            beds: [
              { id: '1B101-A', label: 'Seat A', status: 'occupied', student: { name: 'Nusrat Jahan', studentId: '221-15-5701', dept: 'Pharmacy' } },
              { id: '1B101-B', label: 'Seat B', status: 'available', student: null },
              { id: '1B101-C', label: 'Seat C', status: 'available', student: null },
              { id: '1B101-D', label: 'Seat D', status: 'available', student: null },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'rasg-01-bb',
    code: 'SL/2026/0011',
    name: 'Rowshan Ara Scholar Garden-01- (Bagan Bari)',
    type: 'Female',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 42,
    beds: 42,
    allocatedCount: 38,
    availableCount: 4,
    floorsCount: 3,
    roomsCount: 12,
    warden: 'Mrs. Rokeya Begum',
    contact: '+880 1715-987011',
    email: 'warden.rasg1bb@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['Scenic Garden Surroundings', 'Wi-Fi', 'Round-the-clock Security', 'Common Kitchenette', 'Quiet Study Ambience'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2400, deposit: 3000, description: 'Garden-facing 4-bed room' },
      { type: '2-Bed Standard', rent: 3500, deposit: 4000, description: 'Quiet 2-bed room with large windows' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Ground Floor',
        rooms: [
          {
            roomNumber: 'BB-101',
            type: '4-Bed Shared',
            beds: [
              { id: 'BB101-A', label: 'Seat A', status: 'occupied', student: { name: 'Sadia Sultana', studentId: '222-15-5800', dept: 'English' } },
              { id: 'BB101-B', label: 'Seat B', status: 'available', student: null },
              { id: 'BB101-C', label: 'Seat C', status: 'available', student: null },
              { id: 'BB101-D', label: 'Seat D', status: 'occupied', student: { name: 'Mariam Akter', studentId: '222-15-5810', dept: 'English' } },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'rasg-02-main',
    code: 'SL/2026/0012',
    name: 'Rowshan Ara Scholar Garden-02 (Main)',
    type: 'Female',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 1619,
    beds: 1619,
    allocatedCount: 1524,
    availableCount: 95,
    floorsCount: 15,
    roomsCount: 420,
    warden: 'Prof. Dr. Shefali Begum',
    contact: '+880 1715-987012',
    email: 'warden.rasg2main@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['Multiple Elevators', 'High-speed Wi-Fi', 'Central Dining Hall', 'Auditorium & Activity Center', 'Medical Support Desk', 'Gymnasium'],
    roomTypes: [
      { type: '4-Bed Shared', rent: 2200, deposit: 3000, description: 'High-rise 4-bed shared living unit' },
      { type: '2-Bed Standard', rent: 3200, deposit: 4000, description: 'Two-bed room with panoramic campus view' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Ground Floor',
        rooms: [
          {
            roomNumber: '2M-101',
            type: '4-Bed Shared',
            beds: [
              { id: '2M101-A', label: 'Seat A', status: 'occupied', student: { name: 'Farzana Yesmin', studentId: '221-15-5911', dept: 'EEE' } },
              { id: '2M101-B', label: 'Seat B', status: 'available', student: null },
              { id: '2M101-C', label: 'Seat C', status: 'available', student: null },
              { id: '2M101-D', label: 'Seat D', status: 'available', student: null },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'rasg-02-ext-05',
    code: 'SL/2026/0013',
    name: 'Rowshan Ara Scholar Garden-02- Extension-05 (N/K)',
    type: 'Female',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 157,
    beds: 157,
    allocatedCount: 145,
    availableCount: 12,
    floorsCount: 5,
    roomsCount: 90,
    warden: 'Mrs. Shamima Nasrin',
    contact: '+880 1715-987013',
    email: 'warden.rasg2ext5@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['Modern Student Amenities', 'High-speed Wi-Fi', '24/7 Security & CCTV', 'Common Study Room', 'Dining Service'],
    roomTypes: [
      { type: '2-Bed Standard', rent: 3000, deposit: 3500, description: 'Dual sharing room with study desk' },
      { type: 'Single Room', rent: 4200, deposit: 5000, description: 'Single resident room' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Level 1',
        rooms: [
          {
            roomNumber: 'E5-101',
            type: '2-Bed Standard',
            beds: [
              { id: 'E5101-A', label: 'Seat A', status: 'occupied', student: { name: 'Jannatul Ferdous', studentId: '223-15-6200', dept: 'SWE' } },
              { id: 'E5101-B', label: 'Seat B', status: 'available', student: null },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'rasg-02-ext-02',
    code: 'SL/2026/0014',
    name: 'Rowshan Ara Scholar Garden-02- Extension-02 [MPB]',
    type: 'Female',
    campus: 'Daffodil Smart City, Ashulia',
    totalCapacity: 97,
    beds: 97,
    allocatedCount: 89,
    availableCount: 8,
    floorsCount: 4,
    roomsCount: 45,
    warden: 'Mrs. Rubina Akhter',
    contact: '+880 1715-987014',
    email: 'warden.rasg2ext2@diu.edu.bd',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'Modern student hall offering comfortable rooms, active common spaces, high-speed WiFi, and 24/7 security.',
    amenities: ['High-speed Wi-Fi', '24/7 CCTV & Security', 'Study Lounge', 'Dining Area', 'Solar Backup'],
    roomTypes: [
      { type: '2-Bed Standard', rent: 3000, deposit: 3500, description: 'Two-student room with study desk' },
      { type: '3-Bed Shared', rent: 2400, deposit: 3000, description: 'Three-student shared room' }
    ],
    floors: [
      {
        floorNumber: 1,
        floorName: 'Level 1',
        rooms: [
          {
            roomNumber: 'MPB-101',
            type: '2-Bed Standard',
            beds: [
              { id: 'MPB101-A', label: 'Seat A', status: 'occupied', student: { name: 'Sabrina Mostafa', studentId: '222-15-5950', dept: 'BBA' } },
              { id: 'MPB101-B', label: 'Seat B', status: 'available', student: null },
            ]
          }
        ]
      }
    ]
  }
];

export const PLATFORM_HALL_METRICS = {
  totalHalls: 13,
  maleHalls: 7,
  femaleHalls: 6,
  totalFloors: 101,
  totalRooms: 2033,
  totalBeds: 7706,
  allocatedBeds: 7249,
  availableBeds: 457
};
