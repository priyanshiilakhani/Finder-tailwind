import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavbarMenu } from "../navbar-menu/navbar-menu";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { BackToTop } from "../back-to-top/back-to-top";

@Component({
  selector: 'app-navbar5',
  imports: [CommonModule, NavbarMenu, ThemeDropdown, LucideAngularModule, RouterLink, MobileMenu, BackToTop],
  templateUrl: './navbar5.html',
  styles: ``,
})
export class Navbar5 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 75;
  }
}
