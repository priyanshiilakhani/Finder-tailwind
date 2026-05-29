export type NotificationPreferenceType = {
  title: string;
  description: string;
  favoriteLink?: boolean;
  emailId: string;
  emailChecked: boolean;
  phoneId: string;
  phoneChecked: boolean;
};

export const notificationPreferenceData: NotificationPreferenceType[] = [
  {
    title: 'New rental alerts',
    description: 'New rentals that match your Favorites',
    favoriteLink: true,
    emailId: 'email-1',
    emailChecked: true,
    phoneId: 'phone-1',
    phoneChecked: false,
  },
  {
    title: 'Rental status updates',
    description: 'Updates like price changes and off-market status on your Favorites',
    favoriteLink: true,
    emailId: 'email-2',
    emailChecked: true,
    phoneId: 'phone-2',
    phoneChecked: false,
  },
  {
    title: 'Finder recommendations',
    description:
      "Rentals we think you'll like. These recommendations may be slightly outside your search criteria",
    emailId: 'email-3',
    emailChecked: false,
    phoneId: 'phone-3',
    phoneChecked: false,
  },
  {
    title: 'Featured news',
    description: 'News and tips you may be interested in',
    emailId: 'email-4',
    emailChecked: false,
    phoneId: 'phone-4',
    phoneChecked: true,
  },
  {
    title: 'Finder extras',
    description:
      'Occasional notifications about new features to make finding the perfect rental easy',
    emailId: 'email-5',
    emailChecked: true,
    phoneId: 'phone-5',
    phoneChecked: true,
  },
];
