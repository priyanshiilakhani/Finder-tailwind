const featured01 = 'assets/img/blog/v4/featured01.jpg';
const featured02 = 'assets/img/blog/v4/featured02.jpg';

const author01 = 'assets/img/blog/v4/author/01.jpg';
const author02 = 'assets/img/blog/v4/author/02.jpg';

const blogImg1 = 'assets/img/blog/v4/01.jpg';
const blogImg2 = 'assets/img/blog/v4/02.jpg';
const blogImg3 = 'assets/img/blog/v4/03.jpg';
const blogImg4 = 'assets/img/blog/v4/04.jpg';
const blogImg5 = 'assets/img/blog/v4/05.jpg';
const blogImg6 = 'assets/img/blog/v4/06.jpg';
const blogImg7 = 'assets/img/blog/v4/07.jpg';
const blogImg8 = 'assets/img/blog/v4/08.jpg';

const authorImg1 = 'assets/img/blog/v4/author/01.jpg';
const authorImg2 = 'assets/img/blog/v4/author/02.jpg';
const authorImg3 = 'assets/img/blog/v4/author/03.jpg';
const authorImg4 = 'assets/img/blog/v4/author/04.jpg';
const authorImg5 = 'assets/img/blog/v4/author/05.jpg';
const authorImg6 = 'assets/img/blog/v4/author/06.jpg';
const authorImg7 = 'assets/img/blog/v4/author/07.jpg';
const authorImg8 = 'assets/img/blog/v4/author/08.jpg';

export type featuredBlogsType = {
  image: string;
  authorImage: string;
  authorName: string;
  date: string;
  title: string;
  category: string;
  slug: string;
};

export const featuredBlogsData: featuredBlogsType[] = [
  {
    image: featured01,
    authorImage: author01,
    authorName: 'Dr. Martha Simpson',
    date: 'May 13, 2024',
    title: 'Herbal medicines: advantages and disadvantages',
    category: 'Herbal medicine',
    slug: '/blog-single/v3',
  },
  {
    image: featured02,
    authorImage: author02,
    authorName: 'Dr. Guy Hawkins',
    date: 'April 25, 2024',
    title: 'Five healthcare consumerism trends to watch',
    category: 'Healthcare system',
    slug: '/blog-single/v3',
  },
];

export type categoryType = {
  title: string;
  active?: boolean;
};

export const categoryData: categoryType[] = [
  {
    title: 'Blog',
    active: true,
  },
  {
    title: 'News',
  },
  {
    title: 'Doctors',
  },
  {
    title: 'Patients',
  },
  {
    title: 'Healthy tips',
  },
  {
    title: 'What to do if...',
  },
];

export type BlogType = {
  author: string;
  authorImage: string;
  date: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
}

export const blogData: BlogType[] = [
  {
    author: 'Dr. Martha Simpson',
    authorImage: authorImg1,
    date: 'June 23, 2024',
    title: 'Best practices for using AI in digital pharma advertising',
    description:
      "Today's healthcare consumers have a strong preference for a patient-centric approach, prioritizing personalized experiences and convenience...",
    category: 'Healthcare trends',
    image: blogImg1,
    link: '/blog-single/v3',
  },
  {
    author: 'Dr. Bessie Cooper',
    authorImage: authorImg3,
    date: 'June 09, 2024',
    title: "How Healthgrades rates America's best hospitals",
    description:
      'Since its establishment in 1998, Healthgrades has been aiding consumers in assessing and contrasting hospital performance concerning care delivered during a hospital...',
    category: 'Hospital quality',
    image: blogImg2,
    link: '/blog-single/v3',
  },
  {
    author: 'Dr. Jerome Bell',
    authorImage: authorImg4,
    date: 'May 28, 2024',
    title: "Men's healthcare behaviors and attitudes",
    description:
      "Understanding men's healthcare behaviors and attitudes is crucial for improving their overall well-being. This blog post explores common trends, challenges...",
    category: 'Medical industry',
    image: blogImg3,
    link: '/blog-single/v3',
  },
  {
    author: 'Dr. Darlene Robertson',
    authorImage: authorImg5,
    date: 'May 16, 2024',
    title: 'Seven trends affecting pharma marketing',
    description:
      'The dynamics of how physicians engage with pharmaceutical brands are evolving—has your pharmaceutical marketing strategy adjusted accordingly?...',
    category: 'Healthcare trends',
    image: blogImg4,
    link: '/blog-single/v3',
  },
  {
    author: 'Dr. Guy Hawkins',
    authorImage: authorImg2,
    date: 'May 05, 2024',
    title: 'How health systems can thrive as retail clinics rise',
    description:
      "To appeal to these discerning consumers and stay ahead of the competition, it's crucial to understand and incorporate the following five healthcare consumerism trends...",
    category: 'Healthcare system',
    image: blogImg5,
    link: '/blog-single/v3',
  },
  {
    author: 'Dr. Jacob Jones',
    authorImage: authorImg6,
    date: 'May 05, 2024',
    title: 'Five healthcare consumerism trends to watch',
    description:
      "Today's healthcare consumers have a strong preference for a patient-centric approach, prioritizing personalized experiences and convenience...",
    category: 'Healthcare trends',
    image: blogImg6,
    link: '/blog-single/v3',
  },
  {
    author: 'Dr. Brooklyn Simmons',
    authorImage: authorImg7,
    date: 'April 12, 2024',
    title: '2024 Hospital quality awards calendar',
    description:
      'The current healthcare landscape emphasizes the need for fast, digital interactions and effective, affordable treatment options...',
    category: 'Healthcare quality',
    image: blogImg7,
    link: '/blog-single/v3',
  },
  {
    author: 'Dr. Arlene McCoy',
    authorImage: authorImg8,
    date: 'March 30, 2024',
    title: 'What physicians value most when making referrals',
    description:
      'Discover what physicians value most when making referrals. This blog post delves into the key factors influencing their decisions, including trust, patient...',
    category: 'Treatment options',
    image: blogImg8,
    link: '/blog-single/v3',
  },
];

export type TopicType = {
  title: string;
  count: number;
  isAllTopics?: boolean;
}

 export const topicsData: TopicType[] = [
    {
      title: 'All topics',
      count: 130,
      isAllTopics: true
    },
    {
      title: 'Healthcare system',
      count: 8,
    },
    {
      title: 'Hospital quality',
      count: 15,
    },
    {
      title: 'Wellness guides',
      count: 10,
    },
    {
      title: 'Medical industry',
      count: 9,
    },
    {
      title: 'Life science',
      count: 4,
    },
    {
      title: 'Herbal medicine',
      count: 12,
    },
    {
      title: 'Upcoming events',
      count: 3,
    },
    {
      title: 'Family medicine',
      count: 7,
    }
  ];

export const moreTopicsData: TopicType[] = [
    {
      title: 'Medical news',
      count: 18,
    },
    {
      title: 'Health tips',
      count: 11,
    },
    {
      title: 'Doctor advice',
      count: 25,
    },
    {
      title: 'Treatment options',
      count: 6,
    },
    {
      title: 'Healthcare trends',
      count: 2,
    }
  ];
