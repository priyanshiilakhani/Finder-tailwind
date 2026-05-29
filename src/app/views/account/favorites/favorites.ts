import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar8 } from "@app/components/header/navbar8/navbar8";
import { Footer } from "@app/components/footer/footer/footer";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { FavoritesContent } from "./components/favorites-content/favorites-content";

@Component({
  selector: 'app-favorites',
  imports: [Navbar8, AccountSidebar, FavoritesContent, Footer],
  templateUrl: './favorites.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Favorites {
  
}
