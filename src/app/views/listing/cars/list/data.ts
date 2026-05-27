// images
const carList1 = 'assets/img/listings/cars/list/01.jpg';
const carList2 = 'assets/img/listings/cars/list/02.jpg';
const carList3 = 'assets/img/listings/cars/list/03.jpg';
const carList4 = 'assets/img/listings/cars/list/04.jpg';
const carList5 = 'assets/img/listings/cars/list/05.jpg';
const carList6 = 'assets/img/listings/cars/list/06.jpg';
const carList7 = 'assets/img/listings/cars/list/07.jpg';
const carList8 = 'assets/img/listings/cars/list/08.jpg';

export type CarListingType = {
  image: string;
  isVerified: boolean;
  condition: string;
  date: string;
  title: string;
  year: number;
  price: string;
  description: string;
  location: string;
  mileage: string;
  fuelType: string;
  transmission: string;
};

export const carListingData: CarListingType[] = [
  {
    image: carList1,
    isVerified: true,
    condition: 'Used',
    date: '27/05/2024',
    title: 'Volvo XC90 Sport 4WD',
    year: 2019,
    price: '$92,500',
    description:
      'This SUV combines robust power with sophisticated design, offering advanced safety features and all-terrain capability.',
    location: 'Houston',
    mileage: '78K mi',
    fuelType: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: carList2,
    isVerified: false,
    condition: 'Used',
    date: '16/08/2024',
    title: 'Porsche 911 Turbo S',
    year: 2017,
    price: '$85,000',
    description:
      'This pristine sports car, free of damages, features a powerful turbocharged engine, iconic design, and a meticulously crafted interior.',
    location: 'Chicago',
    mileage: '32K mi',
    fuelType: 'Gasoline',
    transmission: 'Manual',
  },
  {
    image: carList3,
    isVerified: false,
    condition: 'Used',
    date: '30/09/2024',
    title: 'Ford Truck Lifted',
    year: 2022,
    price: '$63,000',
    description:
      'A rugged, commanding presence on and off the road, the lifted Ford Truck delivers enhanced performance and superior ground clearance.',
    location: 'Boston',
    mileage: '17K mi',
    fuelType: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: carList4,
    isVerified: false,
    condition: 'Used',
    date: '05/09/2024',
    title: 'Land Rover Defender',
    year: 2003,
    price: '$25,900',
    description:
      'An iconic off-road legend, known for its rugged durability, timeless design, and unmatched capability. Built to conquer any terrain.',
    location: 'Dallas',
    mileage: '138K mi',
    fuelType: 'Diesel',
    transmission: 'Manual',
  },
  {
    image: carList5,
    isVerified: true,
    condition: 'Used',
    date: '23/04/2024',
    title: 'Mercedes-Benz Coupe',
    year: 2021,
    price: '$115,400',
    description:
      'A sleek, luxurious vehicle featuring powerful performance, advanced technology, and elegant design for a premium driving experience.',
    location: 'New York',
    mileage: '15K mi',
    fuelType: 'Diesel',
    transmission: 'Manual',
  },
  {
    image: carList6,
    isVerified: true,
    condition: 'Used',
    date: '28/06/2024',
    title: 'Maserati Granturismo',
    year: 2021,
    price: '$73,400',
    description:
      'A sleek, luxurious vehicle featuring powerful performance, advanced technology, and elegant design for a premium driving experience.',
    location: 'Dallas',
    mileage: '56K mi',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    image: carList7,
    isVerified: false,
    condition: 'Used',
    date: '16/08/2024',
    title: 'BMW Series 3',
    year: 2021,
    price: '$42,000',
    description:
      'Blending cutting-edge technology with sporty handling, it offers a thrilling driving experience wrapped in a sleek, modern design.',
    location: 'Orlando',
    mileage: '31K mi',
    fuelType: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: carList8,
    isVerified: true,
    condition: 'Used',
    date: '11/06/2024',
    title: 'Audi R8 Spyder',
    year: 2022,
    price: '$97,500',
    description:
      'Experience the thrill of a V10 engine, precision handling, and the luxury of top-down driving in an iconic, head-turning package.',
    location: 'Philadelphia',
    mileage: '29K mi',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
  },
];
