import { Component } from '@angular/core';
import { Navbar4 } from "@app/components/header/navbar4/navbar4";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Hero } from "../components/hero/hero";
import { ResultsToolbar } from "./components/results-toolbar/results-toolbar";
import { Pagination } from "../components/pagination/pagination";
import { InfoCard } from "./components/info-card/info-card";

@Component({
  selector: 'doctors-grid',
  imports: [Navbar4, Footer3, Breadcrumb, Hero, ResultsToolbar, Pagination, InfoCard],
  templateUrl: './grid.html',
  styles: ``,
})
export class Grid {}
