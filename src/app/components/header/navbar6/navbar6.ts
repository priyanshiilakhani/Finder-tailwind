import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { NavbarMenu } from "../navbar-menu/navbar-menu";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { BackToTop } from "../back-to-top/back-to-top";
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar6',
  imports: [CommonModule, NavbarMenu, ThemeDropdown, MobileMenu, BackToTop, LucideAngularModule, RouterLink],
  templateUrl: './navbar6.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Navbar6 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 75;
  }
}
