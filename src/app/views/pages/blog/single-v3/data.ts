const author01 = 'assets/img/blog/v4/author/01.jpg';
const author02 = 'assets/img/blog/v4/author/02.jpg';
const author04 = 'assets/img/blog/v4/author/04.jpg';

const thumb01 = 'assets/img/blog/v4/single/th01.jpg';
const thumb02 = 'assets/img/blog/v4/single/th02.jpg';
const thumb03 = 'assets/img/blog/v4/single/th03.jpg';

const featured01 = 'assets/img/blog/v4/featured01.jpg';
const carousel02 = 'assets/img/blog/v4/single/carousel/02.jpg';
const carousel03 = 'assets/img/blog/v4/single/carousel/03.jpg';
const carousel04 = 'assets/img/blog/v4/single/carousel/04.jpg';

const author03 = 'assets/img/blog/v4/author/03.jpg';
const avatar01 = 'assets/img/blog/v4/single/carousel/01.jpg';

export type BlogPostType = {
  authorName: string;
  authorImage: string;
  title: string;
  thumbnail: string;
};

export const blogPostsData: BlogPostType[] = [
  {
    authorName: 'Dr. Jerome Bell',
    authorImage: author04,
    title: "Men's healthcare behaviors and attitudes",
    thumbnail: thumb01,
  },
  {
    authorName: 'Dr. Guy Hawkins',
    authorImage: author02,
    title: 'How health systems can thrive as retail clinics rise',
    thumbnail: thumb02,
  },
  {
    authorName: 'Dr. Martha Simpson',
    authorImage: author01,
    title: 'Herbal medicines: advantages and disadvantages',
    thumbnail: thumb03,
  },
];

export type SocialShareType = {
  icon: string;
  tooltip: string;
};

export const socialShareData: SocialShareType[] = [
  {
    icon: 'lucide:instagram',
    tooltip: 'Share on Instagram',
  },
  {
    icon: 'lucide:facebook',
    tooltip: 'Share on Facebook',
  },
  {
    icon: 'lucide:link',
    tooltip: 'Copy link',
  },
];

export type BlogCarouselType = {
  image: string;
  authorImage: string;
  authorName: string;
  date: string;
  title: string;
  category: string;
}

export const BlogCarouselData: BlogCarouselType[] = [
  {
    image: featured01,
    authorImage: avatar01,
    authorName: 'Dr. Martha Simpson',
    date: 'May 13, 2024',
    title: 'Herbal medicines: advantages and disadvantages',
    category: 'Herbal medicine',
  },
  {
    image: carousel02,
    authorImage: author04,
    authorName: 'Dr. Jerome Bell',
    date: 'May 28, 2024',
    title: "Men's healthcare behaviors and attitudes",
    category: 'Medical industry',
  },
  {
    image: carousel03,
    authorImage: author03,
    authorName: 'Dr. Bessie Cooper',
    date: 'June 09, 2024',
    title: "How Healthgrades rates America's best hospitals",
    category: 'Hospital quality',
  },
  {
    image: carousel04,
    authorImage: author01,
    authorName: 'Dr. Martha Simpson',
    date: 'June 23, 2024',
    title: 'Best practices for using AI in digital pharma advertising',
    category: 'Healthcare trends',
  },
];

