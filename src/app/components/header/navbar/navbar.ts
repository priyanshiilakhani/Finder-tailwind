import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { NavbarMenu } from "../navbar-menu/navbar-menu";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { BackToTop } from "../back-to-top/back-to-top";

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, NavbarMenu, ThemeDropdown, MobileMenu, BackToTop],
  templateUrl: './navbar.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Navbar {}
