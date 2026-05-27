const participantImage1 = 'assets/img/listings/events/single/participants/01.jpg';
const participantImage2 = 'assets/img/listings/events/single/participants/02.jpg';
const participantImage3 = 'assets/img/listings/events/single/participants/03.jpg';

export type EventDateType = {
  date: string;
  isActive: boolean;
};

export const eventDateData: EventDateType[] = [
  {
    date: 'Aug 15',
    isActive: true,
  },
  {
    date: 'Aug 16',
    isActive: false,
  },
  {
    date: 'Aug 17',
    isActive: false,
  },
];

export type EventParticipantType = {
  image: string;
  time: string;
  title: string;
};

export const eventParticipantData: EventParticipantType[] = [
  {
    image: participantImage1,
    time: '19:00',
    title: 'Rhythmic Resonance Group',
  },
  {
    image: participantImage2,
    time: '20:00',
    title: 'Chromatic Odyssey Assembly',
  },
  {
    image: participantImage3,
    time: '21:30',
    title: 'Nostalgic Jazzphonic Quartet',
  },
];

export type EventFacilityType = {
  icon: string;
  title: string;
};

export const eventFacilityData: EventFacilityType[] = [
  {
    icon: 'accessibility',
    title: 'Accessible ticket',
  },
  {
    icon: 'camera',
    title: 'Photo & video',
  },
  {
    icon: 'wifi',
    title: 'Free WiFi',
  },
  {
    icon: 'circle-parking',
    title: 'Free parking',
  },
  {
    icon: 'cigarette-off',
    title: 'Non-smoking',
  },
  {
    icon: 'wine',
    title: 'Bar area',
  },
];