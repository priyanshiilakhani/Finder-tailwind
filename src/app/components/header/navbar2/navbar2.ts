import { Component, HostListener } from '@angular/core';
import { ThemeDropdown } from '../theme-dropdown/theme-dropdown';
import { BackToTop } from '../back-to-top/back-to-top';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarMenu } from "../navbar-menu/navbar-menu";

@Component({
  selector: 'app-navbar2',
  imports: [
    ThemeDropdown,
    BackToTop,
    MobileMenu,
    LucideAngularModule,
    RouterLink,
    CommonModule,
    NavbarMenu
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
