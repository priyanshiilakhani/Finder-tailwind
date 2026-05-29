const blogImg1 = 'assets/img/blog/v1/01.jpg';
const blogImg2 = 'assets/img/blog/v1/02.jpg';
const blogImg3 = 'assets/img/blog/v1/03.jpg';
const blogImg4 = 'assets/img/blog/v1/04.jpg';
const blogImg5 = 'assets/img/blog/v1/05.jpg';
const blogImg6 = 'assets/img/blog/v1/06.jpg';
const blogImg7 = 'assets/img/blog/v1/07.jpg';
const blogImg8 = 'assets/img/blog/v1/08.jpg';
const blogImg9 = 'assets/img/blog/v1/09.jpg';

export type CategoryType = {
  title: string;
  link?: string;
  active?: boolean;
  hideOn?: string;
  isButton?: boolean;
  icon?: string;
  modalTarget?: string;
};

export const categoryData: CategoryType[] = [
  {
    title: 'All',
    link: '/',
    active: true,
    hideOn: 'md:block hidden',
  },
  {
    title: 'Real estate news',
    link: '/',
    hideOn: 'md:block hidden',
  },
  {
    title: 'Buying tips',
    link: '/',
    hideOn: 'md:block hidden',
  },
  {
    title: 'Selling strategies',
    link: '/',
    hideOn: 'lg:block hidden',
  },
  {
    title: 'More categories',
    link: '/blog-layout/v1#categoriesModal',
    hideOn: 'md:block hidden',
    isButton: true,
    icon: 'lucide:plus',
    modalTarget: '#categoriesModal',
  },
  {
    title: 'Categories',
    hideOn: '',
    isButton: true,
    icon: 'lucide:list',
    modalTarget: '#categoriesModal',
  },
];

export type BlogType = {
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  blogLink: string;
};

export const blogsData: BlogType[] = [
  {
    image: blogImg1,
    category: 'Renting advice',
    title: 'What to know when renting an apartment',
    description:
      'It is quite difficult to find a good apartment for long-term rent in large cities. In addition, potential tenants can face prob...',
    author: 'Cody Fisher',
    date: 'July 09, 2024',
    blogLink: '/blog-single/v1',
  },
  {
    image: blogImg2,
    category: 'Investment advice',
    title: 'Types of luxury housing',
    description:
      'What luxury housing is clear to every person. Housing characterized by increased comfort, interior, quality and ma...',
    author: 'Kristin Watson',
    date: 'June 26, 2024',
    blogLink: '/blog-single/v1',
  },
  {
    image: blogImg3,
    category: 'Home improvement',
    title: 'How to modernize your home on a budget',
    description:
      "Modernizing your home doesn't have to break the bank. Here are some budget-friendly tips to give your living space a mo...",
    author: 'Darrell Steward',
    date: 'May 13, 2024',
    blogLink: '/blog-single/v1',
  },
  {
    image: blogImg4,
    category: 'Selling strategies',
    title: 'How real estate drone photography can elevate your listing?',
    description:
      'In the competitive world of real estate, first impressions matter, and drone photography has become a game-chang...',
    author: 'Jacob Jones',
    date: 'May 05, 2024',
    blogLink: '/blog-single/v1',
  },
  {
    image: blogImg5,
    category: 'Interior design',
    title: '10 delightful dining room decor trends for spring season',
    description:
      'As the seasons change, so do the trends in interior design, and the dining room is no exception. Spring brings with it a...',
    author: 'Cody Fisher',
    date: 'April 17, 2024',
    blogLink: '/blog-single/v1',
  },
  {
    image: blogImg6,
    category: 'Home improvement',
    title: '5 easy-to-ambitious projects to improve your home',
    description:
      'Embarking on home improvement projects not only enhances your living space but also provides a fulfilling sense of acc...',
    author: 'Kathryn Murphy',
    date: 'April 12, 2024',
    blogLink: '/blog-single/v1',
  },
  {
    image: blogImg7,
    category: 'Home improvement',
    title: 'When is the right time to downsize home?',
    description:
      'Deciding when to downsize your home is a personal choice that depends on various factors. Here are some common...',
    author: 'Darrell Steward',
    date: 'March 29, 2024',
    blogLink: '/blog-single/v1',
  },
  {
    image: blogImg8,
    category: 'Interior design',
    title: '7 tips for achieving maximum coziness',
    description:
      'Creating a cozy atmosphere in your home is a delightful way to enhance comfort and relaxation. Here are seven tips to...',
    author: 'Bessie Cooper',
    date: 'March 10, 2024',
    blogLink: '/blog-single/v1',
  },
  {
    image: blogImg9,
    category: 'Investment advice',
    title: 'Strategies for real estate investments',
    description:
      'Discover key strategies for successful real estate investments in this guide. From identifying profitable properties to und...',
    author: 'Andrew Richards',
    date: 'February 19, 2024',
    blogLink: '/blog-single/v1',
  },
];

export type CategoryTagType = {
  title: string;
  active?: boolean;
  hideOn?: string;
};

export const categoryTagsData: CategoryTagType[] = [
  {
    title: 'All',
    active: true,
    hideOn: 'md:hidden block',
  },
  {
    title: 'Real estate news',
    hideOn: 'md:hidden block',
  },
  {
    title: 'Buying tips',
    hideOn: 'md:hidden block',
  },
  {
    title: 'Selling strategies',
    hideOn: 'lg:hidden block',
  },
  {
    title: 'Home improvement',
  },
  {
    title: 'Interior design',
  },
  {
    title: 'Renting advice',
  },
  {
    title: 'Neighborhood guides',
  },
  {
    title: 'Property management',
  },
  {
    title: 'Legal and tax issues',
  },
  {
    title: 'Investment advice',
  },
  {
    title: 'Mortgage and financing',
  },
];
