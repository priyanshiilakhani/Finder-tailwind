const galleryImg1 = 'assets/img/blog/v2/single/gallery/th01.jpg';
const galleryImg2 = 'assets/img/blog/v2/single/gallery/th02.jpg';
const galleryImg3 = 'assets/img/blog/v2/single/gallery/th03.jpg';

const blogImg1 = 'assets/img/blog/v2/01.jpg';
const blogImg5 = 'assets/img/blog/v2/05.jpg';
const blogImg6 = 'assets/img/blog/v2/06.jpg';

export type GalleryType = {
  image: string;
  isLarge?: boolean;
}

export const galleryData: GalleryType[] = [
  { image: galleryImg1, isLarge: true },
  { image: galleryImg2 },
  { image: galleryImg3 }
];

export type BlogPostType = {
  image: string;
  category: string;
  date: string;
  title: string;
  link: string;
}

export const blogPostsData: BlogPostType[] = [
    {
      image: blogImg1,
      category: 'Car reviews',
      date: 'September 10, 2024',
      title: 'Exploring the Audi Q7: Luxury, performance, and innovation',
      link: '/blog-details'
    },
    {
      image: blogImg6,
      category: 'Buying guides',
      date: 'June 08, 2024',
      title: 'Which is the best small SUV for me?',
      link: '/blog-details'
    },
    {
      image: blogImg5,
      category: 'Image Industry news',
      date: 'June 06, 2024',
      title: '2025 Subaru Outback leads the latest new car news',
      link: '/blog-details'
    }
  ];
