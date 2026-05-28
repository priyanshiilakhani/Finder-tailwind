export type UserType = {
  id: string;
  label: string;
  icon: string;
  checked?: boolean;
};

export const userData: UserType[] = [
  {
    id: 'private',
    label: 'Private person',
    icon: 'user',
    checked: true,
  },
  {
    id: 'agent',
    label: 'Real estate agent',
    icon: 'briefcase',
  },
];

export type PropertyOptionType = {
  id: string;
  label: string;
  checked?: boolean;
};

export const propertyOptionsData: PropertyOptionType[] = [
  {
    id: 'no-credit',
    label: 'Not available for sale on credit',
  },
  {
    id: 'ready',
    label: 'Ready to cooperate with real estate agents',
  },
  {
    id: 'exchange',
    label: 'The possibility of exchange',
  },
];
