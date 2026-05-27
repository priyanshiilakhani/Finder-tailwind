const carGrid2 = 'assets/img/listings/cars/grid/02.jpg';
const carGrid3 = 'assets/img/listings/cars/grid/03.jpg';
const carGrid5 = 'assets/img/listings/cars/grid/05.jpg';

const carGallery1 = 'assets/img/listings/cars/single/gallery/01.jpg';
const carGallery2 = 'assets/img/listings/cars/single/gallery/02.jpg';
const carGallery3 = 'assets/img/listings/cars/single/gallery/03.jpg';
const carGallery4 = 'assets/img/listings/cars/single/gallery/04.jpg';
const carGallery5 = 'assets/img/listings/cars/single/gallery/05.jpg';
const carGallery6 = 'assets/img/listings/cars/single/gallery/06.jpg';
const carGallery7 = 'assets/img/listings/cars/single/gallery/07.jpg';
const carGallery8 = 'assets/img/listings/cars/single/gallery/08.jpg';

const carThumbnail1 = 'assets/img/listings/cars/single/gallery/th01.jpg';
const carThumbnail2 = 'assets/img/listings/cars/single/gallery/th02.jpg';
const carThumbnail3 = 'assets/img/listings/cars/single/gallery/th03.jpg';
const carThumbnail4 = 'assets/img/listings/cars/single/gallery/th04.jpg';
const carThumbnail5 = 'assets/img/listings/cars/single/gallery/th05.jpg';
const carThumbnail6 = 'assets/img/listings/cars/single/gallery/th06.jpg';
const carThumbnail7 = 'assets/img/listings/cars/single/gallery/th07.jpg';
const carThumbnail8 = 'assets/img/listings/cars/single/gallery/th08.jpg';

export type CarGridListingType = {
  image: string;
  isVerified: boolean;
  condition: string;
  date: string;
  title: string;
  year: number;
  price: string;
  location: string;
  mileage: string;
  fuelType: string;
  transmission: string;
};

export const carGridListingData: CarGridListingType[] = [
  {
    image: carGrid3,
    isVerified: false,
    condition: 'Used',
    date: '30/09/2024',
    title: 'Ford Truck Lifted',
    year: 2017,
    price: '$63,000',
    location: 'Boston',
    mileage: '17K mi',
    fuelType: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: carGrid5,
    isVerified: true,
    condition: 'Used',
    date: '23/04/2024',
    title: 'Mercedes-Benz Coupe',
    year: 2021,
    price: '$115,400',
    location: 'New York',
    mileage: '15K mi',
    fuelType: 'Gasoline',
    transmission: 'Manual',
  },
  {
    image: carGrid2,
    isVerified: false,
    condition: 'Used',
    date: '16/08/2024',
    title: 'Porsche 911 Turbo S',
    year: 2017,
    price: '$85,000',
    location: 'Chicago',
    mileage: '32K mi',
    fuelType: 'Gasoline',
    transmission: 'Manual',
  },
  {
    image: carGrid2,
    isVerified: false,
    condition: 'Used',
    date: '19/10/2024',
    title: 'Tesla Model 3',
    year: 2024,
    price: '$36,200',
    location: 'Los Angeles',
    mileage: '13K mi',
    fuelType: 'Electric',
    transmission: 'Automatic',
  },
];

export const carGalleryData: string[] = [
  carGallery1,
  carGallery2,
  carGallery3,
  carGallery4,
  carGallery5,
  carGallery6,
  carGallery7,
  carGallery8,
];

export const carThumbnailData: string[] = [
  carThumbnail1,
  carThumbnail2,
  carThumbnail3,
  carThumbnail4,
  carThumbnail5,
  carThumbnail6,
  carThumbnail7,
  carThumbnail8,
];

