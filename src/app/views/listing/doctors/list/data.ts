const doctor1 = 'assets/img/listings/doctors/01.jpg';
const doctor2 = 'assets/img/listings/doctors/02.jpg';
const doctor3 = 'assets/img/listings/doctors/03.jpg';
const doctor4 = 'assets/img/listings/doctors/04.jpg';
const doctor5 = 'assets/img/listings/doctors/05.jpg';
const doctor6 = 'assets/img/listings/doctors/06.jpg';
const doctor7 = 'assets/img/listings/doctors/07.jpg';

export type DoctorInfoType = {
  image: string;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: number;
  adults?: boolean;
  children?: boolean;
  description: string;

  clinics: {
    name: string;
    distance: string;
    address: string;
  }[];

  onlinePrice: string;
  clinicPrice: string;

  visitMethods: {
    online: boolean;
    clinic: boolean;
  };

  days: { label: string; checked?: boolean }[];

  slots?: { time: string }[];

  noSlots?: boolean;
  nearestReception?: string;
};

export const doctorinfoData: DoctorInfoType[] = [
  {
    image: doctor1,
    name: 'Dr. Michael Johnston',
    specialty: 'Cardiologist',
    rating: 4.5,
    reviews: 176,
    experience: 21,
    adults: true,
    children: true,
    description:
      'Dr. Michael Johnston, a cardiologist with over two decades of experience, offers advanced cardiovascular care, utilizing cutting-edge techniques and thorough diagnostic analysis. Trust his expertise for all your heart health needs.',

    clinics: [
      {
        name: 'Citywide Heart Clinic',
        distance: '1.4 mi',
        address: '201 E Randolph St, Chicago, IL 60602',
      },
      {
        name: 'Skyline Medical Center',
        distance: '3.2 mi',
        address: '233 S Wacker Dr, Chicago, IL 60606',
      },
    ],

    onlinePrice: '$75.00',
    clinicPrice: '$90.00',

    visitMethods: {
      online: true,
      clinic: false,
    },

    days: [{ label: 'Mon, 11', checked: true }, { label: 'Tue, 12' }, { label: 'Wed, 13' }],

    slots: [
      { time: '10:00' },
      { time: '10:30' },
      { time: '11:00' },
      { time: '11:30' },
      { time: '12:00' },
      { time: '12:30' },
      { time: '13:00' },
      { time: '13:30' },
      { time: '14:00' },
      { time: '14:30' },
      { time: '15:00' },
      { time: '15:30' },
    ],
  },

  {
    image: doctor2,
    name: 'Dr. Gloria Fox',
    specialty: 'Pediatrician',
    rating: 4.7,
    reviews: 112,
    experience: 5,
    children: true,
    description:
      'Dr. Gloria Fox has extensive experience in caring for infants, children, and adolescents. Known for her compassionate approach and expertise in child health, she provides comprehensive medical care, from routine check-ups to specialized treatments.',

    clinics: [
      {
        name: 'Bright Futures Pediatric Clinic',
        distance: '1.3 mi',
        address: '412 Oak Street, Chicago, IL 60610',
      },
      {
        name: "Children's Health Center",
        distance: '2.5 mi',
        address: '785 State Street, Chicago, IL 60605',
      },
    ],

    onlinePrice: '$40.00',
    clinicPrice: '$58.00',

    visitMethods: {
      online: true,
      clinic: false,
    },

    days: [{ label: 'Mon, 11', checked: true }, { label: 'Tue, 12' }, { label: 'Wed, 13' }],

    slots: [
      { time: '10:00' },
      { time: '10:30' },
      { time: '11:00' },
      { time: '11:30' },
      { time: '12:00' },
      { time: '12:30' },
      { time: '13:00' },
      { time: '13:30' },
      { time: '14:00' },
      { time: '14:30' },
      { time: '15:00' },
      { time: '15:30' },
    ],
  },

  {
    image: doctor3,
    name: 'Dr. Peter Grokovski',
    specialty: 'Dermatologist',
    rating: 5.0,
    reviews: 43,
    experience: 8,
    adults: true,
    description:
      'Dr. Grokovski is a skilled dermatologist specializing in the diagnosis and treatment of skin, hair, and nail conditions. With a focus on both medical and cosmetic dermatology, he provides personalized care using the latest techniques.',

    clinics: [
      {
        name: 'Lakeside Dermatology Clinic',
        distance: '1.2 mi',
        address: '950 Michigan Avenue, Chicago, IL 60611',
      },
      {
        name: 'North Shore Skin Care Center',
        distance: '3.4 mi',
        address: '5230 Irving Park Road, Chicago, IL 60641',
      },
    ],

    onlinePrice: '$55.00',
    clinicPrice: '$70.00',

    visitMethods: {
      online: true,
      clinic: false,
    },

    days: [{ label: 'Mon, 11', checked: true }, { label: 'Tue, 12' }, { label: 'Wed, 13' }],

    noSlots: true,
    nearestReception: 'Wed, June 13',
  },

  {
    image: doctor4,
    name: 'Dr. Emily Johnson',
    specialty: 'General Practitioner',
    rating: 4.8,
    reviews: 95,
    experience: 11,
    adults: true,
    children: true,
    description:
      'Dr. Johnson is a dedicated general practitioner with a focus on providing comprehensive, patient-centered care. With experience in diagnosing and managing a wide range of health conditions, she takes a holistic approach to healthcare.',

    clinics: [
      {
        name: 'Riverwalk Family Health Clinic',
        distance: '1.3 mi',
        address: '345 Hubbard Street, Chicago, IL 60654',
      },
      {
        name: 'Southside Wellness Medical Center',
        distance: '2.7 mi',
        address: '1728 Michigan Avenue, Chicago, IL 60616',
      },
    ],

    onlinePrice: '$35.00',
    clinicPrice: '$50.00',

    visitMethods: {
      online: true,
      clinic: false,
    },

    days: [{ label: 'Mon, 11', checked: true }, { label: 'Tue, 12' }, { label: 'Wed, 13' }],

    slots: [
      { time: '10:00' },
      { time: '10:30' },
      { time: '11:00' },
      { time: '11:30' },
      { time: '12:00' },
      { time: '12:30' },
      { time: '13:00' },
      { time: '13:30' },
      { time: '14:00' },
      { time: '14:30' },
      { time: '15:00' },
      { time: '15:30' },
    ],
  },
  {
    image: doctor5,
    name: 'Dr. Peter Parker',
    specialty: 'Orthopedic Surgeon',
    rating: 4.3,
    reviews: 37,
    experience: 6,
    adults: true,

    description:
      'Dr. Parker is a highly skilled orthopedic surgeon specializing in the diagnosis and surgical treatment of musculoskeletal conditions. With a focus on advanced techniques, he helps patients recover from injuries and other orthopedic concerns.',

    clinics: [
      {
        name: 'Lakeview Orthopedic Institute',
        distance: '1.5 mi',
        address: '2800 Sheridan Road, Chicago, IL 60657',
      },
      {
        name: 'Midtown Joint and Spine Center',
        distance: '2.3 mi',
        address: '1225 Madison Street, Chicago, IL 60607',
      },
    ],

    onlinePrice: '$80.00',
    clinicPrice: '$100.00',

    visitMethods: {
      online: true,
      clinic: false,
    },

    days: [
      { label: 'Mon, 11', checked: true },
      { label: 'Tue, 12' },
      { label: 'Wed, 13' },
    ],

    slots: [
      { time: '10:00' },
      { time: '10:30' },
      { time: '11:00' },
      { time: '11:30' },
      { time: '12:00' },
      { time: '12:30' },
      { time: '13:00' },
      { time: '13:30' },
      { time: '14:00' },
      { time: '14:30' },
      { time: '15:00' },
      { time: '15:30' },
    ],
  },

  {
    image: doctor6,
    name: 'Dr. Michael Williams',
    specialty: 'Neurologist',
    rating: 4.7,
    reviews: 185,
    experience: 13,
    adults: true,
    children: true,

    description:
      'Dr. Williams is a distinguished neurologist specializing in the diagnosis and treatment of neurological disorders. With expertise in managing conditions affecting the brain, spine, and nervous system, Dr. Williams provides comprehensive care through advanced diagnostic techniques and tailored treatment plans.',

    clinics: [
      {
        name: 'Central Neurology Clinic',
        distance: '0.9 mi',
        address: '500 Lake Shore Drive, Chicago, IL 60611',
      },
      {
        name: 'Chicago Brain and Spine Center',
        distance: '1.8 mi',
        address: '2121 Harrison Street, Chicago, IL 60612',
      },
    ],

    onlinePrice: '$70.00',
    clinicPrice: '$90.00',

    visitMethods: {
      online: true,
      clinic: false,
    },

    days: [
      { label: 'Mon, 11', checked: true },
      { label: 'Tue, 12' },
      { label: 'Wed, 13' },
    ],

    slots: [
      { time: '10:00' },
      { time: '10:30' },
      { time: '11:00' },
      { time: '11:30' },
      { time: '12:00' },
      { time: '12:30' },
      { time: '13:00' },
      { time: '13:30' },
      { time: '14:00' },
      { time: '14:30' },
      { time: '15:00' },
      { time: '15:30' },
    ],
  },

  {
    image: doctor7,
    name: 'Dr. Vanessa Thompson',
    specialty: 'Endocrinologist',
    rating: 4.9,
    reviews: 65,
    experience: 7,
    adults: true,
    children: true,

    description:
      'Dr. Vanessa Thompson is a highly regarded endocrinologist specializing in the diagnosis and management of hormonal disorders, including thyroid conditions, diabetes, and metabolic issues. Dr. Thompson is dedicated to helping her patients achieve balanced health and improved quality of life.',

    clinics: [
      {
        name: 'Westside Endocrine Specialists',
        distance: '1.4 mi',
        address: '2300 Madison Street, Chicago, IL 60612',
      },
      {
        name: 'Magnolia Endocrinology Center',
        distance: '2.6 mi',
        address: '1555 Clark Street, Chicago, IL 60610',
      },
    ],

    onlinePrice: '$45.00',
    clinicPrice: '$60.00',

    visitMethods: {
      online: true,
      clinic: false,
    },

    days: [
      { label: 'Mon, 11', checked: true },
      { label: 'Tue, 12' },
      { label: 'Wed, 13' },
    ],

    slots: [
      { time: '10:00' },
      { time: '10:30' },
      { time: '11:00' },
      { time: '11:30' },
      { time: '12:00' },
      { time: '12:30' },
      { time: '13:00' },
      { time: '13:30' },
      { time: '14:00' },
      { time: '14:30' },
      { time: '15:00' },
      { time: '15:30' },
    ],
  },
];
