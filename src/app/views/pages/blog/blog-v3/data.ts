const th01 = 'assets/img/blog/v3/th01.jpg';
const th02 = 'assets/img/blog/v3/th02.jpg';
const th03 = 'assets/img/blog/v3/th03.jpg';
const th04 = 'assets/img/blog/v3/th04.jpg';
const th05 = 'assets/img/blog/v3/th05.jpg';
const th06 = 'assets/img/blog/v3/th06.jpg';
const th07 = 'assets/img/blog/v3/th07.jpg';
const th08 = 'assets/img/blog/v3/th08.jpg';
const th09 = 'assets/img/blog/v3/th09.jpg';

const blogImg1 = 'assets/img/blog/v3/01.jpg';
const blogImg2 = 'assets/img/blog/v3/02.jpg';
const blogImg3 = 'assets/img/blog/v3/03.jpg';
const blogImg4 = 'assets/img/blog/v3/04.jpg';
const blogImg5 = 'assets/img/blog/v3/05.jpg';
const blogImg6 = 'assets/img/blog/v3/06.jpg';
const blogImg7 = 'assets/img/blog/v3/07.jpg';
const blogImg8 = 'assets/img/blog/v3/08.jpg';
const blogImg9 = 'assets/img/blog/v3/09.jpg';
const blogImg10 = 'assets/img/blog/v3/10.jpg';
const blogImg11 = 'assets/img/blog/v3/11.jpg';
const blogImg12 = 'assets/img/blog/v3/12.jpg';

export type BlogSectionType = {
  heading: string;
  blogs: { title: string; date: string; image: string }[];
};

export const blogSectionsData: BlogSectionType[] = [
  {
    heading: 'Most read',
    blogs: [
      {
        title: 'Serving up storage in kitchen renovations',
        date: 'September 28, 2024',
        image: th01,
      },
      {
        title: '5 Reasons to install a backyard storage shed',
        date: 'August 17, 2024',
        image: th02,
      },
      {
        title: 'How to make your kitchen ready for hosting',
        date: 'July 23, 2024',
        image: th03,
      },
    ],
  },
  {
    heading: 'Recommended',
    blogs: [
      {
        title: 'Unlocking your dream bathroom',
        date: 'October 30, 2024',
        image: th04,
      },
      {
        title: 'Winter home renovation projects on a budget',
        date: 'September 15, 2024',
        image: th05,
      },
      {
        title: 'Gardening tips for spring 2024',
        date: 'August 09, 2024',
        image: th06,
      },
    ],
  },
  {
    heading: 'Recommended',
    blogs: [
      {
        title: '3 Reasons to update your flooring this winter',
        date: 'August 26, 2024',
        image: th07,
      },
      {
        title: 'Boosting home safety: the latest in smart security',
        date: 'July 19, 2024',
        image: th08,
      },
      {
        title: '20 professional tips for fencing installers',
        date: 'June 12, 2024',
        image: th09,
      },
    ],
  },
];

export type BlogType = {
  image: string;
  title: string;
}

export const blogsData: BlogType[] = [
    {
      image: blogImg1,
      title: '5 Ways to incorporate a stainless bench in your interior decor'
    },
    {
      image: blogImg2,
      title: 'Choosing the right asbestos removal company'
    },
    {
      image: blogImg3,
      title: 'Best features to ask your luxury home builder about'
    },
    {
      image: blogImg4,
      title: 'Proactive roof care: 4 steps to ensure long-term durability'
    },
    {
      image: blogImg5,
      title: 'Benefits of having a wine cellar at home'
    },
    {
      image: blogImg6,
      title: 'Developing your roof maintenance checklist'
    },
    {
      image: blogImg7,
      title: 'Extend the lifespan of your heater with proper maintenance'
    },
    {
      image: blogImg8,
      title: 'Why you should hire professionals to clean your gutters'
    },
    {
      image: blogImg9,
      title: '20 professional tips for fencing installers'
    },
    {
      image: blogImg10,
      title: 'Boosting home safety: the latest in smart security'
    },
    {
      image: blogImg11,
      title: 'How to choose the best company for installing your HVAC'
    },
    {
      image: blogImg12,
      title: 'Unlocking your dream bathroom'
    }
  ];
