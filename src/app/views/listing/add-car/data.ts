const carImg1 = 'assets/img/add-item/car/01.jpg';
const carImg2 = 'assets/img/add-item/car/02.jpg';
const carImg3 = 'assets/img/add-item/car/03.jpg';
const carImg4 = 'assets/img/add-item/car/04.jpg';

const sedanImg = 'assets/img/home/cars/body-type/sedan.svg';
const convertibleImg = 'assets/img/home/cars/body-type/convertible.svg';
const suvImg = 'assets/img/home/cars/body-type/suv.svg';
const coupeImg = 'assets/img/home/cars/body-type/coupe.svg';

export type GalleryType = {
  image: string;
  isCover?: boolean;
};

export const galleryData: GalleryType[] = [
  {
    image: carImg1,
    isCover: true,
  },
  {
    image: carImg2,
  },
  {
    image: carImg3,
  },
  {
    image: carImg4,
  },
];

export type CarBodyType = {
  id: string;
  label: string;
  image: string;
  checked?: boolean;
};

export const carBodyData: CarBodyType[] = [
  {
    id: 'sedan',
    label: 'Sedan',
    image: sedanImg,
  },
  {
    id: 'convertible',
    label: 'Convertible',
    image: convertibleImg,
    checked: true,
  },
  {
    id: 'suv',
    label: 'SUV',
    image: suvImg,
  },
  {
    id: 'coupe',
    label: 'Coupe',
    image: coupeImg,
  },
];

export type AccordionType = {
  id: string;
  headingId: string;
  title: string;
  active?: boolean;
  features: { id: string; label: string; checked?: boolean }[];
};

export const accordionData: AccordionType[] = [
  {
    id: 'exterior',
    headingId: 'headingExteriror',
    title: 'Exterior',
    active: true,
    features: [
      { id: 'led-headlights', label: 'LED Headlights', checked: true },
      { id: 'fog-lights', label: 'Fog Lights', checked: true },
      { id: 'heated-mirrors', label: 'Heated Mirrors' },
      { id: 'power-mirrors', label: 'Power Mirrors', checked: true },
      { id: 'rain-sensing-wipers', label: 'Rain Sensing Wipers' },
      { id: 'rear-spoiler', label: 'Rear Spoiler', checked: true },
      { id: 'convertible-roof', label: 'Convertible Roof', checked: true },
      { id: 'alloy-wheels', label: 'Alloy Wheels' },
      { id: 'keyless-entry', label: 'Keyless Entry', checked: true },
      { id: 'power-windows', label: 'Power Windows', checked: true },
      { id: 'daytime-running-lights', label: 'Daytime Running Lights', checked: true },
      { id: 'tinted-glass', label: 'Tinted Glass' },
      { id: 'parking-sensors', label: 'Parking Sensors' },
      { id: 'dual-exhaust', label: 'Dual Exhaust' },
      { id: 'power-trunk', label: 'Power Trunk', checked: true },
    ],
  },
  {
    id: 'interior',
    headingId: 'headingInterior',
    title: 'Interior',
    features: [
      { id: 'ac', label: 'Multi-Zone A/C', checked: true },
      { id: 'heated-front', label: 'Heated Front Seats', checked: true },
      { id: 'steering-audio', label: 'Steering Wheel Audio Controls' },
      { id: 'steering-adjustable', label: 'Adjustable Steering Wheel', checked: true },
      { id: 'wipers', label: 'Intermittent Wipers' },
      { id: 'door-locks', label: 'Power Door Locks', checked: true },
      { id: 'auto-dimming', label: 'Auto-Dimming Rearview Mirror' },
      { id: 'leather-seats', label: 'Leather Seats' },
      { id: 'bank', label: 'Bank' },
      { id: 'cc', label: 'Climate Control' },
      { id: 'visor-mirror', label: 'Passenger Illuminated Visor Mirror', checked: true },
      { id: 'pass-through', label: 'Pass-Through Rear Seat' },
      { id: 'driver-lumbar', label: 'Driver Adjustable Lumbar' },
      { id: 'passenger-lumbar', label: 'Passenger Adjustable Lumbar' },
      { id: 'garage-opener', label: 'Universal Garage Door Opener', checked: true },
    ],
  },
  {
    id: 'safety',
    headingId: 'headingSafety',
    title: 'Safety',
    features: [
      { id: 'airbags', label: 'Airbags', checked: true },
      { id: 'anti-lock-brakes', label: 'Anti-lock Brakes (ABS)', checked: true },
      { id: 'traction-control', label: 'Traction Control' },
      { id: 'stability-control', label: 'Stability Control', checked: true },
      { id: 'rearview-camera', label: 'Rearview Camera', checked: true },
      { id: 'blind-spot-monitor', label: 'Blind Spot Monitor', checked: true },
      { id: 'lane-departure-warning', label: 'Lane Departure Warning' },
      { id: 'forward-collision-warning', label: 'Forward Collision Warning' },
      { id: 'emergency-braking', label: 'Automatic Emergency Braking' },
      { id: 'adaptive-cruise', label: 'Adaptive Cruise Control', checked: true },
      { id: 'child-safety-locks', label: 'Child Safety Locks', checked: true },
      { id: 'tire-pressure-monitor', label: 'Tire Pressure Monitoring System' },
      { id: 'drowsiness-monitor', label: 'Driver Drowsiness Monitoring' },
      { id: 'night-vision', label: 'Night Vision Assist' },
      { id: 'pedestrian-detection', label: 'Pedestrian Detection', checked: true },
    ],
  },
];

export type ActionButtonType = {
  icon: string;
  tooltip: string;
}

export const actionButtonsData: ActionButtonType[] = [
  {
    icon: 'lucide:heart',
    tooltip: 'Wishlist',
  },
  {
    icon: 'lucide:bell',
    tooltip: 'Notify',
  },
  {
    icon: 'lucide:repeat',
    tooltip: 'Compare',
  },
];

export type VehicleDetailType = {
  icon: string;
  value: string;
}

export const vehicleDetailsData: VehicleDetailType[] = [
  {
    icon: 'lucide:map-pin',
    value: 'Chicago',
  },
  {
    icon: 'lucide:gauge',
    value: '---',
  },
  {
    icon: 'lucide:fuel',
    value: 'Gasoline',
  },
  {
    icon: 'tabler:manual-gearbox',
    value: 'Automatic',
  },
];