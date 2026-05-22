import { Component } from '@angular/core';
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { Hero } from "./components/hero/hero";
import { Categories } from "./components/categories/categories";
import { ActionCards } from "./components/action-cards/action-cards";
import { TopOffers } from "./components/top-offers/top-offers";
import { RecentlyAdded } from "./components/recently-added/recently-added";
import { PropertyCost } from "./components/property-cost/property-cost";
import { City } from "./components/city/city";
import { Partners } from "./components/partners/partners";
import { TopAgents } from "./components/top-agents/top-agents";
import { Blog } from "./components/blog/blog";

@Component({
  selector: 'app-real-estate',
  imports: [Navbar2, Hero, Categories, ActionCards, TopOffers, RecentlyAdded, PropertyCost, City, Partners, TopAgents, Blog],
  templateUrl: './real-estate.html',
  styles: ``,
})
export class RealEstate {}
