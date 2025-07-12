export const mockProviders = [
  {
    name: "Dr. Aarushi Sharma",
    provider_usertype: "therapist",
    is_inhouse: true,
    id: 101,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    clinic_details: {
      id: 1,
      name: "Bandra Clinic",
    },
    availabilities: [
      {
        online_slots: ["08:00", "08:15", "08:30"],
        offline_slots: ["09:00", "09:15"],
        both_slots: ["10:00", "10:15"],
        online_booked_slots: ["08:30"],
        offline_booked_slots: ["09:15"],
        blocked_slots: [{ slot: "11:00", reason: "Unwell" }],
      },
    ],
  },
  {
    name: "Anjana Thattil",
    provider_usertype: "psychiatrist",
    is_inhouse: false,
    id: 102,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    clinic_details: {
      id: 2,
      name: "Andheri Clinic",
    },
    availabilities: [
      {
        online_slots: ["10:00", "10:15", "10:30"],
        offline_slots: ["11:00", "11:15"],
        both_slots: ["12:00"],
        online_booked_slots: ["10:30"],
        offline_booked_slots: ["11:15"],
        blocked_slots: [{ slot: "12:00", reason: "Other" }],
      },
    ],
  },
  {
    name: "Dr. Amiya Banerjee",
    provider_usertype: "psychiatrist",
    is_inhouse: true,
    id: 103,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    clinic_details: {
      id: 3,
      name: "Juhu Clinic",
    },
    availabilities: [
      {
        online_slots: ["14:00", "14:15", "14:30"],
        offline_slots: ["15:00", "15:15"],
        both_slots: ["16:00"],
        online_booked_slots: ["14:30"],
        offline_booked_slots: ["15:15"],
        blocked_slots: [{ slot: "17:00", reason: "Other" }],
      },
    ],
  },
  {
    name: "Ms. Pooja Singh",
    provider_usertype: "therapist",
    is_inhouse: false,
    id: 104,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    clinic_details: {
      id: 4,
      name: "Chembur Clinic",
    },
    availabilities: [
      {
        online_slots: ["09:00", "09:30", "10:00"],
        offline_slots: ["10:30", "11:00"],
        both_slots: [],
        online_booked_slots: ["09:30"],
        offline_booked_slots: ["11:00"],
        blocked_slots: [{ slot: "10:00", reason: "Lunch" }],
      },
    ],
  },
  {
    name: "Dr. Rohan Gupta",
    provider_usertype: "psychologist",
    is_inhouse: true,
    id: 105,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    clinic_details: {
      id: 5,
      name: "Colaba Clinic",
    },
    availabilities: [
      {
        online_slots: ["11:00", "11:30", "12:00"],
        offline_slots: ["13:00", "13:30", "14:00"],
        both_slots: ["12:30"],
        online_booked_slots: ["11:30"],
        offline_booked_slots: ["13:00"],
        blocked_slots: [{ slot: "14:00", reason: "Meeting" }],
      },
    ],
  },
  {
    name: "Dr. Sarah Khan",
    provider_usertype: "counselor",
    is_inhouse: false,
    id: 106,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    clinic_details: {
      id: 6,
      name: "Worli Clinic",
    },
    availabilities: [
      {
        online_slots: ["15:00", "15:30"],
        offline_slots: ["16:00", "16:30", "17:00"],
        both_slots: ["17:30"],
        online_booked_slots: ["15:30"],
        offline_booked_slots: ["16:30"],
        blocked_slots: [{ slot: "18:00", reason: "Personal" }],
      },
    ],
  },
  {
    name: "Mr. Rahul Verma",
    provider_usertype: "therapist",
    is_inhouse: true,
    id: 107,
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    clinic_details: {
      id: 7,
      name: "Thane Clinic",
    },
    availabilities: [
      {
        online_slots: ["09:45", "10:00", "10:15"],
        offline_slots: ["10:45", "11:00"],
        both_slots: [],
        online_booked_slots: ["10:00"],
        offline_booked_slots: ["10:45"],
        blocked_slots: [{ slot: "11:30", reason: "Admin Work" }],
      },
    ],
  },
  {
    name: "Dr. Deepa Reddy",
    provider_usertype: "psychiatrist",
    is_inhouse: true,
    id: 108,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    clinic_details: {
      id: 8,
      name: "Dadar Clinic",
    },
    availabilities: [
      {
        online_slots: ["13:00", "13:15"],
        offline_slots: ["14:00", "14:15", "14:30"],
        both_slots: ["15:00"],
        online_booked_slots: ["13:15"],
        offline_booked_slots: ["14:00"],
        blocked_slots: [{ slot: "15:30", reason: "Travel" }],
      },
    ],
  },
  {
    name: "Dr. Vivek Singh",
    provider_usertype: "psychologist",
    is_inhouse: false,
    id: 109,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    clinic_details: {
      id: 9,
      name: "Malad Clinic",
    },
    availabilities: [
      {
        online_slots: ["07:30", "07:45"],
        offline_slots: ["08:00", "08:15"],
        both_slots: ["08:30", "08:45"],
        online_booked_slots: ["07:45"],
        offline_booked_slots: ["08:15"],
        blocked_slots: [{ slot: "09:00", reason: "Doctor's Appt" }],
      },
    ],
  },
  {
    name: "Ms. Divya Nair",
    provider_usertype: "counselor",
    is_inhouse: true,
    id: 110,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    clinic_details: {
      id: 10,
      name: "Goregaon Clinic",
    },
    availabilities: [
      {
        online_slots: ["16:00", "16:15", "16:30"],
        offline_slots: ["17:00", "17:15"],
        both_slots: [],
        online_booked_slots: ["16:30"],
        offline_booked_slots: ["17:15"],
        blocked_slots: [{ slot: "18:00", reason: "Holiday" }],
      },
    ],
  },
  {
    name: "Dr. Arjun Patel",
    provider_usertype: "therapist",
    is_inhouse: false,
    id: 111,
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    clinic_details: {
      id: 11,
      name: "Lower Parel Clinic",
    },
    availabilities: [
      {
        online_slots: ["09:00", "09:15", "09:30"],
        offline_slots: ["10:00", "10:15"],
        both_slots: ["10:30"],
        online_booked_slots: ["09:30"],
        offline_booked_slots: [],
        blocked_slots: [{ slot: "11:00", reason: "Study" }],
      },
    ],
  },
  {
    name: "Dr. Kriti Shah",
    provider_usertype: "psychiatrist",
    is_inhouse: true,
    id: 112,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    clinic_details: {
      id: 12,
      name: "Byculla Clinic",
    },
    availabilities: [
      {
        online_slots: ["11:00", "11:30"],
        offline_slots: ["12:00", "12:30", "13:00"],
        both_slots: [],
        online_booked_slots: ["11:30"],
        offline_booked_slots: ["12:30"],
        blocked_slots: [{ slot: "13:30", reason: "Conference" }],
      },
    ],
  },
  {
    name: "Mr. Vikram Rao",
    provider_usertype: "counselor",
    is_inhouse: true,
    id: 113,
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    clinic_details: {
      id: 13,
      name: "Powai Clinic",
    },
    availabilities: [
      {
        online_slots: ["14:00", "14:30"],
        offline_slots: ["15:00", "15:30"],
        both_slots: ["16:00", "16:30"],
        online_booked_slots: [],
        offline_booked_slots: ["15:30"],
        blocked_slots: [],
      },
    ],
  },
];

// Mock API function
export const mockFetchProviders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProviders);
    }, 1000); // Simulate network delay
  });
};
