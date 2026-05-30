import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { navbarMenuData } from './data';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-menu',
  imports: [RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './navbar-menu.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NavbarMenu {
  navbarMenuData = navbarMenuData;
  constructor(public router: Router) {}
  isMenuActive(menu: any): boolean {
    const currentUrl = this.router.url;

    const checkItems = (items: any[]) =>
      items?.some(
        (item: any) =>
          item.link === currentUrl || item.links?.some((sub: any) => sub.link === currentUrl),
      );

    return (
      checkItems(menu.items) || menu.sections?.some((section: any) => checkItems(section.items))
    );
  }
}
