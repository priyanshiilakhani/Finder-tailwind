import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { navbarMenuData } from './data';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Navbar {
  navbarMenuData = navbarMenuData;
}
