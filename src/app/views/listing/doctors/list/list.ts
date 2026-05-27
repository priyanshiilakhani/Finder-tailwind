import { Component } from '@angular/core';
import { Navbar4 } from '@app/components/header/navbar4/navbar4';
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Hero } from '../components/hero/hero';
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Pagination } from "../components/pagination/pagination";
import { ResultsToolbar } from "./components/results-toolbar/results-toolbar";
import { InfoCard } from "./components/info-card/info-card";

@Component({
  selector: 'doctors-list',
  imports: [Navbar4, Breadcrumb, Hero, Footer3, Pagination, ResultsToolbar, InfoCard],
  templateUrl: './list.html',
  styles: ``,
})
export class List {}
