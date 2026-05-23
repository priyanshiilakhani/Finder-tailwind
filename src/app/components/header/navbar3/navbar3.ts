import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Navbar } from "../navbar/navbar";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { BackToTop } from "../back-to-top/back-to-top";

@Component({
  selector: 'app-navbar3',
  imports: [CommonModule, LucideAngularModule, Navbar, ThemeDropdown, MobileMenu, BackToTop],
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
