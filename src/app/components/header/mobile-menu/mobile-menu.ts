import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { mobileMenuData } from './data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink],
  templateUrl: './mobile-menu.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MobileMenu {
  mobileMenuData = mobileMenuData;
}
