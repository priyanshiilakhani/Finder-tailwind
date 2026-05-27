const eventImage1 = 'assets/img/listings/events/01.jpg';
const eventImage2 = 'assets/img/listings/events/02.jpg';
const eventImage3 = 'assets/img/listings/events/03.jpg';
const eventImage4 = 'assets/img/listings/events/04.jpg';
const eventImage5 = 'assets/img/listings/events/05.jpg';
const eventImage6 = 'assets/img/listings/events/06.jpg';
const eventImage7 = 'assets/img/listings/events/07.jpg';
const eventImage8 = 'assets/img/listings/events/08.jpg';
const eventImage9 = 'assets/img/listings/events/09.jpg';
const eventImage10 = 'assets/img/listings/events/10.jpg';
const eventImage11 = 'assets/img/listings/events/11.jpg';
const eventImage12 = 'assets/img/listings/events/12.jpg';
const eventImage18 = 'assets/img/listings/events/18.jpg';
const eventImage19 = 'assets/img/listings/events/19.jpg';
const eventImage21 = 'assets/img/listings/events/21.jpg';
const eventImage22 = 'assets/img/listings/events/22.jpg';

export type EventCardType = {
  image: string;
  date: string;
  time: string;
  category: string;
  title: string;
  location: string;
  price: string;
  route: string;
};

export const eventCardData: EventCardType[] = [
  {
    image: eventImage1,
    date: 'Dec 5',
    time: '20:30',
    category: 'Concert',
    title: 'Paradox Band',
    location: 'Chicago',
    price: '$32.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage2,
    date: 'Nov 19',
    time: '15:00',
    category: 'Concert',
    title: 'Laura Sparski - Cello',
    location: 'Chicago',
    price: '$27.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage3,
    date: 'Oct 16',
    time: '22:00',
    category: 'Concert',
    title: 'Sunset Disco Party',
    location: 'Chicago',
    price: '$45.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage4,
    date: 'Oct 9',
    time: '21:00',
    category: 'Concert',
    title: 'Nostalgic Jazzphonic Quartet',
    location: 'Chicago',
    price: '$68.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage5,
    date: 'Dec 14',
    time: '18:00',
    category: 'Concert',
    title: 'Music Festival',
    location: 'Chicago',
    price: '$50.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage6,
    date: 'Sep 23',
    time: '21:00',
    category: 'Concert',
    title: 'Jazz Night Event',
    location: 'Chicago',
    price: '$42.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage7,
    date: 'Sep 17',
    time: '20:00',
    category: 'Concert',
    title: 'Local Rock Band',
    location: 'Chicago',
    price: '$29.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage8,
    date: 'Oct 10',
    time: '21:00',
    category: 'Concert',
    title: 'John Horrison - Guitar Solo',
    location: 'Chicago',
    price: '$60.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage9,
    date: 'Sep 24',
    time: '19:00',
    category: 'Concert',
    title: 'Melisa Martin in Chicago',
    location: 'Chicago',
    price: '$75.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage10,
    date: 'Aug 18',
    time: '21:00',
    category: 'Concert',
    title: 'Summer Music Festival 2024',
    location: 'Chicago',
    price: '$53.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage11,
    date: 'Dec 12',
    time: '17:00',
    category: 'Concert',
    title: 'Winter Fest',
    location: 'Chicago',
    price: '$36.00',
    route: '/single-entry-events',
  },
  {
    image: eventImage12,
    date: 'Aug 25',
    time: '21:30',
    category: 'Concert',
    title: 'DJ Hardwall - Disco Party',
    location: 'Chicago',
    price: '$49.00',
    route: '/single-entry-events',
  },
];

export type SportsEventType = {
  image: string;
  date: string;
  time: string;
  location: string;
  title: string;
  link: string;
};

export const sportsEventData: SportsEventType[] = [
  {
    image: eventImage18,
    date: 'Jul 8',
    time: '10:30',
    location: 'New York',
    title: 'Soccer Championship: Battle for the Cup',
    link: '/single-entry-events',
  },
  {
    image: eventImage19,
    date: 'Jun 29',
    time: '13:45',
    location: 'Boston',
    title: 'Boston Home Run Classic: Baseball',
    link: '/single-entry-events',
  },
  {
    image: eventImage18,
    date: 'May 17',
    time: '12:00',
    location: 'Chicago',
    title: 'Regional Motocross Championship',
    link: '/single-entry-events',
  },
  {
    image: eventImage21,
    date: 'Aug 23',
    time: '18:00',
    location: 'Houston',
    title: 'Boxing WBA Professional League 2024',
    link: '/single-entry-events',
  },
  {
    image: eventImage22,
    date: 'Jul 14',
    time: '16:00',
    location: 'Philadelphia',
    title: 'Philadelphia Open Tennis Tournament',
    link: '/single-entry-events',
  },
];
