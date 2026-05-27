import { Component } from '@angular/core';
import { Navbar5 } from "@app/components/header/navbar5/navbar5";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Filter } from "./components/filter/filter";
import { Grid } from "./components/grid/grid";
import { Pagination } from "./components/pagination/pagination";
import { Sports } from "../components/sports/sports";
import { PopularEvents } from "../components/popular-events/popular-events";
import { Footer4 } from "@app/components/footer/footer4/footer4";

@Component({
  selector: 'events-listings',
  imports: [Navbar5, Breadcrumb, Filter, Grid, Pagination, Sports, PopularEvents, Footer4],
  templateUrl: './listings.html',
  styles: ``,
})
export class Listings {}
