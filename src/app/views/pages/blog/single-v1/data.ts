const property1 = 'assets/img/listings/real-estate/01.jpg';
const property4 = 'assets/img/listings/real-estate/04.jpg';
const property6 = 'assets/img/listings/real-estate/06.jpg';

const blogImg1 = 'assets/img/blog/v1/01.jpg';
const blogImg2 = 'assets/img/blog/v1/02.jpg';
const blogImg3 = 'assets/img/blog/v1/03.jpg';
const blogImg4 = 'assets/img/blog/v1/07.jpg';
const blogImg5 = 'assets/img/blog/v1/08.jpg';

export type BenefitType = {
  title: string;
  description: string;
};

export const benefitsData: BenefitType[] = [
  {
    title: 'Captivating perspectives',
    description:
      'Drones provide a unique vantage point, capturing stunning aerial views of the property and its surroundings. This allows potential buyers to visualize the layout, landscaping, and neighborhood in a way that traditional ground-level photos cannot convey.',
  },
  {
    title: 'Highlighting property features',
    description:
      "Drones excel at showcasing expansive properties, emphasizing key features like pools, gardens, and outdoor amenities. Aerial shots provide a comprehensive view, helping buyers understand the property's layout and potential.",
  },
  {
    title: 'Showcasing surrounding area',
    description:
      "Drone photography extends beyond the property boundaries, offering a glimpse of the surrounding neighborhood, parks, or proximity to landmarks. This broader perspective can influence a buyer's decision by presenting the property in its larger context.",
  },
  {
    title: 'Creating a cinematic experience',
    description:
      'Drones can capture dynamic, sweeping shots that add a cinematic quality to property videos. This immersive experience can evoke emotion and create a lasting impression, setting your listing apart from others.',
  },
  {
    title: 'Emphasizing property size and scale',
    description:
      "Drones excel at illustrating the size and scale of a property, particularly for larger estates or expansive landscapes. This helps potential buyers gauge the property's proportions and get a comprehensive understanding of its size.",
  },
  {
    title: 'Engaging online presence',
    description:
      "In an era where online browsing plays a crucial role in the home-buying process, drone photography enhances your listing's online presence. Eye-catching visuals grab attention, encouraging potential buyers to explore the property further.",
  },
  {
    title: 'Demonstrating property connectivity',
    description:
      "Drones can showcase a property's proximity to amenities, schools, and transportation hubs. This connectivity is valuable information for buyers looking for a convenient and well-connected living environment.",
  },
  {
    title: 'Competitive edge in marketing',
    description:
      'As drone technology becomes more accessible, incorporating it into your real estate marketing strategy can give you a competitive edge. Properties with high-quality aerial imagery are more likely to attract attention and stand out in a crowded market.',
  },
];

export const blogCategoriesData: string[] = ['Real estate', 'Drones', 'Selling property'];

export type CommentType = {
  name: string;
  date: string;
  comment: string;
  likes: number;
  dislikes: number;
};

export const commentsData: CommentType[] = [
  {
    name: 'Bessie Cooper',
    date: 'July 07, 2024',
    comment:
      "Absolutely love the idea of using drone photography in real estate listings! The captivating perspectives and aerial views truly offer a fresh and unique way to showcase a property. It's a game-changer for sure.",
    likes: 6,
    dislikes: 1,
  },
  {
    name: 'Andrew Richards',
    date: 'June 19, 2024',
    comment:
      "In today's digital age, an engaging online presence is crucial for any successful real estate listing. Drones not only grab attention but also keep potential buyers immersed in the property, increasing the chances of a memorable viewing experience.",
    likes: 8,
    dislikes: 2,
  },
  {
    name: 'Ralph Edwards',
    date: 'May 26, 2024',
    comment:
      "This is a fantastic read! Drone photography truly revolutionizes the way we present real estate listings. The aerial perspectives and high-quality images not only highlight the property's features but also give potential buyers a better sense of the surrounding area. It's amazing how a simple change in the way we capture photos can significantly enhance a listing's appeal and attract more interested buyers. Definitely considering this for my next property listing. Thanks for sharing!",
    likes: 13,
    dislikes: 0,
  },
  {
    name: 'Kathryn Murphy',
    date: 'April 13, 2024',
    comment:
      "As someone always looking for the next big thing in real estate marketing, drone photography has my full attention. It's not just about standing out; it's about telling a story, and drones allow you to narrate the unique story of each property in a visually stunning way.",
    likes: 24,
    dislikes: 5,
  },
];

export const relatedPostsData: string[] = [
  'Top tips for first-time home buyers',
  "Maximizing your home's value with effective selling strategies",
  '2024 real estate market trends every buyer and seller should know',
  'Home improvement projects that increase property value',
];

export type NotificationType = {
  id: string;
  label: string;
};

export const notificationsData: NotificationType[] = [
  {
    id: 'daily',
    label: 'Daily summary (weekdays)',
  },
  {
    id: 'weekly',
    label: 'Weekly summary (Mondays)',
  },
  {
    id: 'alerts',
    label: 'Breaking news alerts (as needed)',
  },
];

export type PropertyType = {
  images: string[];
  price: string;
  address: string;
  area: string;
  beds: number;
  baths: number;
  parking: number;
  type?: string;
  verified?: boolean;
  isNew?: boolean;
  favorite?: boolean;
};

export const propertyData: PropertyType[] = [
  {
    images: [property6, property6, property6],
    price: '$375,000',
    address: '929 Hart St, Brooklyn, NY 11237',
    area: '108 sq.m',
    beds: 3,
    baths: 2,
    parking: 1,
    type: 'For sale',
    isNew: true,
    favorite: true,
  },
  {
    images: [property1, property1, property1],
    price: '$1,620',
    address: '40 S 9th St, Brooklyn, NY 11249',
    area: '65 sq.m',
    beds: 2,
    baths: 1,
    parking: 1,
    verified: true,
    isNew: true,
  },
  {
    images: [property4, property4, property4],
    price: '$1,170',
    address: '67-04 Myrtle Ave Glendale, NY 11385',
    area: '42 sq.m',
    beds: 1,
    baths: 1,
    parking: 0,
  },
];

export type BlogPostType = {
  image: string;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  blogLink: string;
};

export const blogpostData: BlogPostType[] = [
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
    category: 'Home improvement',
    title: 'When is the right time to downsize home?',
    description:
      'Deciding when to downsize your home is a personal choice that depends on various factors. Here are some common...',
    author: 'Darrell Steward',
    date: 'March 29, 2024',
    blogLink: '/blog-single/v1',
  },
  {
    image: blogImg5,
    category: 'Interior design',
    title: '7 tips for achieving maximum coziness',
    description:
      'Creating a cozy atmosphere in your home is a delightful way to enhance comfort and relaxation. Here are seven tips to...',
    author: 'Bessie Cooper',
    date: 'March 10, 2024',
    blogLink: '/blog-single/v1',
  },
];
