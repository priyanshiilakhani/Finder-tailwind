const blogImg1 = 'assets/img/blog/v2/01.jpg';
const blogImg2 = 'assets/img/blog/v2/02.jpg';
const blogImg3 = 'assets/img/blog/v2/03.jpg';
const blogImg4 = 'assets/img/blog/v2/04.jpg';
const blogImg5 = 'assets/img/blog/v2/05.jpg';
const blogImg6 = 'assets/img/blog/v2/06.jpg';

const blogVlogImg1 = 'assets/img/blog/v2/vlog/01.jpg';
const blogVlogImg2 = 'assets/img/blog/v2/vlog/02.jpg';
const blogVlogImg3 = 'assets/img/blog/v2/vlog/03.jpg';

export type BlogListType = {
  category: string;
  date: string;
  title: string;
  blogLink: string;
};

export const blogListData: BlogListType[] = [
  {
    category: 'Industry news',
    date: 'November 15, 2024',
    title: 'New emission regulations: What they mean for car manufacturers',
    blogLink: '/blog-single/v2',
  },
  {
    category: 'Car reviews',
    date: 'November 08, 2024',
    title: '2024 Honda CR-V: A comprehensive review',
    blogLink: '/blog-single/v2',
  },
  {
    category: 'Industry news',
    date: 'October 30, 2024',
    title: 'Automotive industry faces supply chain challenges in 2024',
    blogLink: '/blog-single/v2',
  },
  {
    category: 'Buying guides',
    date: 'October 19, 2024',
    title: 'Top tips for buying a used car in 2024',
    blogLink: '/blog-single/v2',
  },
];

export type BlogType = {
  image: string;
  category: string;
  date: string;
  title: string;
  link: string;
};

export const blogData: BlogType[] = [
  {
    image: blogImg1,
    category: 'Car reviews',
    date: 'September 10, 2024',
    title: 'Exploring the Audi Q7: Luxury, performance, and innovation',
    link: '/blog-single/v2',
  },
  {
    image: blogImg2,
    category: 'Electric vehicles',
    date: 'August 30, 2024',
    title: 'Electric Lotus sports car reportedly debuting in 2025',
    link: '/blog-single/v2',
  },
  {
    image: blogImg3,
    category: 'Electric vehicles',
    date: 'July 25, 2024',
    title: 'Tesla fixes common recall with over-the-air update',
    link: '/blog-single/v2',
  },
  {
    image: blogImg4,
    category: 'Car reviews',
    date: 'July 13, 2024',
    title: 'SpeedKore built a carbon-bodied, Hellcat-powered 1970 Charger',
    link: '/blog-single/v2',
  },
  {
    image: blogImg5,
    category: 'Industry news',
    date: 'June 17, 2024',
    title: '2025 Subaru Outback leads the latest new car news',
    link: '/blog-single/v2',
  },
  {
    image: blogImg6,
    category: 'Buying guides',
    date: 'June 08, 2024',
    title: 'Which is the best small SUV for me?',
    link: '/blog-single/v2',
  },
];

export type CarCategoryData = {
  title: string;
  active?: boolean;
};

export const carCategoriesData: CarCategoryData[] = [
  {
    title: 'Small SUVs',
    active: true,
  },
  {
    title: 'Electric cars',
  },
  {
    title: 'Small hatchbacks',
  },
  {
    title: 'Luxury sports cars',
  },
];

export const carListData: string[] = [
  'Honda CR-V',
  'Toyota RAV4',
  'Mazda CX-50',
  'Subaru Forester',
  'Kia Sportage',
];

export type BlogVlogType = {
  image: string;
  title: string;
  likePercentage: string;
  duration: string;
  link: string;
}

export const blogVlogData: BlogVlogType[] = [
  {
    image: blogVlogImg1,
    title: 'Electric Mercedes sedan car reportedly debuting in 2025',
    likePercentage: '100%',
    duration: '36:12',
    link: '/blog-single/v2',
  },
  {
    image: blogVlogImg2,
    title: 'Budget vs Premium tyres: which are better value this year?',
    likePercentage: '99%',
    duration: '24:30',
    link: '/blog-single/v2',
  },
  {
    image: blogVlogImg3,
    title: 'Tesla fixes common recall with over-the-air update',
    likePercentage: '100%',
    duration: '17:25',
    link: '/blog-single/v2',
  },
];