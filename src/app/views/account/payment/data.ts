export type PaymentCardType = {
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  isPrimary: boolean;
  isExpired: boolean;
  lightGradientClass: string;
  darkGradientClass: string;
};

export const paymentCardData: PaymentCardType[] = [
  {
    cardNumber: '1245 **** **** 0730',
    cardHolderName: 'Michael Williams',
    expiryDate: '12/26',
    isPrimary: true,
    isExpired: false,
    lightGradientClass: 'bg-gradient-to-r from-[#accbee] to-[#dbeafe]',
    darkGradientClass: 'bg-gradient-to-r from-[#1b273a] to-[#1f2632]',
  },
  {
    cardNumber: '4460 **** **** 7821',
    cardHolderName: 'Michael Williams',
    expiryDate: '10/23',
    isPrimary: false,
    isExpired: true,
    lightGradientClass: 'bg-gradient-to-r from-[#fcb69f] to-[#ffe8c9]',
    darkGradientClass: 'bg-gradient-to-l from-[#2f2c3a] to-[#372e2f]',
  },
];
