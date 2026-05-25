import { Component } from '@angular/core';
import { Navbar5 } from "@app/components/header/navbar5/navbar5";
import { Footer4 } from "@app/components/footer/footer4/footer4";
import { Hero } from "./components/hero/hero";
import { Categories } from "./components/categories/categories";
import { Popular } from "./components/popular/popular";
import { Online } from "./components/online/online";
import { Filterable } from "./components/filterable/filterable";
import { Sport } from "./components/sport/sport";
import { Music } from "./components/music/music";
import { News } from "./components/news/news";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-events',
  imports: [Navbar5, Footer4, Hero, Categories, Popular, Online, Filterable, Sport, Music, News, Cta],
  templateUrl: './events.html',
  styles: ``,
})
export class Events {}
