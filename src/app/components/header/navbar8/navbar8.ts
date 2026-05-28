import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { NavbarMenu } from "../navbar-menu/navbar-menu";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { BackToTop } from "../back-to-top/back-to-top";

@Component({
  selector: 'app-navbar8',
  imports: [RouterLink, CommonModule, LucideAngularModule, NavbarMenu, ThemeDropdown, MobileMenu, BackToTop],
  templateUrl: './navbar8.html',
  styles: ``,
})
  
export class Navbar8 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY >= 75;
  }
}
