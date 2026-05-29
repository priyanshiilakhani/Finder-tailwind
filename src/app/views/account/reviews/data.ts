const reviewAvatar01 = 'assets/img/account/reviews/ava01.jpg';
const reviewAvatar02 = 'assets/img/account/reviews/ava02.jpg';
const reviewAvatar03 = 'assets/img/account/reviews/ava03.jpg';
const reviewAvatar04 = 'assets/img/account/reviews/ava04.jpg';

const ownerAvatar = 'assets/img/account/avatar-sm.jpg';

const reviewImage01 = 'assets/img/account/reviews/01.jpg';
const reviewImage02 = 'assets/img/account/reviews/02.jpg';
const reviewImage03 = 'assets/img/account/reviews/03.jpg';
const reviewImage04 = 'assets/img/account/reviews/04.jpg';
const reviewImage05 = 'assets/img/account/reviews/05.jpg';

export type ReviewReplyType = {
  ownerName: string;
  ownerRole: string;
  ownerImage: string;
  message: string;
};

export type ReviewGalleryImageType = {
  image: string;
};

export type ReviewAboutType = {
  reviewerName: string;
  reviewerImage: string;
  reviewDate: string;
  rating: number;
  reviewLocation: string;
  reviewDescription: string;
  galleryImages?: ReviewGalleryImageType[];
  reviewReply?: ReviewReplyType;
};

export const reviewaboutData: ReviewAboutType[] = [
  {
    reviewerName: 'Randy Walker',
    reviewerImage: reviewAvatar01,
    reviewDate: 'Nov 12, 2024',
    rating: 5,
    reviewLocation: '67-04 Myrtle Ave Glendale, NY 11385',
    reviewDescription:
      'Excellent apartment in the very center of the city, attractions and entertainment venues are located 50m from the flat. The flat was perfectly clean and had basic slippers, gel-shampoo, clean towels.',
    reviewReply: {
      ownerName: 'Michael Williams',
      ownerRole: 'Michael Williams',
      ownerImage: ownerAvatar,
      message: "Thank you for your feedback. I'm glad you were satisfied :)",
    },
  },
  {
    reviewerName: 'Kathryn Murphy',
    reviewerImage: reviewAvatar02,
    reviewDate: 'Sep 17, 2024',
    rating: 5,
    reviewLocation: '517 82nd St, Brooklyn, NY 11209',
    reviewDescription:
      'I recently rented an apartment, and it has been a fantastic experience. The apartment itself is beautiful, with modern finishes and plenty of natural light. The property management team is very attentive and responds quickly to any maintenance requests. The common areas, including the pool and gym, are always clean and well-maintained.',
    galleryImages: [
      {
        image: reviewImage01,
      },
      {
        image: reviewImage02,
      },
      {
        image: reviewImage03,
      },
    ],
  },
  {
    reviewerName: 'Darrell Steward',
    reviewerImage: reviewAvatar03,
    reviewDate: 'Aug 9, 2024',
    rating: 5,
    reviewLocation: '929 Hart St, Brooklyn, NY 11237',
    reviewDescription:
      'I had a great experience with Michael Williams when selling my home. The team was professional, reliable, and extremely knowledgeable about the market. They provided excellent marketing for my property, which attracted a lot of interest and ultimately led to a quick sale above the asking price. I highly recommend their services to anyone looking to sell their home.',
  },
  {
    reviewerName: 'Ralph Edwards',
    reviewerImage: reviewAvatar04,
    reviewDate: 'Jul 4, 2024',
    rating: 4,
    reviewLocation: '1234 Maple Street, Brooklyn, NY 11201',
    reviewDescription:
      "I recently rented an apartment and had a positive experience overall. The location is convenient, and the building amenities are great. The apartment itself is spacious and well-maintained. However, there were a few minor issues with the plumbing that took a little longer to fix than expected. Despite that, I'm happy with my decision and would recommend it to others.",
  },
];

export type ReviewByYouType = {
  image: string;
  status: string;
  rating: number;
  reviewAddress: string;
  reviewDate: string;
  reviewDescription: string;
  likes: number;
  dislikes: number;
};

export const reviewbyyouData: ReviewByYouType[] = [
    {
        image: reviewImage01,
        status: 'Published',
        rating: 5,
        reviewAddress: '67-04 Myrtle Ave Glendale, NY 11385',
        reviewDate: 'Jan 17, 2024',
        reviewDescription: 'Excellent apartment in the very center of the city, attractions and entertainment venues are located 50m from the flat. The flat was perfectly clean and had basic slippers, gel-shampoo, clean towels.',
        likes: 6,
        dislikes: 0,
    },
    {
        image: reviewImage02,
        status: 'Published',
        rating: 5,
        reviewAddress: '517 82nd St, Brooklyn, NY 11209',
        reviewDate: 'Dec 5, 2024',
        reviewDescription: 'I recently rented an apartment, and it has been a fantastic experience. The apartment itself is beautiful, with modern finishes and plenty of natural light. The property management team is very attentive and responds quickly to any maintenance requests. The common areas, including the pool and gym, are always clean and well-maintained.',
        likes: 13,
        dislikes: 2,
    },
    {
        image: reviewImage04,
        status: 'Archived',
        rating: 2,
        reviewAddress: '929 Hart St, Brooklyn, NY 11237',
        reviewDate: 'May 8, 2023',
        reviewDescription: 'The property was not as advertised; several features that were supposed to be included, such as a fitness center and updated appliances, were either non-existent or in poor condition. Maintenance requests are rarely addressed in a timely manner, with some issues lingering for months without resolution. The overall upkeep of the building is lacking, with common areas often dirty and neglected.',
        likes: 4,
        dislikes: 1,
    },
    {
        image: reviewImage05,
        status: 'Archived',
        rating: 4,
        reviewAddress: '1234 Maple Street, Brooklyn, NY 11201',
        reviewDate: 'Oct 3, 2022',
        reviewDescription: 'I recently rented an apartment and had a positive experience overall. The location is convenient, and the building amenities are great. The apartment itself is spacious and well-maintained. However, there were a few minor issues with the plumbing that took a little longer to fix than expected. Despite that, I\'m happy with my decision and would recommend it to others.',
        likes: 19,
        dislikes: 5,
    },
];