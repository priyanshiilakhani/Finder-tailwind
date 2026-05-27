const doctor8 = 'assets/img/listings/doctors/08.jpg';
const doctor9 = 'assets/img/listings/doctors/09.jpg';
const doctor10 = 'assets/img/listings/doctors/10.jpg';
const doctor11 = 'assets/img/listings/doctors/11.jpg';
const doctor12 = 'assets/img/listings/doctors/12.jpg';
const doctor13 = 'assets/img/listings/doctors/13.jpg';
const doctor14 = 'assets/img/listings/doctors/14.jpg';
const doctor15 = 'assets/img/listings/doctors/15.jpg';
const doctor16 = 'assets/img/listings/doctors/16.jpg';
const doctor17 = 'assets/img/listings/doctors/17.jpg';

export type DoctorInfoType = {
  image: string;
  name: string;
  rating: number;
  reviews: number;
  specialty: string;
  verified?: boolean;
  experience: string;
  adults?: boolean;
  children?: boolean;
  description: string;
  clinics: {
    name: string;
    distance: string;
  }[];
  price: string;
  availability: string;
}

export const doctorInfoData: DoctorInfoType[] = [
  {
    image: doctor8,
    name: 'Dr. Sophia Davis',
    rating: 4.8,
    reviews: 63,
    specialty: 'Pediatrician',
    verified: true,
    experience: '7 years experience',
    children: true,
    description:
      'Dr. Davis is highly respected in her field, known for her innovative treatment plans and her ability to connect with young patients and their families.',
    clinics: [
      {
        name: 'Kids Health Clinic',
        distance: '3.1 mi',
      },
      {
        name: 'Pediatric Medical Center',
        distance: '5.2 mi',
      },
    ],
    price: '$35.00',
    availability: 'Online / Offline / Home visit',
  },

  {
    image: doctor9,
    name: 'Dr. Michael Johnston',
    rating: 4.5,
    reviews: 176,
    specialty: 'Cardiologist',
    verified: true,
    experience: '21 years experience',
    adults: true,
    children: true,
    description:
      'Dr. Michael Johnston, a cardiologist with over two decades of experience, offers advanced cardiovascular care, utilizing cutting-edge techniques and thorough diagnostic analysis.',
    clinics: [
      {
        name: 'Citywide Heart Clinic',
        distance: '1.4 mi',
      },
      {
        name: 'Pediatric Medical Center',
        distance: '3.2 mi',
      },
    ],
    price: '$75.00',
    availability: 'Online / Offline',
  },

  {
    image: doctor10,
    name: 'Dr. Gloria Fox',
    rating: 4.7,
    reviews: 112,
    specialty: 'Pediatrician',
    experience: '5 years experience',
    children: true,
    description:
      'Dr. Gloria Fox has extensive experience in caring for infants, children, and adolescents. Known for her compassionate approach and expertise in child health.',
    clinics: [
      {
        name: 'Bright Futures Pediatric Clinic',
        distance: '1.3 mi',
      },
      {
        name: "Children's Health Center",
        distance: '2.5 mi',
      },
    ],
    price: '$30.00',
    availability: 'Online / Offline / Home visit',
  },

  {
    image: doctor11,
    name: 'Dr. Michael Williams',
    rating: 4.7,
    reviews: 185,
    specialty: 'Neurologist',
    verified: true,
    experience: '13 years experience',
    adults: true,
    children: true,
    description:
      'Dr. Williams is a distinguished neurologist specializing in the diagnosis and treatment of neurological disorders. He provides comprehensive care through advanced diagnostic techniques and tailored treatment plans.',
    clinics: [
      {
        name: 'Central Neurology Clinic',
        distance: '0.9 mi',
      },
      {
        name: 'Chicago Brain and Spine Center',
        distance: '1.8 mi',
      },
    ],
    price: '$70.00',
    availability: 'Online / Offline',
  },

  {
    image: doctor12,
    name: 'Dr. David McCluskey',
    rating: 4.6,
    reviews: 59,
    specialty: 'Endocrinologist',
    verified: true,
    experience: '9 years experience',
    adults: true,
    description:
      'Dr. McCluskey is an experienced endocrinologist specializing in the diagnosis and treatment of hormonal disorders. With a focus on diabetes, thyroid disease, and metabolic imbalances.',
    clinics: [
      {
        name: 'Lakeshore Endocrine Center',
        distance: '1.2 mi',
      },
      {
        name: 'South Loop Endocrinology Clinic',
        distance: '3.4 mi',
      },
    ],
    price: '$65.00',
    availability: 'Online / Offline',
  },

  {
    image: doctor13,
    name: 'Dr. Emily Johnson',
    rating: 4.8,
    reviews: 95,
    specialty: 'General Practitioner',
    experience: '11 years experience',
    adults: true,
    children: true,
    description:
      'Dr. Johnson is a dedicated general practitioner with a focus on providing comprehensive, patient-centered care. With experience in diagnosing and managing a wide range of health conditions, she takes a holistic approach to healthcare.',
    clinics: [
      {
        name: 'Riverwalk Family Health Clinic',
        distance: '1.3 mi',
      },
      {
        name: 'Southside Wellness Medical Center',
        distance: '2.7 mi',
      },
    ],
    price: '$40.00',
    availability: 'Online / Offline / Home visit',
  },

  {
    image: doctor14,
    name: 'Dr. Thomas Brown',
    rating: 4.9,
    reviews: 218,
    specialty: 'Orthopedic Surgeon',
    experience: '17 years experience',
    adults: true,
    children: true,
    description:
      'Dr. Thomas Brown is a renowned orthopedic surgeon specializing in the treatment of musculoskeletal conditions, including joint replacements, fractures, and sports injuries.',
    clinics: [
      {
        name: 'Lincoln Park Orthopedic Center',
        distance: '1.5 mi',
      },
      {
        name: 'Windy City Orthopedic Institute',
        distance: '2.2 mi',
      },
    ],
    price: '$80.00',
    availability: 'Online / Offline',
  },

  {
    image: doctor15,
    name: 'Dr. Peter Grokovski',
    rating: 5.0,
    reviews: 43,
    specialty: 'Dermatologist',
    verified: true,
    experience: '8 years experience',
    adults: true,
    description:
      'Dr. Grokovski is a skilled dermatologist specializing in the diagnosis and treatment of skin, hair, and nail conditions. With a focus on both medical and cosmetic dermatology.',
    clinics: [
      {
        name: 'Lakeside Dermatology Clinic',
        distance: '1.5 mi',
      },
      {
        name: 'North Shore Skin Care Center',
        distance: '2.2 mi',
      },
    ],
    price: '$55.00',
    availability: 'Online / Offline',
  },

  {
    image: doctor16,
    name: 'Dr. Vanessa Thompson',
    rating: 4.0,
    reviews: 64,
    specialty: 'Endocrinologist',
    verified: true,
    experience: '21 years experience',
    adults: true,
    children: true,
    description:
      'Dr. Vanessa Thompson is a highly regarded endocrinologist specializing in the diagnosis of hormonal disorders, including thyroid conditions, diabetes, and metabolic issues.',
    clinics: [
      {
        name: 'Westside Endocrine Specialists',
        distance: '1.4 mi',
      },
      {
        name: 'Magnolia Endocrinology Center',
        distance: '2.6 mi',
      },
    ],
    price: '$45.00',
    availability: 'Online / Offline / Home visit',
  },

  {
    image: doctor17,
    name: 'Dr. Peter Parker',
    rating: 4.3,
    reviews: 37,
    specialty: 'Orthopedic Surgeon',
    experience: '6 years experience',
    adults: true,
    description:
      'Dr. Parker is a highly skilled orthopedic surgeon specializing in the diagnosis and surgical treatment of musculoskeletal conditions. He helps patients recover from injuries.',
    clinics: [
      {
        name: 'Lakeview Orthopedic Institute',
        distance: '1.5 mi',
      },
      {
        name: 'Midtown Joint and Spine Center',
        distance: '2.3 mi',
      },
    ],
    price: '$80.00',
    availability: 'Online / Offline',
  },
];
