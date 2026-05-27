const doctor18 = 'assets/img/listings/doctors/18.jpg';
const doctor19 = 'assets/img/listings/doctors/19.jpg';
const doctor20 = 'assets/img/listings/doctors/20.jpg';
const doctor21 = 'assets/img/listings/doctors/21.jpg';

export type CardiologyServiceColumn = {
  items: string[];
};

export const cardiologyServicesData: CardiologyServiceColumn[] = [
  {
    items: [
      'Electrocardiogram (ECG/EKG)',
      'Echocardiogram',
      'Stress Test',
      'Cardiac Catheterization',
      'Coronary Angiography',
    ],
  },
  {
    items: [
      'Pacemaker Implantation',
      'Balloon Angioplasty and Stenting',
      'Holter Monitoring',
      'Cardioversion',
      'Heart Valve Repair/Replacement',
    ],
  },
];

export type ClinicLocationType = {
  clinicName: string;
  distance: string;
  address: string;
};

export const clinicLocationsData: ClinicLocationType[] = [
  {
    clinicName: 'Citywide Heart Clinic',
    distance: '1.4 mi',
    address: '201 E Randolph St, Chicago, IL 60602',
  },
  {
    clinicName: 'Skyline Medical Center',
    distance: '3.2 mi',
    address: '233 S Wacker Dr, Chicago, IL 60606',
  },
];

export type RatingProgress = {
  star: number;
  percentage: string;
  total: number;
  ariaLabel: string;
};

export const ratingProgressData: RatingProgress[] = [
  {
    star: 5,
    percentage: '65%',
    total: 128,
    ariaLabel: 'Five stars',
  },
  {
    star: 4,
    percentage: '21%',
    total: 27,
    ariaLabel: 'Four stars',
  },
  {
    star: 3,
    percentage: '10%',
    total: 13,
    ariaLabel: 'Three stars',
  },
  {
    star: 2,
    percentage: '5%',
    total: 6,
    ariaLabel: 'Two stars',
  },
  {
    star: 1,
    percentage: '2.6%',
    total: 2,
    ariaLabel: 'One star',
  },
];

export type ReviewType = {
  name: string;
  date: string;
  rating: number;
  review: string;
  likes: number;
  dislikes: number;
};

export const reviewsData: ReviewType[] = [
  {
    name: 'Randy W.',
    date: 'November 19, 2024',
    rating: 5,
    review:
      "From start to finish, his cooperation was incredibly smooth. The pricing was quite reasonable, and the task was completed efficiently and with a high level of cleanliness. I'm delighted that we chose Mike over the other companies we considered based on quotes.",
    likes: 6,
    dislikes: 0,
  },
  {
    name: 'Lora Palmer',
    date: 'November 10, 2024',
    rating: 5,
    review: 'He was absolutely amazing very professional. I highly recommend hirings Mike.',
    likes: 13,
    dislikes: 2,
  },
  {
    name: 'Melissa Smith',
    date: 'November 5, 2024',
    rating: 5,
    review:
      'Mike delivered exceptional work at an excellent price. I highly recommend him. They completed the job in just four days, and after a full year, there have been no issues.',
    likes: 8,
    dislikes: 0,
  },
  {
    name: 'Alice Cooper',
    date: 'October 23, 2024',
    rating: 5,
    review:
      "Mike's service was exceptional, he is true professional. Discovered him on the website, took a chance, and without a doubt, he not only met but exceeded our expectations. I'm more than pleased to write a glowing review for Mike. As a highly satisfied customer, I can confidently say that he has definitely earned it.",
    likes: 27,
    dislikes: 3,
  },
  {
    name: 'Natalia D.',
    date: 'October 7, 2024',
    rating: 4,
    review:
      "Mike exhibited great professionalism and politeness. I hired him to replace the door springs, which he did efficiently in a short amount of time. I would wholeheartedly recommend his services to anyone. I'm delighted that everything is now functioning like new again.",
    likes: 15,
    dislikes: 0,
  },
];

export type VisitTimeSlotType = {
  time: string;
  checked?: boolean;
};

export const visitTimeSlotsData: VisitTimeSlotType[] = [
  {
    time: '10:00',
  },
  {
    time: '10:30',
  },
  {
    time: '11:00',
  },
  {
    time: '11:30',
  },
  {
    time: '12:00',
  },
  {
    time: '12:30',
    checked: true,
  },
  {
    time: '13:00',
  },
  {
    time: '13:30',
  },
  {
    time: '14:00',
  },
  {
    time: '14:30',
  },
  {
    time: '15:00',
  },
  {
    time: '15:30',
  },
];

export type DoctorAudience = {
  label: string;
  icon: string;
};

export type NearbyDoctorType = {
  image: string;
  rating: string;
  reviews: number;
  name: string;
  speciality: string;
  distance: string;
  audiences: DoctorAudience[];
  price: string;
};

export const nearbyDoctorsData: NearbyDoctorType[] = [
  {
    image: doctor18,
    rating: '4.5',
    reviews: 176,
    name: 'Dr. Peter Parker',
    speciality: 'Orthopedic Surgeon',
    distance: '1.5 mi',
    audiences: [
      {
        label: 'Adults',
        icon: 'user',
      },
    ],
    price: '$80.00',
  },
  {
    image: doctor19,
    rating: '4.7',
    reviews: 112,
    name: 'Dr. Gloria Fox',
    speciality: 'Pediatrician',
    distance: '1.3 mi',
    audiences: [
      {
        label: 'Children',
        icon: 'baby',
      },
    ],
    price: '$40.00',
  },
  {
    image: doctor20,
    rating: '5.0',
    reviews: 43,
    name: 'Dr. Peter Grokovski',
    speciality: 'Dermatologist',
    distance: '1.4 mi',
    audiences: [
      {
        label: 'Adults',
        icon: 'user',
      },
    ],
    price: '$55.00',
  },
  {
    image: doctor21,
    rating: '4.8',
    reviews: 95,
    name: 'Dr. Emily Johnson',
    speciality: 'General Practitioner',
    distance: '1.3 mi',
    audiences: [
      {
        label: 'Adults',
        icon: 'user',
      },
      {
        label: 'Children',
        icon: 'baby',
      },
    ],
    price: '$35.00',
  },
];
