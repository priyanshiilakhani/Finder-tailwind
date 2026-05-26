import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { BackToTop } from "../back-to-top/back-to-top";
import { NavbarMenu } from "../navbar-menu/navbar-menu";

@Component({
  selector: 'app-navbar3',
  imports: [CommonModule, LucideAngularModule, ThemeDropdown, MobileMenu, BackToTop, NavbarMenu],
  templateUrl: './navbar3.html',
  styles: ``,
})
  
export class Navbar3 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 75;
  }
}
