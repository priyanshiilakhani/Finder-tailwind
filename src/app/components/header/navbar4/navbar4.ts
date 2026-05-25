import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavbarMenu } from "../navbar-menu/navbar-menu";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { BackToTop } from "../back-to-top/back-to-top";
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-navbar4',
  imports: [CommonModule, NavbarMenu, ThemeDropdown, MobileMenu, BackToTop, RouterLink, LucideAngularModule],
  templateUrl: './navbar4.html',
  styles: ``,
})
export class Navbar4 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 75;
  }
}
