export type HelpSupportCardType = {
  title: string;
  description: string;
  link: string;
};

export const helpSupportCardData: HelpSupportCardType[] = [
  {
    title: 'Get started',
    description: 'Initiate your journey by creating a listing, following the account setup guide.',
    link: '/help/single-article/v2',
  },
  {
    title: 'Your account',
    description: 'Customize your account and notification settings to suit your preferences.',
    link: '/help/single-article/v2',
  },
  {
    title: 'Actions with ads',
    description: 'Modify your ads and explore effective bargaining techniques.',
    link: '/help/single-article/v2',
  },
  {
    title: 'Support',
    description:
      'Tackle technical issues, resolve disputes, and connect with customer support seamlessly.',
    link: '/help/single-article/v2',
  },
];

export type SupportCardType = {
  title: string;
  link: string;
  description: string;
};

export const supportCards: SupportCardType[] = [
  {
    title: 'Search tips',
    link: '/help/single-article/v2',
    description:
      'Master the art of finding your ideal car by using advanced search filters and browsing categories.',
  },
  {
    title: 'Contacting sellers',
    link: '/help/single-article/v2',
    description:
      'Learn the best practices for initiating contact with sellers and arranging viewings or test drives.',
  },
  {
    title: 'Vehicle history',
    link: '/help/single-article/v2',
    description:
      'Discover how to request and interpret vehicle history reports to make informed decisions.',
  },
  {
    title: 'Payment options',
    link: '/help/single-article/v2',
    description:
      'Understand the different payment methods available and how to complete transactions securely.',
  },
];

export type SellingCarType = {
  title: string;
  description: string;
  route: string;
};

export const sellingCarData: SellingCarType[] = [
  {
    title: 'Creating a listing',
    description:
      'Get expert tips on writing compelling descriptions and taking high-quality photos that stand out.',
    route: '/help/single-article/v2',
  },
  {
    title: 'Pricing your car',
    description:
      'Learn strategies for setting a competitive price, including researching market trends and valuing your vehicle.',
    route: '/help/single-article/v2',
  },
  {
    title: 'Managing inquiries',
    description:
      'Handle buyer inquiries efficiently and professionally to maximize your chances of a quick sale.',
    route: '/help/single-article/v2',
  },
  {
    title: 'Finalizing the sale',
    description:
      'Navigate the final steps of selling your car, including transferring ownership and handling paperwork.',
    route: '/help/single-article/v2',
  },
];

export type PopularFaqType = {
  question: string;
  answer: string;
};

export const popularFaqData: PopularFaqType[] = [
  {
    question: 'How do I create my first car listing?',
    answer: `To create your first car listing, log in to your account and navigate to the "Create Listing" section. Follow the step-by-step guide to enter your vehicle's details, upload high-quality photos, set a price, and publish your ad. Once submitted, your listing will be reviewed and posted on the platform.`,
  },
  {
    question: 'How can I edit or update my existing car listing?',
    answer: `To edit or update your car listing, go to your account dashboard and click on "My Listings." Select the listing you want to modify, and choose the "Edit" option. From here, you can update the vehicle details, price, photos, and description. Don't forget to save your changes once you're done.`,
  },
  {
    question: 'What should I do if I forget my account password?',
    answer: `If you've forgotten your password, click on the "Forgot Password" link on the login page. Enter the email address associated with your account, and we'll send you instructions on how to reset your password. If you don't receive the email, check your spam folder or contact customer support for assistance.`,
  },
  {
    question: 'How do I respond to inquiries from potential buyers?',
    answer: `When a potential buyer contacts you, you'll receive a notification via email and within your account dashboard. To respond, simply log in, go to "Messages," and select the inquiry. You can reply directly through the platform to keep all communication secure and organized.`,
  },
  {
    question: 'What fees are associated with selling a car on your platform?',
    answer: `Listing a car on our platform is free, but we offer premium features to enhance your ad's visibility for a small fee. Additionally, a final sale fee may apply if your car is successfully sold through our platform. You can view the complete fee structure in the "Pricing" section of our website.`,
  },
  {
    question: 'How do I deactivate or remove my car listing?',
    answer: `If you've sold your car or no longer wish to keep your listing active, you can deactivate or remove it by going to "My Listings" in your account dashboard. Select the listing you want to remove and choose "Deactivate" or "Delete." Deactivated listings can be reactivated later if needed, while deleted listings will be permanently removed.`,
  },
];