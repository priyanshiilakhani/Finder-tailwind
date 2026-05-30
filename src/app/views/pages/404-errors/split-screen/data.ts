export type SplitScreenType = {
  icon: string;
  title: string;
  link: string;
};

export const splitScreenData: SplitScreenType[] = [
  {
    icon: 'lucide:layout-grid',
    title: 'Catalog',
    link: '/listings-contractors',
  },
  {
    icon: 'lucide:wrench',
    title: 'Popular projects',
    link: '/listings-contractors',
  },
  {
    icon: 'lucide:info',
    title: 'Help center',
    link: '/listings-contractors',
  },
];
