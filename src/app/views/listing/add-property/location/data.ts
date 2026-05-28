export type CountryGroupType = {
  continent: string;
  countries: { name: string; value: string; selected?: boolean }[];
}

export const countryGroupsData: CountryGroupType[] = [
  {
    continent: 'Africa',
    countries: [
      { name: 'Nigeria', value: 'Nigeria' },
      { name: 'South Africa', value: 'South Africa' },
      { name: 'Kenya', value: 'Kenya' },
      { name: 'Egypt', value: 'Egypt' },
      { name: 'Ethiopia', value: 'Ethiopia' },
    ],
  },
  {
    continent: 'Asia',
    countries: [
      { name: 'China', value: 'China' },
      { name: 'India', value: 'India' },
      { name: 'Japan', value: 'Japan' },
      { name: 'South Korea', value: 'South Korea' },
      { name: 'Saudi Arabia', value: 'Saudi Arabia' },
    ],
  },
  {
    continent: 'Europe',
    countries: [
      { name: 'Germany', value: 'Germany' },
      { name: 'France', value: 'France' },
      { name: 'United Kingdom', value: 'United Kingdom' },
      { name: 'Italy', value: 'Italy' },
      { name: 'Spain', value: 'Spain' },
    ],
  },
  {
    continent: 'North America',
    countries: [
      { name: 'United States', value: 'United States', selected: true },
      { name: 'Canada', value: 'Canada' },
      { name: 'Mexico', value: 'Mexico' },
      { name: 'Jamaica', value: 'Jamaica' },
      { name: 'Costa Rica', value: 'Costa Rica' },
    ],
  },
  {
    continent: 'South America',
    countries: [
      { name: 'Brazil', value: 'Brazil' },
      { name: 'Argentina', value: 'Argentina' },
      { name: 'Colombia', value: 'Colombia' },
      { name: 'Chile', value: 'Chile' },
      { name: 'Peru', value: 'Peru' },
    ],
  },
  {
    continent: 'Oceania',
    countries: [
      { name: 'Australia', value: 'Australia' },
      { name: 'New Zealand', value: 'New Zealand' },
      { name: 'Papua New Guinea', value: 'Papua New Guinea' },
      { name: 'Fiji', value: 'Fiji' },
      { name: 'Solomon Islands', value: 'Solomon Islands' },
    ],
  },
];

export type CityOptionType = {
  value: string;
  label: string;
  selected?: boolean;
}

export const citiesData: CityOptionType[] = [
  { value: '', label: 'Select city' },
  { value: 'New York', label: 'New York', selected: true },
  { value: 'Los Angeles', label: 'Los Angeles' },
  { value: 'Chicago', label: 'Chicago' },
  { value: 'Houston', label: 'Houston' },
  { value: 'Phoenix', label: 'Phoenix' },
  { value: 'Philadelphia', label: 'Philadelphia' },
  { value: 'San Antonio', label: 'San Antonio' },
  { value: 'San Diego', label: 'San Diego' },
  { value: 'Dallas', label: 'Dallas' },
  { value: 'San Jose', label: 'San Jose' },
  { value: 'Austin', label: 'Austin' },
  { value: 'Jacksonville', label: 'Jacksonville' }
];