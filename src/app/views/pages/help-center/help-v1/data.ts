const accommodationImage = 'assets/img/help/v1/01.jpg';
const insuranceImage = 'assets/img/help/v1/02.jpg';
const bookingImage = 'assets/img/help/v1/03.jpg';

export type SupportTabType = {
  id: string;
  buttonId: string;
  tabTarget: string;
  ariaControls: string;
  title: string;
  customClass?: string;
  isActive?: boolean;
};

export const supportTabData: SupportTabType[] = [
  {
    id: 'accommodation',
    buttonId: 'accommodation-tab',
    tabTarget: '#accommodation',
    ariaControls: 'accommodation',
    title: 'Accomodation',
    isActive: true,
  },
  {
    id: 'booking',
    buttonId: 'booking-tab',
    tabTarget: '#booking',
    ariaControls: 'booking',
    title: 'Booking',
  },
  {
    id: 'payment',
    buttonId: 'payment-tab',
    tabTarget: '#payment',
    ariaControls: 'payment',
    title: 'Payment',
  },
  {
    id: 'after-booking',
    buttonId: 'after-booking-tab',
    tabTarget: '#after-booking',
    ariaControls: 'after-booking',
    title: 'After a booking',
  },
  {
    id: 'cancellation',
    buttonId: 'cancellation-tab',
    tabTarget: '#cancellation',
    ariaControls: 'cancellation',
    title: 'Cancellation, notice, exptension',
    customClass: 'text-start',
  },
  {
    id: 'regulations',
    buttonId: 'regulations-tab',
    tabTarget: '#regulations',
    ariaControls: 'regulations',
    title: 'Regulations',
  },
  {
    id: 'insurances',
    buttonId: 'insurances-tab',
    tabTarget: '#insurances',
    ariaControls: 'insurances',
    title: 'Insurances',
  },
];

export type ArticleType = {
  title: string;
  link: string;
};

export const helpArticleData: ArticleType[] = [
  {
    title: 'What is included in my rental accommodation?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Are utilities like water, electricity, and internet included in the rent?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I view the property before I move in?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What furniture is provided with the accommodation?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Are pets allowed in the accommodation?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Is smoking permitted inside the property?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I report maintenance issues or repairs needed in the accommodation?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What should I do if something in the property is damaged when I move in?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Are there any restrictions on guests staying over?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I make modifications or decorate the property?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How is the security of the property managed?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What is the procedure for renewing my lease?',
    link: '/help/single-article/v1',
  },
];

export const bookingArticleData: ArticleType[] = [
  {
    title: 'How do I book a property on the website?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What documents do I need to provide to make a booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I book a property for a short-term stay?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I know if my booking is confirmed?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What are the payment options available for booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I book a property on behalf of someone else?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What happens if the property I booked becomes unavailable?',
    link: '/help/single-article/v1',
  },
  {
    title: "Can I change the dates of my booking after it's confirmed?",
    link: '/help/single-article/v1',
  },
  {
    title: 'Do I need to pay a deposit when making a booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How long does it take to process my booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What is the policy for last-minute bookings?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Is there a minimum stay requirement for bookings?',
    link: '/help/single-article/v1',
  },
];

export const paymentArticleData: ArticleType[] = [
  {
    title: 'What payment methods are accepted?',
    link: '/help/single-article/v1',
  },
  {
    title: 'When is my rent due?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I set up automatic payments for my rent?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Are there any fees associated with late payments?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I pay my rent online?',
    link: '/help/single-article/v1',
  },
  {
    title: "What should I do if I'm unable to make a payment on time?",
    link: '/help/single-article/v1',
  },
  {
    title: 'Is there a grace period for rent payments?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I receive a receipt for my payment?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I split my payment into multiple transactions?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What happens if my payment fails or is declined?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I pay my rent in advance?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Are there any discounts for early or lump-sum payments?',
    link: '/help/single-article/v1',
  },
];

export const afterBookingArticleData: ArticleType[] = [
  {
    title: 'How do I collect the keys for my accommodation?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What should I do upon arrival at the property?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Who do I contact if I have any issues after moving in?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I set up utilities like electricity and internet?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What is the process for checking in to the property?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I request additional services or amenities after moving in?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I update my contact information or other details after booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What is the procedure if I need repairs or maintenance?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I report issues with my neighbors?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Who is responsible for property maintenance during my stay?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I upgrade or change my accommodation after booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I renew my lease if I want to stay longer?',
    link: '/help/single-article/v1',
  },
];

export const cancellationArticleData: ArticleType[] = [
  {
    title: 'What is the process for canceling my booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Is there a penalty for canceling my booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How much notice do I need to give before moving out?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I extend my stay after the initial booking period?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What happens if I need to leave before my lease ends?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I request a lease extension?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Will I get a refund if I cancel my booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What is the policy on early termination of the lease?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I provide notice if I plan to vacate the property?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Can I transfer my lease to someone else if I need to move?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What happens if the property owner cancels my booking?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Is there a fee for extending my stay?',
    link: '/help/single-article/v1',
  },
];

export const regulationArticleData: ArticleType[] = [
  {
    title: 'What are the local laws regarding renting accommodation?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Are there any noise regulations I need to follow?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What are the rules regarding waste disposal and recycling?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Are there any specific regulations for pet owners?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Do I need to register with local authorities after moving in?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What are the parking regulations for tenants?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Are there restrictions on the type of activities I can conduct in the property?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What should I do if I receive a notice of violation?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Are there any occupancy limits for the property?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What are the fire safety regulations I need to follow?',
    link: '/help/single-article/v1',
  },
  {
    title: 'How are disputes with landlords or neighbors handled legally?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What are the rules for subletting the property?',
    link: '/help/single-article/v1',
  },
];

export const insuranceArticleData: ArticleType[] = [
  {
    title: "Do I need renter's insurance?",
    link: '/help/single-article/v1',
  },
  {
    title: "What does renter's insurance cover?",
    link: '/help/single-article/v1',
  },
  {
    title: "Is renter's insurance included in my rent?",
    link: '/help/single-article/v1',
  },
  {
    title: 'How do I choose the right insurance policy for my needs?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What happens if my belongings are damaged or stolen?',
    link: '/help/single-article/v1',
  },
  {
    title: "Does the property owner's insurance cover tenant belongings?",
    link: '/help/single-article/v1',
  },
  {
    title: "How do I file a claim with my renter's insurance?",
    link: '/help/single-article/v1',
  },
  {
    title: "What is the cost of renter's insurance?",
    link: '/help/single-article/v1',
  },
  {
    title: 'Do I need additional insurance for valuable items?',
    link: '/help/single-article/v1',
  },
  {
    title: 'What is the process for transferring my insurance if I move?',
    link: '/help/single-article/v1',
  },
  {
    title: 'Is insurance required by law for tenants?',
    link: '/help/single-article/v1',
  },
  {
    title: "How does renter's insurance differ from homeowner's insurance?",
    link: '/help/single-article/v1',
  },
];

export type HelpArticleSliderType = {
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

export const helpArticleSliderData: HelpArticleSliderType[] = [
  {
    category: 'Accommodation',
    title: 'Renting out a condo',
    description:
      'Maximize your investment by renting out your condo - unlock a steady income stream and build wealth over time...',
    image: accommodationImage,
    link: '/help/single-article/v1',
  },
  {
    category: 'Insurances',
    title: "What is renters' insurance?",
    description:
      "Renters' insurance is a type of insurance policy that provides coverage for tenants renting a home or apartment...",
    image: insuranceImage,
    link: '/help/single-article/v1',
  },
  {
    category: 'Booking',
    title: 'Tips and tricks for renters',
    description:
      'Unlock your best renting experience with our essential tips and tricks, designed to help you save money and find the...',
    image: bookingImage,
    link: '/help/single-article/v1',
  },
];

export type HelpCategoryType = {
  title: string;
  isActive?: boolean;
};

export const helpCategoryData: HelpCategoryType[] = [
  {
    title: 'All',
    isActive: true,
  },
  {
    title: 'Accommodation',
  },
  {
    title: 'Booking',
  },
  {
    title: 'Payment',
  },
  {
    title: 'Cancellation',
  },
  {
    title: 'insurances',
  },
];

export type FaqType = {
  id: number;
  question: string;
  answer: string;
};

export const faqData: FaqType[] = [
  {
    id: 1,
    question: 'How do I start the process of buying a home?',
    answer:
      'The first step is to assess your financial situation and get pre-approved for a mortgage. This will give you a clear understanding of your budget. After that, you can start searching for properties that match your criteria and work with a real estate agent to guide you through the process.',
  },
  {
    id: 2,
    question: 'What should I consider when choosing a neighborhood?',
    answer:
      "Consider factors such as the proximity to schools, work, public transportation, safety, and local amenities like shops and parks. It’s also important to research the neighborhood's future development plans and property value trends.",
  },
  {
    id: 3,
    question: 'How much should I budget for closing costs?',
    answer:
      "Closing costs typically range from 2% to 5% of the home's purchase price. These costs can include loan origination fees, title insurance, attorney fees, and other related expenses. It's advisable to set aside additional funds for these costs.",
  },
  {
    id: 4,
    question: 'Is it better to rent or buy a home?',
    answer:
      "This depends on your personal financial situation, lifestyle, and long-term goals. Buying is often considered a good investment, but it requires a significant upfront cost and ongoing maintenance. Renting offers more flexibility and fewer responsibilities, but you won't build equity.",
  },
  {
    id: 5,
    question: 'How do I determine the right price to offer on a home?',
    answer:
      "Research comparable properties in the area that have recently sold to get a sense of the market value. Your real estate agent can also provide a comparative market analysis (CMA) to help determine a fair offer based on the property's condition, location, and market demand.",
  },
  {
    id: 6,
    question: 'What should I look for during a home inspection?',
    answer:
      'During a home inspection, focus on the structural integrity of the property, including the roof, foundation, plumbing, electrical systems, and HVAC. Look for signs of water damage, mold, and pests. The inspector will provide a detailed report, which can be used to negotiate repairs or price adjustments.',
  },
  {
    id: 7,
    question: 'What are the benefits of getting a pre-approved mortgage?',
    answer:
      'Getting pre-approved for a mortgage shows sellers that you are a serious buyer and can afford the property. It also helps you set a realistic budget and speeds up the home-buying process since your financial documents are already in order.',
  },
  {
    id: 8,
    question: 'How can I make my home more appealing to buyers?',
    answer:
      'To make your home more appealing, focus on curb appeal by maintaining the exterior, landscaping, and entryway. Inside, declutter, clean thoroughly, and consider staging the home with neutral décor to allow buyers to envision themselves living there. Address any necessary repairs and updates.',
  },
  {
    id: 9,
    question: "What is a seller's market vs. a buyer's market?",
    answer:
      "A seller's market occurs when there are more buyers than available properties, leading to higher prices and quicker sales. A buyer's market happens when there are more properties than buyers, giving buyers more negotiating power and typically leading to lower prices.",
  },
  {
    id: 10,
    question: 'How long does it take to close on a home?',
    answer:
      'The closing process typically takes 30 to 45 days, depending on various factors such as the type of loan, the efficiency of the involved parties, and any unforeseen issues that may arise. Staying organized and responsive can help ensure a smoother, faster closing process.',
  },
];