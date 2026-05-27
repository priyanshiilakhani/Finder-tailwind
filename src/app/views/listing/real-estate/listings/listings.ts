import { Component } from '@angular/core';
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { Hero } from "./components/hero/hero";
import { FilterModal } from "./components/filter-modal/filter-modal";

@Component({
  selector: 'app-listings',
  imports: [Navbar2, Hero, FilterModal],
  templateUrl: './listings.html',
  styles: ``,
})
  
export class Listings {}
