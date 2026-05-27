const carGrid1 = 'assets/img/listings/cars/grid/01.jpg';
const carGrid2 = 'assets/img/listings/cars/grid/02.jpg';
const carGrid3 = 'assets/img/listings/cars/grid/03.jpg';
const carGrid4 = 'assets/img/listings/cars/grid/04.jpg';
const carGrid5 = 'assets/img/listings/cars/grid/05.jpg';
const carGrid6 = 'assets/img/listings/cars/grid/05.jpg';
const carGrid7 = 'assets/img/listings/cars/grid/02.jpg';
const carGrid8 = 'assets/img/listings/cars/grid/08.jpg';
const carGrid9 = 'assets/img/listings/cars/grid/09.jpg';
const carGrid10 = 'assets/img/listings/cars/grid/10.jpg';
const carGrid11 = 'assets/img/listings/cars/grid/11.jpg';
const carGrid12 = 'assets/img/listings/cars/grid/12.jpg';
const carGrid13 = 'assets/img/listings/cars/grid/13.jpg';
const carGrid14 = 'assets/img/listings/cars/grid/14.jpg';
const carGrid15 = 'assets/img/listings/cars/grid/15.jpg';

export type CarCategoryType = {
  label: string;
  checked: boolean;
};

export type SelectOptionType = {
  value: string;
  selected?: boolean;
};

export type CheckboxOptionType = {
  id: string;
  label: string;
  checked?: boolean;
};

export type FilterSectionType = {
  title: string;
  options: CheckboxOptionType[];
};

export const carCategoryData: CarCategoryType[] = [
  {
    label: 'New cars',
    checked: false,
  },
  {
    label: 'Used cars',
    checked: true,
  },
];

export const locationOptionsData: SelectOptionType[] = [
  { value: 'Any location', selected: true },
  { value: 'New York' },
  { value: 'Los Angeles' },
  { value: 'Chicago' },
  { value: 'Houston' },
  { value: 'Phoenix' },
  { value: 'Philadelphia' },
  { value: 'San Antonio' },
  { value: 'San Diego' },
  { value: 'Dallas' },
  { value: 'San Jose' },
];

export const radiusOptionsData: SelectOptionType[] = [
  { value: 'Any radius', selected: true },
  { value: '10 mi' },
  { value: '20 mi' },
  { value: '30 mi' },
  { value: '40 mi' },
  { value: '50 mi' },
  { value: '60 mi' },
];

export const bodyTypeData: CheckboxOptionType[] = [
  { id: 'sedan', label: 'Sedan', checked: true },
  { id: 'suv', label: 'SUV', checked: true },
  { id: 'wagon', label: 'Wagon' },
  { id: 'crossover', label: 'Crossover' },
  { id: 'coupe', label: 'Coupe', checked: true },
  { id: 'pickup', label: 'Pickup' },
  { id: 'sport', label: 'Sport Coupe' },
  { id: 'compact', label: 'Compact' },
  { id: 'convertible', label: 'Convertible' },
  { id: 'family', label: 'Family MPV' },
];

export const yearOptionsData: SelectOptionType[] = [
  { value: '2025' },
  { value: '2024' },
  { value: '2023', selected: true },
  { value: '2021' },
  { value: '2020' },
  { value: '2019' },
  { value: '2018' },
  { value: '2017' },
  { value: '2016' },
  { value: '2015' },
];

export const makeOptionsData: SelectOptionType[] = [
  { value: 'Any make', selected: true },
  { value: 'Toyota' },
  { value: 'Mercedes-Benz' },
  { value: 'BMW' },
  { value: 'Honda' },
  { value: 'Ford' },
  { value: 'Chevrolet' },
  { value: 'Audi' },
  { value: 'Tesla' },
  { value: 'Mazda' },
  { value: 'Nissan' },
  { value: 'Volkswagen' },
];

export const modelOptionsData: SelectOptionType[] = [
  { value: 'Any model', selected: true },
  { value: 'A-Class' },
  { value: 'C-Class' },
  { value: 'E-Class' },
  { value: 'S-Class' },
  { value: 'A205' },
  { value: 'GLA' },
  { value: 'GLC' },
  { value: 'GLE' },
  { value: 'GLS' },
  { value: 'AMG GT' },
];

export const drivetrainData: CheckboxOptionType[] = [
  { id: 'awd', label: 'AWD/4WD' },
  { id: 'fwd', label: 'Front Wheel Drive' },
  { id: 'rwd', label: 'Rear Wheel Drive' },
];

export const fuelTypeData: CheckboxOptionType[] = [
  { id: 'gasoline', label: 'Gasoline' },
  { id: 'diesel', label: 'Diesel' },
  { id: 'electric', label: 'Electric' },
  { id: 'hybrid', label: 'Hybrid' },
  { id: 'plug', label: 'Plug-in Hybrid' },
  { id: 'hydrogen', label: 'Hydrogen' },
];

export const transmissionData: CheckboxOptionType[] = [
  { id: 'automatic', label: 'Automatic' },
  { id: 'manual', label: 'Manual' },
];

export const colorData: CheckboxOptionType[] = [
  { id: 'amber', label: 'Amber' },
  { id: 'azure', label: 'Azure' },
  { id: 'beige', label: 'Beige' },
  { id: 'black', label: 'Black' },
  { id: 'blue', label: 'Blue' },
  { id: 'brown', label: 'Brown' },
  { id: 'camouflage', label: 'Camouflage green' },
  { id: 'charcoal', label: 'Charcoal' },
  { id: 'gray', label: 'Gray' },
  { id: 'green', label: 'Green' },
  { id: 'gold', label: 'Gold' },
  { id: 'purple', label: 'Purple' },
  { id: 'red', label: 'Red' },
  { id: 'white', label: 'White' },
  { id: 'yellow', label: 'Yellow' },
];

export const sellersData: CheckboxOptionType[] = [
  { id: 'dealers', label: 'Dealers Only' },
  { id: 'sellers', label: 'Private Sellers Only' },
];

export type CarListingType = {
  image: string;
  isVerified?: boolean;
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

export const carListingData: CarListingType[] = [
  {
    image: carGrid1,
    isVerified: true,
    condition: 'Used',
    date: '27/05/2024',
    title: 'Volvo XC90 Sport 4WD',
    year: 2019,
    price: '$43,500',
    location: 'Houston',
    mileage: '78K mi',
    fuelType: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: carGrid2,
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
    image: carGrid3,
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
    image: carGrid4,
    condition: 'Used',
    date: '15/07/2024',
    title: 'Mercedes-Benz A205',
    year: 2021,
    price: '$41,900',
    location: 'Chicago',
    mileage: '60K mi',
    fuelType: 'Gasoline',
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
    image: carGrid6,
    isVerified: true,
    condition: 'Used',
    date: '28/06/2024',
    title: 'Maserati Granturismo',
    year: 2020,
    price: '$73,000',
    location: 'Dallas',
    mileage: '56K mi',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    image: carGrid7,
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
  {
    image: carGrid8,
    condition: 'Used',
    date: '02/08/2024',
    title: 'Toyota Yaris GR Sport',
    year: 2021,
    price: '$28,600',
    location: 'San Jose',
    mileage: '21K mi',
    fuelType: 'Hybrid',
    transmission: 'Automatic',
  },
  {
    image: carGrid9,
    isVerified: true,
    condition: 'Used',
    date: '13/07/2024',
    title: 'Mitsubishi Padjero Sport',
    year: 2019,
    price: '$33,500',
    location: 'Phoenix',
    mileage: '57K mi',
    fuelType: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: carGrid10,
    isVerified: true,
    condition: 'Used',
    date: '25/04/2024',
    title: 'Smart Fortwo Cabrio',
    year: 2018,
    price: '$17,600',
    location: 'New York',
    mileage: '46K mi',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    image: carGrid11,
    isVerified: false,
    condition: 'Used',
    date: '05/09/2024',
    title: 'Land Rover Defender',
    year: 2003,
    price: '$25,900',
    location: 'Dallas',
    mileage: '138K mi',
    fuelType: 'Diesel',
    transmission: 'Manual',
  },
  {
    image: carGrid12,
    isVerified: true,
    condition: 'Used',
    date: '11/06/2024',
    title: 'Audi R8 Spyder',
    year: 2022,
    price: '$97,500',
    location: 'Philadelphia',
    mileage: '29K mi',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
  },
  {
    image: carGrid13,
    isVerified: false,
    condition: 'Used',
    date: '16/08/2024',
    title: 'BMW 3 Series',
    year: 2021,
    price: '$42,000',
    location: 'Orlando',
    mileage: '31K mi',
    fuelType: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: carGrid14,
    isVerified: true,
    condition: 'Used',
    date: '29/05/2024',
    title: 'GMC Sierra 1500',
    year: 2020,
    price: '$69,300',
    location: 'Boston',
    mileage: '54K mi',
    fuelType: 'Diesel',
    transmission: 'Automatic',
  },
  {
    image: carGrid15,
    isVerified: false,
    condition: 'Used',
    date: '03/07/2024',
    title: 'Porsche 911 Carrera',
    year: 2019,
    price: '$108,500',
    location: 'New York',
    mileage: '47K mi',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
  },
];