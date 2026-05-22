import { Component, HostListener } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { ThemeDropdown } from '../theme-dropdown/theme-dropdown';
import { BackToTop } from '../back-to-top/back-to-top';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar2',
  imports: [
    Navbar,
    ThemeDropdown,
    BackToTop,
    MobileMenu,
    LucideAngularModule,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './navbar2.html',
  styles: ``,
})
export class Navbar2 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 75;
  }
}
