const img1 = 'assets/img/listings/contractors/single/01.jpg';
const img2 = 'assets/img/listings/contractors/single/02.jpg';
const img3 = 'assets/img/listings/contractors/single/03.jpg';
const img4 = 'assets/img/listings/contractors/single/04.jpg';
const img5 = 'assets/img/listings/contractors/single/05.jpg';

const projectImg1 = 'assets/img/listings/contractors/single/projects/01.jpg';
const projectImg2 = 'assets/img/listings/contractors/single/projects/02.jpg';
const projectImg3 = 'assets/img/listings/contractors/single/projects/03.jpg';
const projectImg4 = 'assets/img/listings/contractors/single/projects/04.jpg';

export const contractorGalleryData: string[] = [img1, img2, img3, img4, img5];

export type ServiceType = {
  icon: string;
  title: string;
};

export const servicesData: ServiceType[] = [
  {
    icon: 'box',
    title: '3D rendering',
  },
  {
    icon: 'bed-double',
    title: 'Bedroom design',
  },
  {
    icon: 'microwave',
    title: 'Kitchen design',
  },
  {
    icon: 'shower-head',
    title: 'Bathroom design',
  },
  {
    icon: 'rows-3',
    title: 'Closet design',
  },
  {
    icon: 'washing-machine',
    title: 'Laundry room design',
  },
  {
    icon: 'baby',
    title: 'Kids bedroom design',
  },
  {
    icon: 'lamp-ceiling',
    title: 'Interior design',
  },
  {
    icon: 'swatch-book',
    title: 'Color consulting',
  },
];

export type ContractorInfoType = {
  title: string;
  items: {
    label?: string;
    value: string;
    highlight?: boolean;
  }[];
};

export const contractorInfoData: ContractorInfoType[] = [
  {
    title: 'General info',
    items: [
      {
        label: 'Business name:',
        value: 'Mike Gardner',
        highlight: true,
      },
      {
        label: 'License:',
        value: '65IA02277532',
        highlight: true,
      },
      {
        label: 'Typical job cost:',
        value: '$500 - $2,000',
        highlight: true,
      },
    ],
  },
  {
    title: 'Contacts',
    items: [
      {
        value: 'New York',
      },
      {
        value: '(973) 742-9571',
      },
      {
        value: 'www.mikegardner.com',
      },
    ],
  },
  {
    title: 'Working hours',
    items: [
      {
        value: 'Monday-Friday: 9 AM - 6 PM',
      },
      {
        value: 'Saturday: 10 AM - 3 PM',
      },
      {
        value: 'Sunday: Closed',
      },
    ],
  },
];

export type CategoryTagType = {
  title: string;
  active?: boolean;
};

export const categoryTagsData: CategoryTagType[] = [
  {
    title: 'All',
    active: true,
  },
  {
    title: 'Kichen',
  },
  {
    title: 'living room',
  },
  {
    title: 'Pool',
  },
  {
    title: 'Dining room',
  },
];

export type ProjectType = {
  title: string;
  address: string;
  image: string;
}

export const projectsData: ProjectType[] = [
  {
    title: 'Bel Air - French Inspired Kitchen',
    address: '845 West 53rd Street, Ap. 7B, NY 10019',
    image: projectImg1,
  },
  {
    title: 'Mid Century Open Floor Kitchen',
    address: '929 Hart St, Brooklyn, NY 11237',
    image: projectImg2,
  },
  {
    title: 'Studio City - Cape Cod New Construction',
    address: '219 East 78th Street, Suite 3A, NY 10075',
    image: projectImg3,
  },
  {
    title: 'Encino Scandinavian Living Room',
    address: '3811 Ditmars Blvd Astoria, NY 11105',
    image: projectImg4,
  },
];

export type ReviewType = {
  name: string;
  date: string;
  rating: number;
  review: string;
  likes: number;
  dislikes: number;
}

export const reviewsData: ReviewType[] = [
  {
    name: 'Randy W.',
    date: 'November 19, 2024',
    rating: 5,
    review:
      "From start to finish, his cooperation was incredibly smooth. The pricing was quite reasonable, and the task was completed efficiently and with a high level of cleanliness. I'm delighted that we chose Mike over the other companies we considered based on quotes.",
    likes: 6,
    dislikes: 0,
  },
  {
    name: 'Lora Palmer',
    date: 'November 10, 2024',
    rating: 5,
    review:
      'He was absolutely amazing very professional. I highly recommend hirings Mike.',
    likes: 13,
    dislikes: 2,
  },
  {
    name: 'Melissa Smith',
    date: 'November 5, 2024',
    rating: 5,
    review:
      'Mike delivered exceptional work at an excellent price. I highly recommend him. They completed the job in just four days, and after a full year, there have been no issues.',
    likes: 8,
    dislikes: 0,
  },
  {
    name: 'Alice Cooper',
    date: 'October 23, 2024',
    rating: 5,
    review:
      "Mike's service was exceptional, he is true professional. Discovered him on the website, took a chance, and without a doubt, he not only met but exceeded our expectations. I'm more than pleased to write a glowing review for Mike. As a highly satisfied customer, I can confidently say that he has definitely earned it.",
    likes: 27,
    dislikes: 3,
  },
  {
    name: 'Natalia D.',
    date: 'October 7, 2024',
    rating: 4,
    review:
      "Mike exhibited great professionalism and politeness. I hired him to replace the door springs, which he did efficiently in a short amount of time. I would wholeheartedly recommend his services to anyone. I'm delighted that everything is now functioning like new again.",
    likes: 15,
    dislikes: 0,
  },
];