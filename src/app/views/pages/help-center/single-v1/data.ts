const articleImage01 = 'assets/img/help/v1/01.jpg';
const articleImage02 = 'assets/img/help/v1/02.jpg';
const articleImage03 = 'assets/img/help/v1/03.jpg';

export type ArticleCategoryType = {
  title: string;
  isActive?: boolean;
};

export type PopularArticleType = {
  image: string;
  category: string;
  title: string;
  description: string;
  articleLink: string;
};

export const articleCategoryData: ArticleCategoryType[] = [
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

export const popularArticleData: PopularArticleType[] = [
  {
    image: articleImage01,
    category: 'Accommodation',
    title: 'Renting out a condo',
    description:
      'Maximize your investment by renting out your condo - unlock a steady income stream and build wealth over time...',
    articleLink: '/help/single-article/v1',
  },
  {
    image: articleImage02,
    category: 'Insurances',
    title: "What is renters' insurance?",
    description:
      "Renters' insurance is a type of insurance policy that provides coverage for tenants renting a home or apartment...",
    articleLink: '/help/single-article/v1',
  },
  {
    image: articleImage03,
    category: 'Booking',
    title: 'Tips and tricks for renters',
    description:
      'Unlock your best renting experience with our essential tips and tricks, designed to help you save money and find the...',
    articleLink: '/help/single-article/v1',
  },
];

export type FaqType = {
  question: string;
  answer: string;
};

export const faqData: FaqType[] = [
  {
    question: 'How do I start the process of buying a home?',
    answer:
      'The first step is to assess your financial situation and get pre-approved for a mortgage. This will give you a clear understanding of your budget. After that, you can start searching for properties that match your criteria and work with a real estate agent to guide you through the process.',
  },
  {
    question: 'What should I consider when choosing a neighborhood?',
    answer:
      "Consider factors such as the proximity to schools, work, public transportation, safety, and local amenities like shops and parks. It’s also important to research the neighborhood's future development plans and property value trends.",
  },
  {
    question: 'How much should I budget for closing costs?',
    answer:
      "Closing costs typically range from 2% to 5% of the home's purchase price. These costs can include loan origination fees, title insurance, attorney fees, and other related expenses. It's advisable to set aside additional funds for these costs.",
  },
  {
    question: 'Is it better to rent or buy a home?',
    answer:
      "This depends on your personal financial situation, lifestyle, and long-term goals. Buying is often considered a good investment, but it requires a significant upfront cost and ongoing maintenance. Renting offers more flexibility and fewer responsibilities, but you won't build equity.",
  },
  {
    question: 'How do I determine the right price to offer on a home?',
    answer:
      "Research comparable properties in the area that have recently sold to get a sense of the market value. Your real estate agent can also provide a comparative market analysis (CMA) to help determine a fair offer based on the property's condition, location, and market demand.",
  },
  {
    question: 'What should I look for during a home inspection?',
    answer:
      'During a home inspection, focus on the structural integrity of the property, including the roof, foundation, plumbing, electrical systems, and HVAC. Look for signs of water damage, mold, and pests. The inspector will provide a detailed report, which can be used to negotiate repairs or price adjustments.',
  },
  {
    question: 'What are the benefits of getting a pre-approved mortgage?',
    answer:
      'Getting pre-approved for a mortgage shows sellers that you are a serious buyer and can afford the property. It also helps you set a realistic budget and speeds up the home-buying process since your financial documents are already in order.',
  },
  {
    question: 'How can I make my home more appealing to buyers?',
    answer:
      'To make your home more appealing, focus on curb appeal by maintaining the exterior, landscaping, and entryway. Inside, declutter, clean thoroughly, and consider staging the home with neutral décor to allow buyers to envision themselves living there. Address any necessary repairs and updates.',
  },
  {
    question: "What is a seller's market vs. a buyer's market?",
    answer:
      "A seller's market occurs when there are more buyers than available properties, leading to higher prices and quicker sales. A buyer's market happens when there are more properties than buyers, giving buyers more negotiating power and typically leading to lower prices.",
  },
  {
    question: 'How long does it take to close on a home?',
    answer:
      'The closing process typically takes 30 to 45 days, depending on various factors such as the type of loan, the efficiency of the involved parties, and any unforeseen issues that may arise. Staying organized and responsive can help ensure a smoother, faster closing process.',
  },
];