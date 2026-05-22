import { Injectable } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storageKey = 'theme';
  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    this.loadTheme();

    // 🔥 auto mode live update
    this.mediaQuery.addEventListener('change', () => {
      if (this.getTheme() === 'auto') {
        this.applySystemTheme();
      }
    });
  }

  setTheme(mode: ThemeMode) {
    localStorage.setItem(this.storageKey, mode);

    if (mode === 'auto') {
      this.applySystemTheme();
    } else {
      this.applyTheme(mode);
    }
  }

  getTheme(): ThemeMode {
    return (localStorage.getItem(this.storageKey) as ThemeMode) || 'auto';
  }

  loadTheme() {
    const savedTheme = this.getTheme();

    if (savedTheme === 'auto') {
      this.applySystemTheme();
    } else {
      this.applyTheme(savedTheme);
    }
  }

  private applyTheme(mode: 'light' | 'dark') {
    const html = document.documentElement;

    if (mode === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }

  private applySystemTheme() {
    const isDark = this.mediaQuery.matches;
    this.applyTheme(isDark ? 'dark' : 'light');
  }
}
