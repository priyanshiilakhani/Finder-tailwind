import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { navbarMenuData } from './data';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar {
  navbarMenuData = navbarMenuData;
 
}
