import { Component } from '@angular/core';
import { Navbar6 } from "@app/components/header/navbar6/navbar6";
import { Hero } from "./components/hero/hero";
import { Vacation } from "./components/vacation/vacation";
import { Offers } from "./components/offers/offers";
import { NewSection } from "./components/new-section/new-section";
import { Restaurants } from "./components/restaurants/restaurants";
import { CityHighlights } from "./components/city-highlights/city-highlights";
import { Activities } from "./components/activities/activities";
import { Cta } from "./components/cta/cta";
import { Events } from './components/events/events';
import { Footer5 } from "@app/components/footer/footer5/footer5";

@Component({
  selector: 'app-city-guide',
  imports: [Navbar6, Hero, Vacation, Offers, Events, NewSection, Restaurants, CityHighlights, Activities, Cta, Footer5],
  templateUrl: './city-guide.html',
  styles: ``,
})
export class CityGuide {}
