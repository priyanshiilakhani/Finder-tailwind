const hero01 = 'assets/img/home/doctors/hero-slider/01.jpg';
const hero02 = 'assets/img/home/doctors/hero-slider/02.jpg';
const hero03 = 'assets/img/home/doctors/hero-slider/03.jpg';

const thumb01 = 'assets/img/home/doctors/hero-slider/th01.jpg';
const thumb02 = 'assets/img/home/doctors/hero-slider/th02.jpg';
const thumb03 = 'assets/img/home/doctors/hero-slider/th03.jpg';

const offerImg1 = 'assets/img/home/doctors/offers/01.jpg';
const offerImg2 = 'assets/img/home/doctors/offers/02.jpg';
const offerImg3 = 'assets/img/home/doctors/offers/03.jpg';

const consultation1 = 'assets/img/home/doctors/consultation/01.jpg';
const consultation2 = 'assets/img/home/doctors/consultation/02.jpg';
const consultation3 = 'assets/img/home/doctors/consultation/03.jpg';

const stepImg1 = 'assets/img/home/doctors/steps/01.jpg';
const stepImg2 = 'assets/img/home/doctors/steps/02.jpg';
const stepImg3 = 'assets/img/home/doctors/steps/03.jpg';

const author01 = 'assets/img/blog/v4/author/01.jpg';
const author03 = 'assets/img/blog/v4/author/03.jpg';
const author04 = 'assets/img/blog/v4/author/04.jpg';

const blogThumb01 = 'assets/img/blog/v4/01.jpg';
const blogThumb02 = 'assets/img/blog/v4/02.jpg';
const blogThumb03 = 'assets/img/blog/v4/03.jpg';

export type HeroSliderType = {
  image: string;
  thumbnail: string;
  alt: string;
  text: string;
};

export const heroSliderData: HeroSliderType[] = [
  {
    image: hero01,
    thumbnail: thumb01,
    alt: 'Doctor Image 1',
    text: 'More than 20,000 users received qualified medical care',
  },
  {
    image: hero02,
    thumbnail: thumb02,
    alt: 'Doctor Image 2',
    text: 'More than 20,000 users received qualified medical care',
  },
  {
    image: hero03,
    thumbnail: thumb03,
    alt: 'Doctor Image 3',
    text: 'More than 20,000 users received qualified medical care',
  },
];

export type MedicalCategoryType = {
  title: string;
  viewAllLink: string;
  columns: string[][];
};

export const medicalCategoryData: MedicalCategoryType[] = [
  {
    title: 'Specialties',
    viewAllLink: '/',
    columns: [
      ['Family medicine', 'Dentistry', 'Internal medicine'],
      ['Obstetrics gynecology', 'Orthopedic surgery'],
    ],
  },
  {
    title: 'Conditions',
    viewAllLink: '/',
    columns: [
      ['Endometriosis', 'ADHD and-or ADD', 'Fibromyalgia'],
      ['Sleep apnea', 'Anxiety'],
    ],
  },
  {
    title: 'Procedures',
    viewAllLink: '/',
    columns: [
      ['Replacement therapy', 'Knee replacemen', 'Colonoscopy'],
      ['Hernia repair', 'Vasectomy'],
    ],
  },
];

export type OfferType = {
  title: string;
  description: string;
  price: string;
  oldPrice: string;
  image: string;
};

export const offersData: OfferType[] = [
  {
    title: '10% discount on consultation',
    description:
      'If you want to get quality advice on health issues. Only now you can order a consultation with a 15% discount. Hurry up, the number of places is limited!',
    price: '$45.00',
    oldPrice: '$50.00',
    image: offerImg1,
  },
  {
    title: '15% discount on all tests',
    description:
      'The new Helsymedica laboratory offers discounts on all types of analyzes and tests for pensioners.',
    price: '$55.00',
    oldPrice: '$65.00',
    image: offerImg2,
  },
  {
    title: '25% discount on emergency',
    description:
      'Would you like to schedule a consultation in advance? Choose a date and time convenient for you and get a 25% discount.',
    price: '$52.00',
    oldPrice: '$70.00',
    image: offerImg3,
  },
];

export type ConsultationType = {
  title: string;
  image: string;
  description: string;
  price: string;
  oldPrice: string;
  link: string;
};

export const consultationData: ConsultationType[] = [
  {
    title: 'Optometrist',
    image: consultation1,
    description:
      'Providing comprehensive eye exams, vision correction, and eye health services to ensure optimal visual performance and eye care.',
    price: '$50.00',
    oldPrice: '$75.00',
    link: '/listings-list-doctors',
  },
  {
    title: 'Therapist',
    image: consultation2,
    description:
      'Offering professional mental health support and therapeutic services, address emotional challenges, and improve overall well-being.',
    price: '$35.00',
    oldPrice: '$45.00',
    link: '/listings-list-doctors',
  },
  {
    title: 'Dentist',
    image: consultation3,
    description:
      'Delivering high-quality dental care, including cleanings, fillings, preventative treatments, and restorative procedures to maintain healthy teeth and gums.',
    price: '$60.00',
    oldPrice: '$90.00',
    link: '/listings-list-doctors',
  },
];

export type StepType = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

export const stepsData: StepType[] = [
  {
    image: stepImg1,
    alt: 'Image',
    title: 'Choose',
    description: 'Browse our directory to quickly find suitable healthcare professionals.',
  },
  {
    image: stepImg2,
    alt: 'Image',
    title: 'Review',
    description: 'Check profiles and patient feedback to choose the right provider.',
  },
  {
    image: stepImg3,
    alt: 'Image',
    title: 'Connect',
    description: 'Directly contact and book appointments with your chosen healthcare professional.',
  },
];

export type BlogPostType = {
  title: string;
  image: string;
  authorImage: string;
  authorName: string;
  date: string;
  category: string;
  link: string;
};

export const blogPostsData: BlogPostType[] = [
  {
    title: 'Best practices for using AI in digital pharma advertising',
    image: blogThumb01,
    authorImage: author01,
    authorName: 'Dr. Martha Simpson',
    date: 'June 23, 2024',
    category: 'Healthcare trends',
    link: '/blog-single/v3',
  },
  {
    title: "How Healthgrades rates America's best hospitals",
    image: blogThumb02,
    authorImage: author03,
    authorName: 'Dr. Bessie Cooper',
    date: 'June 09, 2024',
    category: 'Hospital quality',
    link: '/blog-single/v3',
  },
  {
    title: "Men's healthcare behaviors and attitudes",
    image: blogThumb03,
    authorImage: author04,
    authorName: 'Dr. Jerome Bell',
    date: 'May 28, 2024',
    category: 'Medical industry',
    link: '/blog-single/v3',
  },
];

export type FeatureType = {
  title: string;
  description: string;
};

export const featuresData: FeatureType[] = [
  {
    title: 'Easy access',
    description:
      'Find a diverse range of healthcare professionals quickly and easily, ensuring you get the care you need without delay.',
  },
  {
    title: 'Trusted advice',
    description:
      'Choose healthcare providers with confidence, guided by reliable recommendations from peers and other patients.',
  },
  {
    title: 'Communication',
    description:
      'Enhance communication with healthcare providers for clearer, more responsive interactions.',
  },
];

export type StatisticType = {
  count: string;
  label: string;
};

export const statisticsData: StatisticType[] = [
  {
    count: '16 000+',
    label: 'Doctors',
  },
  {
    count: '3 500+',
    label: 'Clinics',
  },
  {
    count: '1200+',
    label: 'Laboratories',
  },
];

export const ctaData: string[] = ['Register now', 'Build your profile', 'Get discovered'];
