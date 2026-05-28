const property1 = 'assets/img/add-item/property/01.jpg';
const property2 = 'assets/img/add-item/property/02.jpg';
const property3 = 'assets/img/add-item/property/03.jpg';
const property4 = 'assets/img/add-item/property/04.jpg';

export type PropertyGalleryType = {
  image: string;
  isCover?: boolean;
}

export const propertyGalleryData: PropertyGalleryType[] = [
  {
    image: property1,
    isCover: true,
  },
  {
    image: property2,
  },
  {
    image: property3,
  },
  {
    image: property4,
  },
  
];