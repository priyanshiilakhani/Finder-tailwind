import { Component, HostListener } from '@angular/core';
import { ThemeDropdown } from '../theme-dropdown/theme-dropdown';
import { LucideAngularModule } from 'lucide-angular';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import { BackToTop } from '../back-to-top/back-to-top';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { NavbarMenu } from "../navbar-menu/navbar-menu";

@Component({
  selector: 'app-navbar1',
  imports: [ThemeDropdown, LucideAngularModule, MobileMenu, BackToTop, CommonModule, RouterLink, NavbarMenu],
  templateUrl: './navbar1.html',
  styles: ``,
})

export class Navbar1 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 75;
  }
}
