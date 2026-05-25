import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { NavbarMenu } from '../navbar-menu/navbar-menu';
import { ThemeDropdown } from '../theme-dropdown/theme-dropdown';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import { BackToTop } from '../back-to-top/back-to-top';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, NavbarMenu, ThemeDropdown, MobileMenu, BackToTop,CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 75;
  }
}
