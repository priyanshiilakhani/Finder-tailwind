export type footerType = {
  title: string;
  links: string[];
};

export const footerData: footerType[] = [
  {
    title: 'Quick links',
    links: ['Daily rental', 'Long-term rental', 'Buy property', 'Sell property', 'Popular offers'],
  },
  {
    title: 'Profile',
    links: ['My account', 'My listings', 'Add listings', 'Help center', 'Privacy policy'],
  },
];

export const citiesData: string[] = [
  'New York',
  'Chicago',
  'Indianapolis',
  'Boston',
  'Altanta',
  'Chincinnati',
  'Los Angeles',
  'Dallas',
  'Pittsburg',
  'Tampa',
];

export type footer2Type = {
  title: string;
  columns: string[][];
};

export const footerData2: footer2Type = {
  title: 'Popular categories',
  columns: [
    ['Air conditioning', 'Painting', 'Electrician', 'Concrete', 'Plumbing', 'Roofing'],
    ['Cleaning', 'Heating & furnace', 'Carpentry', 'Flooring', 'Pest control', 'Landscaping'],
  ],
};

export const companyData: footerType = {
  title: 'Company',
  links: [
    'About',
    'Press & announcements',
    'Careers at Finder',
    'Contact us',
    'Terms of use',
    'Privacy',
  ],
};

export type paymentMethodType = {
  src: string;
  alt: string;
};

export const paymentMethodsData: paymentMethodType[] = [
  {
    src: 'assets/img/payment-methods/visa-dark-mode.svg',
    alt: 'Visa',
  },
  {
    src: 'assets/img/payment-methods/mastercard.svg',
    alt: 'Mastercard',
  },
  {
    src: 'assets/img/payment-methods/paypal-dark-mode.svg',
    alt: 'PayPal',
  },
  {
    src: 'assets/img/payment-methods/google-pay-dark-mode.svg',
    alt: 'Google Pay',
  },
  {
    src: 'assets/img/payment-methods/apple-pay-dark-mode.svg',
    alt: 'Apple Pay',
  },
];

export const footerData3: footerType[] = [
  {
    title: 'For patients',
    links: ['Family medicine', 'Pediatrics', 'Top hospitals', 'Telehealth', 'Dentistry'],
  },
  {
    title: 'For providers',
    links: [
      'Provider log in',
      'Promote your practice',
      'Claim your free profile',
      'News and features',
      'Help center',
    ],
  },
  {
    title: 'Our company',
    links: ['Contact us', 'About us', 'Healthgrades methodologies', 'Privacy preferences'],
  },
];

export const footerData4: footerType[] = [
  {
    title: 'Events',
    links: ['Popular near you', 'Online events', 'Sport', 'Cinema', 'Theater'],
  },
  {
    title: 'For providers',
    links: [
      'Provider log in',
      'For partners',
      'Event ticket service',
      'News and features',
      'Help center',
    ],
  },
  {
    title: 'Our company',
    links: ['About us', 'Ticket delivery', 'Payment'],
  },
];

export const footerData5: footerType[] = [
  {
    title: 'Quick links',
    links: [
      'Top cities',
      'Accommodation',
      'Cafes & restaurants',
      'Night clubs',
      'Events & meetups',
      'Beauty salons',
      'Pharmacies',
    ],
  },
  {
    title: 'Profile',
    links: [
      'My account',
      'My listings',
      'Gift cards',
      'Help center',
      'Taxes & fees',
      'Privacy policy',
    ],
  },
];
