import { ThemeMode } from "@/app/services/theme.service";

export type ThemeType = {
  label: string;
  icon: string;
  mode: ThemeMode;
};

export const themeData: ThemeType[] = [
  { label: 'Light', icon: 'sun', mode: 'light' },
  { label: 'Dark', icon: 'moon', mode: 'dark' },
  { label: 'Auto', icon: 'ban', mode: 'auto' },
];
