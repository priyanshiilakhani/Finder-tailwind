export type OfficeLocationType = {
  countryName: string;
  officeAddress: string;
  svg: string;
};

export const officeLocationData: OfficeLocationType[] = [
  {
    countryName: 'Canada',
    officeAddress: '127 John Street, 10th Floor<br>Toronto, ON M5V 2E4',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="none">
        <path d="M29 57c15.464 0 28-12.536 28-28S44.464 1 29 1 1 13.536 1 29s12.536 28 28 28z" fill="#f0f0f0"></path>
        <g fill="#d80027">
          <path d="M57 29c0-11.101-6.46-20.693-15.826-25.222v50.443C50.54 49.693 57 40.101 57 29h0zM1 29c0 11.101 6.46 20.693 15.826 25.222V3.778C7.46 8.307 1 17.899 1 29zm32.87 3.652l4.87-2.435L36.305 29v-2.435L31.436 29l2.435-4.87h-2.435l-2.435-3.652-2.435 3.652h-2.435L26.566 29l-4.87-2.435V29l-2.435 1.217 4.869 2.435-1.217 2.435h4.87v3.652h2.435v-3.652h4.87l-1.217-2.435z"></path>
        </g>
        <rect x=".5" y=".5" width="57" height="57" rx="28.5" stroke="currentColor" class="text-default-300 dark:text-white/20"></rect>
      </svg>
    `,
  },
  {
    countryName: 'United Kingdom',
    officeAddress: 'Level 2, 191 Botany Road<br>Waterloo, NSW 2017',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="none">
        <path d="M29 57c15.464 0 28-12.536 28-28S44.464 1 29 1 1 13.536 1 29s12.536 28 28 28z" fill="#f0f0f0"></path>
        <g fill="#0052b4">
          <path d="M6.788 11.953a27.9 27.9 0 0 0-4.824 9.743H16.53l-9.743-9.743zm49.247 9.743a27.9 27.9 0 0 0-4.824-9.743l-9.742 9.743h14.566zM1.965 36.305a27.9 27.9 0 0 0 4.824 9.743l9.743-9.743H1.965zM46.047 6.788a27.9 27.9 0 0 0-9.743-4.824V16.53l9.743-9.743zM11.953 51.212a27.9 27.9 0 0 0 9.743 4.824V41.469l-9.743 9.743z"></path>
          <path d="M21.696 1.965a27.9 27.9 0 0 0-9.743 4.824l9.743 9.743V1.965zm14.609 54.07a27.9 27.9 0 0 0 9.743-4.824l-9.743-9.743v14.566zm5.164-19.73l9.743 9.743a27.9 27.9 0 0 0 4.824-9.743H41.469z"></path>
        </g>
        <g fill="#d80027">
          <path d="M56.763 25.348H32.652h0V1.237A28.28 28.28 0 0 0 29 1c-1.238 0-2.457.081-3.652.237v24.111h0H1.237A28.28 28.28 0 0 0 1 29c0 1.238.081 2.457.237 3.652h24.111 0v24.111c1.195.156 2.414.237 3.652.237s2.457-.081 3.652-.237V32.652h0 24.111C56.919 31.457 57 30.238 57 29a28.28 28.28 0 0 0-.237-3.652h0zM36.305 36.305L48.8 48.8l1.646-1.798-10.697-10.697h-3.443 0zm-14.609 0h0L9.201 48.799l1.798 1.646 10.697-10.697v-3.443zm-.001-14.609h0L9.201 9.201l-1.646 1.798 10.697 10.697h3.443 0zm14.61 0L48.799 9.201l-1.798-1.646-10.697 10.697v3.443z"></path>
        </g>
        <rect x=".5" y=".5" width="57" height="57" rx="28.5" stroke="currentColor" class="text-default-300 dark:text-white/20"></rect>
      </svg>
    `,
  },
  {
    countryName: 'USA',
    officeAddress: '245 Park Avenue, 39th Floor<br>New York, NY 10167',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="none">
        <path d="M29 57c15.464 0 28-12.536 28-28S44.464 1 29 1 1 13.536 1 29s12.536 28 28 28z" fill="#f0f0f0"></path>
        <g fill="#d80027">
          <path d="M27.783 29H57a28.03 28.03 0 0 0-.965-7.304H27.783V29zm0-14.609h25.108a28.15 28.15 0 0 0-6.461-7.304H27.783v7.304zM29 57a27.88 27.88 0 0 0 17.43-6.087H11.57A27.88 27.88 0 0 0 29 57zM5.11 43.609h47.781a27.84 27.84 0 0 0 3.145-7.304H1.965c.702 2.605 1.769 5.059 3.145 7.304h0z"></path>
        </g>
        <path d="M13.97 5.373h2.552l-2.373 1.724.907 2.79-2.373-1.724-2.373 1.724.783-2.41c-2.09 1.741-3.921 3.78-5.431 6.052h.818l-1.511 1.098-.677 1.196.721 2.221-1.346-.978-.916 2.174.795 2.447h2.934L4.105 23.41l.907 2.79-2.373-1.724-1.422 1.033A28.27 28.27 0 0 0 1 29h28V1c-5.531 0-10.688 1.605-15.03 4.373h0zM15.055 26.2l-2.373-1.724-2.373 1.724.907-2.79-2.373-1.724h2.934l.906-2.79.907 2.79h2.934l-2.373 1.724.907 2.79zm-.907-10.947l.907 2.79-2.373-1.724-2.373 1.724.907-2.79-2.373-1.724h2.934l.906-2.79.907 2.79h2.934l-2.373 1.724zM25.098 26.2l-2.373-1.724-2.373 1.724.907-2.79-2.373-1.724h2.934l.907-2.79.906 2.79h2.934l-2.373 1.724.907 2.79zm-.907-10.947l.907 2.79-2.373-1.724-2.373 1.724.907-2.79-2.373-1.724h2.934l.907-2.79.906 2.79h2.934l-2.373 1.724zm0-8.157l.907 2.79-2.373-1.724-2.373 1.724.907-2.79-2.373-1.724h2.934l.907-2.79.906 2.79h2.934l-2.373 1.724z" fill="#0052b4"></path>
        <rect x=".5" y=".5" width="57" height="57" rx="28.5" stroke="currentColor" class="text-default-300 dark:text-white/20"></rect>
      </svg>
    `,
  },
  {
    countryName: 'New Zealand',
    officeAddress: '1/63 Apollo Drive<br>Rosedale, Auckland 0632',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="none">
        <path d="M57 29c0 15.464-12.536 28-28 28S1 44.464 1 29c0 .007 28-27.997 28-28 15.464 0 28 12.536 28 28z" fill="#0052b4"></path>
        <g fill="#f0f0f0">
          <path d="M28.926 29h.075v-.075l-.075.075z"></path>
          <path d="M29 15.609V1h-.005C13.534 1.003 1 13.538 1 29h14.609v-8.226L23.835 29h5.09l.075-.075v-5.09l-8.226-8.226H29z"></path>
        </g>
        <g fill="#d80027">
          <path d="M15.166 4.652A28.14 28.14 0 0 0 4.652 15.166V29h7.304V11.957h0H29V4.652H15.166zm13.835 20.905l-9.948-9.948H15.61h0L29.001 29h0v-3.443zm20.489-3.78l.604 1.86h1.956l-1.582 1.149.605 1.86-1.582-1.149-1.582 1.149.604-1.86-1.582-1.149h1.956l.605-1.86zm-6.992 13.391l.907 2.79h2.934l-2.373 1.724.907 2.79-2.373-1.724-2.373 1.724.907-2.79-2.373-1.724h2.934l.907-2.79zm.265-21.913l.755 2.325h2.445l-1.978 1.437.756 2.325-1.978-1.437-1.978 1.437.755-2.325-1.978-1.437h2.444l.756-2.325zm-6.727 8.441l.907 2.79h2.934l-2.373 1.724.907 2.79-2.373-1.724L33.662 29l.907-2.79-2.373-1.724h2.934l.907-2.79z"></path>
        </g>
        <rect x=".5" y=".5" width="57" height="57" rx="28.5" stroke="currentColor" class="text-default-300 dark:text-white/20"></rect>
      </svg>
    `,
  },
  {
    countryName: 'Germany',
    officeAddress: 'Maximilianstraße 34<br>80539 Munich',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="none">
        <path d="M2.742 38.739C6.698 49.401 16.962 57 29.001 57s22.302-7.599 26.258-18.261l-26.258-2.435-26.258 2.435z" fill="#ffda44"></path>
        <path d="M29.001 1C16.962 1 6.698 8.599 2.742 19.261l26.258 2.435 26.258-2.435C51.303 8.599 41.04 1 29.001 1z" fill="#000"></path>
        <path d="M2.742 19.261A27.94 27.94 0 0 0 1 29a27.94 27.94 0 0 0 1.742 9.739h52.517A27.94 27.94 0 0 0 57 29c0-3.425-.616-6.706-1.742-9.739H2.742z" fill="#d80027"></path>
        <rect x=".5" y=".5" width="57" height="57" rx="28.5" stroke="currentColor" class="text-default-300 dark:text-white/20"></rect>
      </svg>
    `,
  },
  {
    countryName: 'Argentina',
    officeAddress: 'Avenida del Libertador 6680, Piso 1<br>C1428ARW Buenos Aires',
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" fill="none">
        <path d="M29 57c15.464 0 28-12.536 28-28S44.464 1 29 1 1 13.536 1 29s12.536 28 28 28z" fill="#f0f0f0"></path>
        <g fill="#338af3">
          <path d="M29.001 1C17.9 1 8.308 7.46 3.779 16.826h50.443C49.694 7.46 40.102 1 29.001 1h0zm0 56c11.101 0 20.693-6.46 25.222-15.826H3.779C8.308 50.54 17.9 57 29.001 57z"></path>
        </g>
        <path d="M37.369 29l-3.42 1.609 1.821 3.312-3.713-.71-.471 3.751L29 34.202l-2.587 2.759-.47-3.751-3.713.71 1.821-3.312L20.631 29l3.42-1.609-1.821-3.312 3.713.71.471-3.751L29 23.798l2.587-2.759.47 3.751 3.713-.71-1.821 3.312L37.369 29z" fill="#ffda44"></path>
        <rect x=".5" y=".5" width="57" height="57" rx="28.5" stroke="currentColor" class="text-default-300 dark:text-white/20"></rect>
      </svg>
    `,
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