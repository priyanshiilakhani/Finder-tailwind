import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar8 } from "@app/components/header/navbar8/navbar8";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { propertySections } from './data';
import { Footer } from "@app/components/footer/footer/footer";
import { ListingsContent } from "./components/listings-content/listings-content";

@Component({
  selector: 'app-listings',
  imports: [Navbar8, AccountSidebar, ListingsContent, Footer],
  templateUrl: './listings.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Listings {
  propertySections = propertySections;
}
