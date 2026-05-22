import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { ThemeDropdown } from "../theme-dropdown/theme-dropdown";
import { BackToTop } from "../back-to-top/back-to-top";
import { MobileMenu } from "../mobile-menu/mobile-menu";
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar2',
  imports: [Navbar, ThemeDropdown, BackToTop, MobileMenu, LucideAngularModule, RouterLink],
  templateUrl: './navbar2.html',
  styles: ``,
})
export class Navbar2 {}
