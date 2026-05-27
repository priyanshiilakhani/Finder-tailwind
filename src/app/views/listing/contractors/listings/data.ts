const contractor01 = 'assets/img/listings/contractors/01.jpg';
const contractor02 = 'assets/img/listings/contractors/02.jpg';
const contractor03 = 'assets/img/listings/contractors/03.jpg';
const contractor04 = 'assets/img/listings/contractors/04.jpg';
const contractor05 = 'assets/img/listings/contractors/05.jpg';

const ava01 = 'assets/img/listings/contractors/ava01.jpg';
const ava02 = 'assets/img/listings/contractors/ava02.jpg';
const ava03 = 'assets/img/listings/contractors/ava03.jpg';
const ava04 = 'assets/img/listings/contractors/ava04.jpg';
const ava05 = 'assets/img/listings/contractors/ava05.jpg';

export type ServiceType = {
  id: string;
  label: string;
  checked?: boolean;
};

export const servicesData: ServiceType[] = [
  {
    id: 'appliance-installation',
    label: 'Appliance installation',
    checked: true,
  },
  {
    id: 'bathtub-repair',
    label: 'Bathtub repair',
  },
  {
    id: 'door-repair',
    label: 'Door repair',
  },
  {
    id: 'heating',
    label: 'Heating & furnace',
    checked: true,
  },
  {
    id: 'locksmith',
    label: 'Locksmith',
  },
  {
    id: 'small-appliance-repair',
    label: 'Small appliance repair',
  },
  {
    id: 'smoke-detector-installation',
    label: 'Smoke detector installation',
  },
  {
    id: 'electrical-work',
    label: 'Electrical work',
  },
  {
    id: 'plumbing',
    label: 'Plumbing',
  },
  {
    id: 'hvac-maintenance',
    label: 'HVAC maintenance',
  },
  {
    id: 'painting',
    label: 'Painting',
  },
  {
    id: 'roofing',
    label: 'Roofing',
    checked: true,
  },
  {
    id: 'flooring-installation',
    label: 'Flooring installation',
  },
  {
    id: 'carpentry',
    label: 'Carpentry',
    checked: true,
  },
  {
    id: 'landscaping',
    label: 'Landscaping',
  },
  {
    id: 'window-installation',
    label: 'Window installation',
  },
  {
    id: 'home-security-systems',
    label: 'Home security systems',
  },
  {
    id: 'drywall-repair',
    label: 'Drywall repair',
  },
  {
    id: 'gutter-cleaning',
    label: 'Gutter cleaning',
  },
  {
    id: 'insulation-installation',
    label: 'Insulation installation',
  },
  {
    id: 'kitchen-remodeling',
    label: 'Kitchen remodeling',
  },
  {
    id: 'bathroom-remodeling',
    label: 'Bathroom remodeling',
  },
  {
    id: 'pest-control',
    label: 'Pest control',
  },
];

export type BudgetType = {
  id: string;
  label: string;
};

export const budgetData: BudgetType[] = [
  {
    id: 'budget-4',
    label: '$$$$',
  },
  {
    id: 'budget-3',
    label: '$$$',
  },
  {
    id: 'budget-2',
    label: '$$',
  },
  {
    id: 'budget-1',
    label: '$',
  },
];

export type FeatureType = {
  id: string;
  label: string;
};

export const featuresData: FeatureType[] = [
  {
    id: 'eco-friendly',
    label: 'Eco-friendly',
  },
  {
    id: 'free-consultation',
    label: 'Free consultation',
  },
  {
    id: 'online-consultation',
    label: 'Online consultation',
  },
  {
    id: 'free-estimate',
    label: 'Free estimate',
  },
  {
    id: 'verified-hires',
    label: 'Verified hires',
  },
  {
    id: 'weekend-consultations',
    label: 'Weekend consultations',
  },
];

export type RatingType = {
  id: string;
  label: string;
  icon: string;
};

export const ratingsData: RatingType[] = [
  {
    id: 'star-5',
    label: '5',
    icon: 'star',
  },
  {
    id: 'star-4',
    label: '4',
    icon: 'star',
  },
  {
    id: 'star-3',
    label: '3',
    icon: 'star',
  },
  {
    id: 'star-2',
    label: '2-1',
    icon: 'star',
  },
];

export type FilterTagType = {
  label: string;
  starIcon?: boolean;
};

export const filterTagsData: FilterTagType[] = [
  {
    label: 'New York',
  },
  {
    label: '50 mi',
  },
  {
    label: 'Heating & fernace',
  },
  {
    label: 'Roofing',
  },
  {
    label: '$$',
  },
  {
    label: 'Eco-friendly',
  },
  {
    label: '5',
    starIcon: true,
  },
];

export type ContractorType = {
  name: string;
  avatar: string;
  images: string[];
  services: string[];
  description: string;
  rating: number;
  reviews: number;
  badges?: {
    text: string;
    class: string;
    icon?: string;
  }[];
  features?: {
    icon: string;
    text: string;
  }[];
}

export const contractorsData: ContractorType[] = [
  {
    name: 'Samantha Donovan',
    avatar: ava01,
    images: [contractor01, contractor01, contractor01],
    services: ['Water softener installation', 'Water heater repair'],
    description:
      "I'm Samantha, your licensed, insured plumber in NYC. Specializing in servicing residential buildings, high rises, offices, and eateries.",
    rating: 4.7,
    reviews: 26,
    badges: [
      {
        text: 'Verified',
        class: 'bg-info',
        icon: 'lucide:shield',
      },
    ],
    features: [
      {
        icon: 'thumbs-up',
        text: 'Listing of the month',
      },
      {
        icon: 'leaf',
        text: 'Eco-friendly',
      },
    ],
  },
  {
    name: 'Easy Handy Services',
    avatar: ava02,
    images: [contractor02, contractor02, contractor02],
    services: ['Appliance installation'],
    description:
      'We offers reliable and professional appliance installation services, ensuring your home is equipped with expertly installed, ready-to-use appliances.',
    rating: 4.9,
    reviews: 38,
    badges: [
      {
        text: 'Top',
        class: 'bg-primary',
      },
    ],
    features: [
      {
        icon: 'thumbs-up',
        text: 'Listing of the month',
      },
    ],
  },
  {
    name: 'Alex Rodriguez',
    avatar: ava03,
    images: [contractor03, contractor03, contractor03],
    services: ['Carpentry', 'Custom kitchen cabinets'],
    description:
      'With an unwavering commitment to excellence, I bring dreams to life with woodwork. Each stroke of skilled hands transforms timber into masterpieces.',
    rating: 5.0,
    reviews: 13,
    features: [
      {
        icon: 'leaf',
        text: 'Eco-friendly',
      },
    ],
  },
  {
    name: 'Roofing & Construction',
    avatar: ava04,
    images: [contractor04, contractor04, contractor04],
    services: ['Roof repair', 'Asphalt roofing', 'Flat foam roofing'],
    description:
      'With extensive experience in roofing and construction, we focus on both residential and commercial roofing solutions.',
    rating: 4.6,
    reviews: 97,
    badges: [
      {
        text: 'Verified',
        class: 'bg-info',
        icon: 'lucide:shield',
      },
    ],
    features: [
      {
        icon: 'shield',
        text: 'Verified hires',
      },
      {
        icon: 'leaf',
        text: 'Eco-friendly',
      },
    ],
  },
  {
    name: 'Sam Jackson',
    avatar: ava05,
    images: [contractor05, contractor05, contractor05],
    services: ['Bathroom remodeling', 'Bathtub installation'],
    description:
      'I provide all types of plumbing service work, repairs and installations. I offer full service remodeling.',
    rating: 5.0,
    reviews: 21,
    features: [
      {
        icon: 'leaf',
        text: 'Eco-friendly',
      },
    ],
  },
];