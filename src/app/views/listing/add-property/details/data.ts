export type PropertyType = {
  id: string;
  title: string;
  description: string;
  checked?: boolean;
}

export const propertyTypeData: PropertyType[] = [
  {
    id: 'secondary-estate',
    title: 'Secondary real estate',
    description: 'Ownership is already registered',
    checked: true,
  },
  {
    id: 'primary-estate',
    title: 'Primary real estate',
    description: 'Ownership has not yet been formalized',
  },
];

export type PropertyFeatureType = {
  title: string;
  name: string;
  options: {
    id: string;
    label: string;
    value: string | number;
    icon?: string;
    checked?: boolean;
  }[];
}

export const propertyFeaturesData: PropertyFeatureType[] = [
  {
    title: 'Bedrooms *',
    name: 'bedrooms',
    options: [
      {
        id: 'bedrooms-any',
        label: 'Any',
        value: 'any',
        checked: true,
      },
      {
        id: 'bedrooms-1',
        label: '1',
        value: 1,
        icon: 'lucide:bed-single',
      },
      {
        id: 'bedrooms-2',
        label: '2',
        value: 2,
        icon: 'lucide:bed-single',
      },
      {
        id: 'bedrooms-3',
        label: '3',
        value: 3,
        icon: 'lucide:bed-single',
      },
      {
        id: 'bedrooms-4',
        label: '4',
        value: 4,
        icon: 'lucide:bed-single',
      },
      {
        id: 'bedrooms-5',
        label: '5',
        value: 5,
        icon: 'lucide:bed-single',
      },
    ],
  },

  {
    title: 'Bathrooms *',
    name: 'bathrooms',
    options: [
      {
        id: 'bathrooms-any',
        label: 'Any',
        value: 'any',
        checked: true,
      },
      {
        id: 'bathrooms-1',
        label: '1',
        value: 1,
        icon: 'lucide:shower-head',
      },
      {
        id: 'bathrooms-2',
        label: '2',
        value: 2,
        icon: 'lucide:shower-head',
      },
      {
        id: 'bathrooms-3',
        label: '3',
        value: 3,
        icon: 'lucide:shower-head',
      },
      {
        id: 'bathrooms-4',
        label: '4',
        value: 4,
        icon: 'lucide:shower-head',
      },
      {
        id: 'bathrooms-5',
        label: '5',
        value: 5,
        icon: 'lucide:shower-head',
      },
    ],
  },

  {
    title: 'Parking spots *',
    name: 'parking',
    options: [
      {
        id: 'parking-any',
        label: 'Any',
        value: 'any',
        checked: true,
      },
      {
        id: 'parking-1',
        label: '1',
        value: 1,
        icon: 'lucide:car',
      },
      {
        id: 'parking-2',
        label: '2',
        value: 2,
        icon: 'lucide:car',
      },
      {
        id: 'parking-3',
        label: '3',
        value: 3,
        icon: 'lucide:car',
      },
      {
        id: 'parking-4',
        label: '4',
        value: 4,
        icon: 'lucide:car',
      },
      {
        id: 'parking-5',
        label: '5',
        value: 5,
        icon: 'lucide:car',
      },
    ],
  },
];


export type AmenityType = {
  id: string;
  label: string;
  checked?: boolean;
};

export const amenitiesData: AmenityType[] = [
  {
    id: 'tv',
    label: 'TV set',
  },
  {
    id: 'washing',
    label: 'Washing machine',
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
  },
  {
    id: 'ac',
    label: 'Air conditioning',
  },
  {
    id: 'workspace',
    label: 'Separate workplace',
  },
  {
    id: 'fridge',
    label: 'Refrigerator',
  },
  {
    id: 'drying',
    label: 'Drying machine',
  },
  {
    id: 'closet',
    label: 'Closet',
  },
  {
    id: 'patio',
    label: 'Patio',
  },
  {
    id: 'fireplace',
    label: 'Fireplace',
  },
  {
    id: 'shower',
    label: 'Shower cabin',
  },
  {
    id: 'whirlpool',
    label: 'Whirlpool',
  },
  {
    id: 'cctv',
    label: 'Security cameras',
  },
  {
    id: 'balcony',
    label: 'Balcony',
  },
  {
    id: 'bar',
    label: 'Bar',
  },
];