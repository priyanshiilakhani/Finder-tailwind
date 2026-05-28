const placeImage1 = 'assets/img/home/city-guide/places/01.jpg';
const placeImage2 = 'assets/img/home/city-guide/places/02.jpg';
const placeImage3 = 'assets/img/home/city-guide/places/03.jpg';
const placeImage4 = 'assets/img/home/city-guide/places/04.jpg';

export type ReviewType = {
  reviewerName: string;
  reviewDate: string;
  rating: number;
  reviewMessage: string;
  likesCount: number;
  dislikesCount: number;
};

export const reviewData: ReviewType[] = [
  {
    reviewerName: 'Randy W.',
    reviewDate: 'November 19, 2024',
    rating: 5,
    reviewMessage:
      "From start to finish, his cooperation was incredibly smooth. The pricing was quite reasonable, and the task was completed efficiently and with a high level of cleanliness. I'm delighted that we chose Mike over the other companies we considered based on quotes.",
    likesCount: 6,
    dislikesCount: 0,
  },
  {
    reviewerName: 'Lora Palmer',
    reviewDate: 'November 10, 2024',
    rating: 5,
    reviewMessage: 'He was absolutely amazing very professional. I highly recommend hirings Mike.',
    likesCount: 13,
    dislikesCount: 2,
  },
  {
    reviewerName: 'Melissa Smith',
    reviewDate: 'November 5, 2024',
    rating: 5,
    reviewMessage:
      'Mike delivered exceptional work at an excellent price. I highly recommend him. They completed the job in just four days, and after a full year, there have been no issues.',
    likesCount: 8,
    dislikesCount: 0,
  },
  {
    reviewerName: 'Alice Cooper',
    reviewDate: 'October 23, 2024',
    rating: 5,
    reviewMessage:
      "Mike's service was exceptional, he is true professional. Discovered him on the website, took a chance, and without a doubt, he not only met but exceeded our expectations. I'm more than pleased to write a glowing review for Mike. As a highly satisfied customer, I can confidently say that he has definitely earned it.",
    likesCount: 27,
    dislikesCount: 3,
  },
  {
    reviewerName: 'Natalia D.',
    reviewDate: 'October 7, 2024',
    rating: 4,
    reviewMessage:
      "Mike exhibited great professionalism and politeness. I hired him to replace the door springs, which he did efficiently in a short amount of time. I would wholeheartedly recommend his services to anyone. I'm delighted that everything is now functioning like new again.",
    likesCount: 15,
    dislikesCount: 0,
  },
];

export type PlaceCardType = {
  image: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  distance: string;
  route: string;
};

export const placeCardData: PlaceCardType[] = [
  {
    image: placeImage1,
    title: 'Sagrada Familia',
    rating: 4.8,
    reviewCount: 12694,
    price: '$30',
    distance: '0.5 km from center',
    route: '/single-entry-city-guide',
  },
  {
    image: placeImage2,
    title: 'Park Güell',
    rating: 4.9,
    reviewCount: 113,
    price: '$15',
    distance: '0.7 km from center',
    route: '/single-entry-city-guide',
  },
  {
    image: placeImage3,
    title: 'Camp Nou Tour',
    rating: 4.7,
    reviewCount: 6149,
    price: '$40',
    distance: '5.2 km from center',
    route: '/single-entry-city-guide',
  },
  {
    image: placeImage4,
    title: 'Barcelona National Zoo',
    rating: 4.6,
    reviewCount: 7523,
    price: '$20',
    distance: '3.2 km from center',
    route: '/single-entry-city-guide',
  },
];
