import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { navbarMenuData } from './data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar-menu',
  imports: [RouterLink],
  templateUrl: './navbar-menu.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarMenu {
  navbarMenuData = navbarMenuData;
}
