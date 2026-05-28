import { Component, HostListener } from '@angular/core';
import { NavbarMenu } from "../navbar-menu/navbar-menu";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { LucideAngularModule } from "lucide-angular";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { BackToTop } from "../back-to-top/back-to-top";
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar7',
  imports: [
    NavbarMenu,
    ThemeDropdown,
    LucideAngularModule,
    MobileMenu,
    BackToTop,
    RouterLink,
    CommonModule,
  ],
  templateUrl: './navbar7.html',
  styles: ``,
})
  
export class Navbar7 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 75;
  }
}
