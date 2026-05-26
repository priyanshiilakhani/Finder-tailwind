const img01 = 'assets/img/listings/real-estate/01.jpg';
const img02 = 'assets/img/listings/real-estate/02.jpg';
const img03 = 'assets/img/listings/real-estate/03.jpg';
const img04 = 'assets/img/listings/real-estate/04.jpg';
const img05 = 'assets/img/listings/real-estate/05.jpg';
const img06 = 'assets/img/listings/real-estate/06.jpg';
const img07 = 'assets/img/listings/real-estate/07.jpg';
const img09 = 'assets/img/listings/real-estate/09.jpg';

const ava01 = 'assets/img/account/reviews/ava01.jpg';
const ava02 = 'assets/img/account/reviews/ava02.jpg';
const ava03 = 'assets/img/account/reviews/ava03.jpg';
const ava04 = 'assets/img/account/reviews/ava04.jpg';

const review01 = 'assets/img/account/reviews/01.jpg';
const review02 = 'assets/img/account/reviews/02.jpg';
const review03 = 'assets/img/account/reviews/03.jpg';

export type RealEstateType = {
  price: string;
  address: string;
  size: string;
  beds: number;
  baths: number;
  cars: number;
  status?: string;
  featured?: boolean;
  verified?: boolean;
  cardClass?: string;
  images: string[];
}

export const realEstateData: RealEstateType[] = [
  {
    price: '$2,750',
    address: '929 Hart St, Brooklyn, NY 11237',
    size: '108 sq.m',
    beds: 3,
    baths: 2,
    cars: 1,
    status: 'New',
    images: [img06, img06, img06],
  },
  {
    price: '$1,890',
    address: '3811 Ditmars Blvd Astoria, NY 11105',
    size: '75 sq.m',
    beds: 2,
    baths: 1,
    cars: 1,
    status: 'New',
    featured: true,
    images: [img03, img03, img03],
  },
  {
    price: '$1,250',
    address: '444 Park Ave, Brooklyn, NY 11205',
    size: '54 sq.m',
    beds: 1,
    baths: 1,
    cars: 0,
    verified: true,
    images: [img05, img05, img05],
  },
  {
    price: '$1,620',
    address: '40 S 9th St, Brooklyn, NY 11249',
    size: '65 sq.m',
    beds: 2,
    baths: 1,
    cars: 1,
    images: [img01, img01, img01],
  },
  {
    price: '$1,170',
    address: '67-04 Myrtle Ave Glendale, NY 11385',
    size: '42 sq.m',
    beds: 1,
    baths: 1,
    cars: 0,
    cardClass: 'rounded-lg border-default-200 dark:border-white/20',
    images: [img04, img04, img04],
  },
  {
    price: '$1,320',
    address: '517 82nd St, Brooklyn, NY 11209',
    size: '45 sq.m',
    beds: 1,
    baths: 1,
    cars: 0,
    images: [img02, img02, img02],
  },
  {
    price: '$1,490',
    address: '123 Bedford Avenue, Brooklyn, NY 11211',
    size: '80 sq.m',
    beds: 2,
    baths: 1,
    cars: 1,
    cardClass: 'rounded-lg border-default-200 dark:border-white/20',
    images: [img07, img07, img07],
  },
  {
    price: '$3,860',
    address: '212 Harrison Street, Brooklyn, NY 11240',
    size: '130 sq.m',
    beds: 3,
    baths: 2,
    cars: 2,
    cardClass: 'rounded-lg border-default-200 dark:border-white/20',
    images: [img09, img09, img09],
  },
];

export type ReviewImage = {
  image: string;
};

export type ReviewItem = {
  userName: string;
  userAvatar: string;
  date: string;
  rating: number;
  reviewOn: string;
  description: string;
  likes: number;
  dislikes: number;
  images?: ReviewImage[];
}

export const reviewsData: ReviewItem[] = [
  {
    userName: 'Randy Walker',
    userAvatar: ava01,
    date: 'Nov 12, 2024',
    rating: 5,
    reviewOn: '67-04 Myrtle Ave Glendale, NY 11385',
    description:
      'Excellent apartment in the very center of the city, attractions and entertainment venues are located 50m from the flat. The flat was perfectly clean and had basic slippers, gel-shampoo, clean towels.',
    likes: 6,
    dislikes: 0,
  },
  {
    userName: 'Kathryn Murphy',
    userAvatar: ava02,
    date: 'Sep 17, 2024',
    rating: 4,
    reviewOn: '517 82nd St, Brooklyn, NY 11209',
    description:
      'I recently rented an apartment, and it has been a fantastic experience. The apartment itself is beautiful, with modern finishes and plenty of natural light. The property management team is very attentive and responds quickly to any maintenance requests. The common areas, including the pool and gym, are always clean and well-maintained.',
    likes: 13,
    dislikes: 2,
    images: [
      {
        image: review01,
      },
      {
        image: review02,
      },
      {
        image: review03,
      },
    ],
  },
  {
    userName: 'Darrell Steward',
    userAvatar: ava03,
    date: 'Aug 9, 2024',
    rating: 5,
    reviewOn: '929 Hart St, Brooklyn, NY 11237',
    description:
      'I had a great experience with Michael Williams when selling my home. The team was professional, reliable, and extremely knowledgeable about the market. They provided excellent marketing for my property, which attracted a lot of interest and ultimately led to a quick sale above the asking price. I highly recommend their services to anyone looking to sell their home.',
    likes: 4,
    dislikes: 1,
  },
  {
    userName: 'Ralph Edwards',
    userAvatar: ava04,
    date: 'Jul 4, 2024',
    rating: 4,
    reviewOn: '1234 Maple Street, Brooklyn, NY 11201',
    description:
      "I recently rented an apartment and had a positive experience overall. The location is convenient, and the building amenities are great. The apartment itself is spacious and well-maintained. However, there were a few minor issues with the plumbing that took a little longer to fix than expected. Despite that, I'm happy with my decision and would recommend it to others.",
    likes: 19,
    dislikes: 5,
  },
];