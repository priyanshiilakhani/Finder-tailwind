const herbalMedicineImage = 'assets/img/help/v3/01.jpg';
const doctorChecklistImage = 'assets/img/help/v3/02.jpg';
const medicalAdviceGuideImage = 'assets/img/help/v3/03.jpg';
const symptomCommunicationImage = 'assets/img/help/v3/04.jpg';
const medicationInstructionsImage = 'assets/img/help/v3/05.jpg';

export type HelpCategoryType = {
  title: string;
  visibleArticles: string[];
  hiddenArticles: string[];
  collapseId: string;
};

export const helpCategoryData: HelpCategoryType[] = [
  {
    title: 'Search and navigation',
    collapseId: 'commentsCollapse',
    visibleArticles: [
      'What is included in my rental accommodation?',
      'Navigating the doctor directory',
      'Filtering options for doctor search',
      'How to schedule an appointment online',
      'Availability and waitlist information',
    ],
    hiddenArticles: [
      'Search for doctors by specialty and location',
      'Using the map view to find nearby doctors',
      'Using advanced search features for better results',
    ],
  },
  {
    title: 'Appointment booking',
    collapseId: 'commentsCollapse1',
    visibleArticles: [
      'How to schedule an appointment online',
      'Managing and cancelling appointments',
      'Availability and waitlist information',
      'Verifying insurance coverage for a doctor',
      'Billing and payment information',
    ],
    hiddenArticles: [
      'Managing and rescheduling your appointments',
      'Different types of appointments: In-person vs. Telehealth',
      'How to book an appointment for someone else',
    ],
  },
  {
    title: 'Specialties and services',
    collapseId: 'commentsCollapse2',
    visibleArticles: [
      'Exploring different medical specialties',
      'Finding doctors for specific services',
      'Researching doctors based on expertise',
      'Utilizing telehealth services',
      'Technical requirements for virtual visits',
    ],
    hiddenArticles: [
      'Understanding medical specialties',
      'Find doctors offering specific services or treatments',
      'Finding a team of specialists for comprehensive treatment',
    ],
  },
  {
    title: 'Doctor-patient communication',
    collapseId: 'commentsCollapse3',
    visibleArticles: [
      'Communicating with your doctor online',
      'Secure messaging and consultations',
      'Obtaining test results',
      'Verifying insurance coverage for a doctor',
      "Understanding doctor's treatment instructions",
    ],
    hiddenArticles: [
      'How to send and receive messages with your doctor',
      'What to discuss during your appointment',
      'Using video and chat features for telehealth appointments',
    ],
  },
];

export type HelpArticleType = {
  image: string;
  title: string;
};

export const helpArticleData: HelpArticleType[] = [
  {
    image: herbalMedicineImage,
    title: 'Herbal medicines: advantages and disadvantages',
  },
  {
    image: doctorChecklistImage,
    title: 'Prepare questions for your doctor: A pre-appointment checklist',
  },
  {
    image: medicalAdviceGuideImage,
    title: 'A guide to interpreting medical advice and instructions',
  },
  {
    image: symptomCommunicationImage,
    title: 'Communicating your symptoms clearly to your doctor',
  },
  {
    image: medicationInstructionsImage,
    title: 'How to discuss medication instructions and manage your pills',
  },
];

export type FaqType = {
  headingId: string;
  collapseId: string;
  question: string;
  answer: string;
};

export const faqData: FaqType[] = [
  {
    headingId: 'faqHeading-1',
    collapseId: 'faqCollapse-1',
    question: 'How do I start the process of buying a home?',
    answer:
      'The first step is to assess your financial situation and get pre-approved for a mortgage. This will give you a clear understanding of your budget. After that, you can start searching for properties that match your criteria and work with a real estate agent to guide you through the process.',
  },
  {
    headingId: 'faqHeading-2',
    collapseId: 'faqCollapse-2',
    question: 'What should I consider when choosing a neighborhood?',
    answer:
      "Consider factors such as the proximity to schools, work, public transportation, safety, and local amenities like shops and parks. It’s also important to research the neighborhood's future development plans and property value trends.",
  },
  {
    headingId: 'faqHeading-3',
    collapseId: 'faqCollapse-3',
    question: 'How much should I budget for closing costs?',
    answer:
      "Closing costs typically range from 2% to 5% of the home's purchase price. These costs can include loan origination fees, title insurance, attorney fees, and other related expenses. It's advisable to set aside additional funds for these costs.",
  },
  {
    headingId: 'faqHeading-4',
    collapseId: 'faqCollapse-4',
    question: 'Is it better to rent or buy a home?',
    answer:
      "This depends on your personal financial situation, lifestyle, and long-term goals. Buying is often considered a good investment, but it requires a significant upfront cost and ongoing maintenance. Renting offers more flexibility and fewer responsibilities, but you won't build equity.",
  },
  {
    headingId: 'faqHeading-5',
    collapseId: 'faqCollapse-5',
    question: 'How do I determine the right price to offer on a home?',
    answer:
      "Research comparable properties in the area that have recently sold to get a sense of the market value. Your real estate agent can also provide a comparative market analysis (CMA) to help determine a fair offer based on the property's condition, location, and market demand.",
  },
  {
    headingId: 'faqHeading-6',
    collapseId: 'faqCollapse-6',
    question: 'What should I look for during a home inspection?',
    answer:
      'During a home inspection, focus on the structural integrity of the property, including the roof, foundation, plumbing, electrical systems, and HVAC. Look for signs of water damage, mold, and pests. The inspector will provide a detailed report, which can be used to negotiate repairs or price adjustments.',
  },
  {
    headingId: 'faqHeading-7',
    collapseId: 'faqCollapse-7',
    question: 'What are the benefits of getting a pre-approved mortgage?',
    answer:
      'Getting pre-approved for a mortgage shows sellers that you are a serious buyer and can afford the property. It also helps you set a realistic budget and speeds up the home-buying process since your financial documents are already in order.',
  },
  {
    headingId: 'faqHeading-8',
    collapseId: 'faqCollapse-8',
    question: 'How can I make my home more appealing to buyers?',
    answer:
      'To make your home more appealing, focus on curb appeal by maintaining the exterior, landscaping, and entryway. Inside, declutter, clean thoroughly, and consider staging the home with neutral décor to allow buyers to envision themselves living there. Address any necessary repairs and updates.',
  },
  {
    headingId: 'faqHeading-9',
    collapseId: 'faqCollapse-9',
    question: "What is a seller's market vs. a buyer's market?",
    answer:
      "A seller's market occurs when there are more buyers than available properties, leading to higher prices and quicker sales. A buyer's market happens when there are more properties than buyers, giving buyers more negotiating power and typically leading to lower prices.",
  },
  {
    headingId: 'faqHeading-10',
    collapseId: 'faqCollapse-10',
    question: 'How long does it take to close on a home?',
    answer:
      'The closing process typically takes 30 to 45 days, depending on various factors such as the type of loan, the efficiency of the involved parties, and any unforeseen issues that may arise. Staying organized and responsive can help ensure a smoother, faster closing process.',
  },
];