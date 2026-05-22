const contractorsLight = 'assets/img/intro/demos/contractors-light.jpg';
const contractorsDark = 'assets/img/intro/demos/contractors-dark.jpg';
const realEstateLight = 'assets/img/intro/demos/real-estate-light.jpg';
const realEstateDark = 'assets/img/intro/demos/real-estate-dark.jpg';
const doctorsLight = 'assets/img/intro/demos/doctors-light.jpg';
const doctorsDark = 'assets/img/intro/demos/doctors-dark.jpg';
const eventsLight = 'assets/img/intro/demos/events-light.jpg';
const eventsDark = 'assets/img/intro/demos/events-dark.jpg';
const carsLight = 'assets/img/intro/demos/cars-light.jpg';
const carsDark = 'assets/img/intro/demos/cars-dark.jpg';
const cityGuideLight = 'assets/img/intro/demos/city-guide-light.jpg';
const cityGuideDark = 'assets/img/intro/demos/city-guide-dark.jpg';

const tailwindImg = 'assets/img/intro/features/tailwind.svg';
const sassImg = 'assets/img/intro/features/sass.png';
const npmImg = 'assets/img/intro/features/npm.png';
const jsImg = 'assets/img/intro/features/js.png';
const html5Img = 'assets/img/intro/features/html5.png';
const touchImg = 'assets/img/intro/features/touch.png';
const googleFontsImg = 'assets/img/intro/features/google-fonts.png';
const vectorImg = 'assets/img/intro/features/vector.png';

export type HomeDemoType = {
  title: string;
  link: string;
  lightImage: string;
  darkImage: string;
}

export const homeDemoData: HomeDemoType[] = [
  {
    title: 'Contractors',
    link: '/home/contractors',
    lightImage: contractorsLight,
    darkImage: contractorsDark,
  },
  {
    title: 'Real Estate',
    link: '/home/real-estate',
    lightImage: realEstateLight,
    darkImage: realEstateDark,
  },
  {
    title: 'Doctors',
    link: '/home/doctors',
    lightImage: doctorsLight,
    darkImage: doctorsDark,
  },
  {
    title: 'Events',
    link: '/home/events',
    lightImage: eventsLight,
    darkImage: eventsDark,
  },
  {
    title: 'Cars',
    link: '/home/cars',
    lightImage: carsLight,
    darkImage: carsDark,
  },
  {
    title: 'City Guide',
    link: '/home/city-guide',
    lightImage: cityGuideLight,
    darkImage: cityGuideDark,
  },
];

export type FeatureType = {
  title: string;
  icon: string;
}

export const featureData: FeatureType[] = [
  {
    title: 'Multiple Listings Layout Options',
    icon: 'lucide:check',
  },
  {
    title: 'Multiple Listing Detail Page Variations',
    icon: 'lucide:check',
  },
  {
    title: 'Complete User Workflow for: Add Property, Add Contractor and Add (Sell) Car',
    icon: 'lucide:check',
  },
  {
    title: 'User and Vendor Account Pages',
    icon: 'lucide:check',
  },
  {
    title: 'Real Estate, Cars, Contractors, Doctors, Events and City Guide Demos',
    icon: 'lucide:check',
  },
  {
    title: 'Blog Pages: Blog Layouts + Single Articles',
    icon: 'lucide:check',
  },
  {
    title: 'Help Center / Support Pages',
    icon: 'lucide:check',
  },
  {
    title: 'Secondary Pages: About, Contacts, 404, etc.',
    icon: 'lucide:check',
  },
  {
    title: '60+ Flexible Components (UI Kit)',
    icon: 'lucide:check',
  },
];

export type FeatureGridType = {
  image: string;
  title: string;
  description: string;
  imageClass: string;
}

export const featureGridData: FeatureGridType[] = [
  {
    image: tailwindImg,
    title: 'Built with latest Tailwind',
    description:
      "Finder is the powerful e-commerce front-end solution based on Tailwind - the world's most popular responsive, mobile-first front-end component library.",
    imageClass: 'mb-4 mx-auto h-12 w-14',
  },
  {
    image: sassImg,
    title: 'Easy to Customize with Sass',
    description:
      'Finder is built using Sass, allowing for effortless customization of colors, typography, and beyond. It is the most mature, stable, and powerful CSS extension language in the world.',
    imageClass: 'mb-4 mx-auto size-12',
  },
  {
    image: npmImg,
    title: 'Kick-start Your Development',
    description:
      'Start your development process fast and easy with included Npm scripts setup, full tasks automation and local server hot reload. The configuration files are included in the download package.',
    imageClass: 'mb-4 mx-auto h-12 w-14',
  },
  {
    image: jsImg,
    title: 'Future-proof JavaScript',
    description:
      "Finder's core scripts, along with all dependencies, are meticulously crafted in vanilla JS (ES6 modules), ensuring optimal performance and compatibility across various platforms.",
    imageClass: 'mb-4 mx-auto size-12',
  },
  {
    image: html5Img,
    title: 'W3C Valid HTML Code',
    description:
      'As you likely know, ensuring 100% valid code through W3C validation for all HTML files is crucial. Invalid HTML imposes restrictions on innovation, yet Finder remains innovative at its core.',
    imageClass: 'mb-4 mx-auto size-12',
  },
  {
    image: touchImg,
    title: 'Touch-enabled Sliders',
    description:
      'In the era of touch screens it is constant = ensure great user experience on handheld devices, especially when it comes to such frequently used interface component as slider.',
    imageClass: 'mb-4 mx-auto size-12',
  },
  {
    image: googleFontsImg,
    title: 'Google Fonts',
    description:
      'Finder uses preloaded variable Google font (Inter) which is free, fast to load and of very high quality. Currently Google fonts library includes 1600+ font families to choose from.',
    imageClass: 'mb-4 mx-auto size-12',
  },
  {
    image: vectorImg,
    title: 'Vector Based HD-ready Icons',
    description:
      'Finder is equiped with font-based icon pack and svg icons to ensure that infographics and interface icons look sharp on any device with any screen resolution and pixel density.',
    imageClass: 'mb-4 mx-auto size-12',
  },
];