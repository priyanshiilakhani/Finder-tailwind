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
}

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