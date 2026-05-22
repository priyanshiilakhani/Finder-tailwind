import { Component, HostListener } from '@angular/core';
import { ThemeDropdown } from '../theme-dropdown/theme-dropdown';
import { LucideAngularModule } from 'lucide-angular';
import { Navbar } from '../navbar/navbar';
import { MobileMenu } from '../mobile-menu/mobile-menu';
import { BackToTop } from '../back-to-top/back-to-top';

@Component({
  selector: 'app-navbar1',
  imports: [ThemeDropdown, LucideAngularModule, Navbar, MobileMenu, BackToTop],
  templateUrl: './navbar1.html',
  styles: ``,
})
export class Navbar1 {
  isSticky = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isSticky = scrollTop >= 75;
  }
}
