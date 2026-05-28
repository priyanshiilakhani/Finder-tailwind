export type AccountMenuType = {
  icon: string;
  label: string;
  route: string;
  isActive: boolean;
};

export const accountMenuData: AccountMenuType[] = [
  {
    icon: 'lucide:user',
    label: 'My profile',
    route: '/account/profile',
    isActive: true,
  },
  {
    icon: 'lucide:layers',
    label: 'My listings',
    route: '/account/listings',
    isActive: false,
  },
  {
    icon: 'lucide:star',
    label: 'Reviews',
    route: '/account/reviews',
    isActive: false,
  },
  {
    icon: 'lucide:heart',
    label: 'Favorites',
    route: '/account/favorites',
    isActive: false,
  },
  {
    icon: 'lucide:credit-card',
    label: 'Payments details',
    route: '/account/payment',
    isActive: false,
  },
  {
    icon: 'lucide:settings',
    label: 'Account settings',
    route: '/account/settings',
    isActive: false,
  },
  {
    icon: 'lucide:help-circle',
    label: 'Help center',
    route: '/help/topics/v1',
    isActive: false,
  },
];
