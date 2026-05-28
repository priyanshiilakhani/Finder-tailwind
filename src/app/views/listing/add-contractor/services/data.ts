export type ContractorServiceType = {
  id: string;
  label: string;
  checked: boolean;
};

export const contractorServiceData: ContractorServiceType[] = [
  {
    id: 'rendering',
    label: '3D rendering',
    checked: true,
  },
  {
    id: 'deck-building',
    label: 'Deck Building',
    checked: false,
  },
  {
    id: 'architectural-design',
    label: 'Architectural Design',
    checked: true,
  },
  {
    id: 'bathroom-design',
    label: 'Bathroom Design',
    checked: true,
  },
  {
    id: 'house-remodeling',
    label: 'House Remodeling',
    checked: false,
  },
  {
    id: 'chimney-construction',
    label: 'Chimney Construction',
    checked: false,
  },
  {
    id: 'basement-remodeling',
    label: 'Basement Remodeling',
    checked: false,
  },
  {
    id: 'home-renovations',
    label: 'Home Renovations',
    checked: true,
  },
  {
    id: 'floor-leveling',
    label: 'Floor Leveling',
    checked: true,
  },
  {
    id: 'property-extensions',
    label: 'Property Extensions',
    checked: false,
  },
  {
    id: 'custom-home-building',
    label: 'Custom Home Building',
    checked: true,
  },
  {
    id: 'floor-refinishing',
    label: 'Floor Refinishing',
    checked: false,
  },
  {
    id: 'kitchen-remodeling',
    label: 'Kitchen Remodeling',
    checked: true,
  },
  {
    id: 'bathroom-plumbing',
    label: 'Bathroom Plumbing',
    checked: false,
  },
  {
    id: 'flooring-installation',
    label: 'Flooring Installation',
    checked: false,
  },
];

export type ExteriorServiceType = {
  id: string;
  label: string;
  checked: boolean;
};

export const exteriorServiceData: ExteriorServiceType[] = [
  {
    id: 'roofing-installation',
    label: 'Roofing Installation',
    checked: false,
  },
  {
    id: 'siding-replacement',
    label: 'Siding Replacement',
    checked: false,
  },
  {
    id: 'window-replacement',
    label: 'Window Replacement',
    checked: false,
  },
  {
    id: 'door-installation',
    label: 'Door Installation',
    checked: false,
  },
  {
    id: 'patio-design',
    label: 'Patio Design',
    checked: false,
  },
  {
    id: 'landscaping-services',
    label: 'Landscaping Services',
    checked: false,
  },
  {
    id: 'garage-construction',
    label: 'Garage Construction',
    checked: false,
  },
  {
    id: 'solar-panel-installation',
    label: 'Solar Panel Installation',
    checked: false,
  },
  {
    id: 'fencing-installation',
    label: 'Fencing Installation',
    checked: false,
  },
  {
    id: 'driveway-paving',
    label: 'Driveway Paving',
    checked: false,
  },
  {
    id: 'attic-insulation',
    label: 'Attic Insulation',
    checked: false,
  },
  {
    id: 'swimming-pool-construction',
    label: 'Swimming Pool Construction',
    checked: false,
  },
];