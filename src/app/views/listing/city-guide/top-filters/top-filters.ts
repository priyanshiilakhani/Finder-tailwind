import { Component } from '@angular/core';
import { Navbar6 } from "@app/components/header/navbar6/navbar6";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Filters } from "./components/filters/filters";

@Component({
  selector: 'app-top-filters',
  imports: [Navbar6, Breadcrumb, Filters],
  templateUrl: './top-filters.html',
  styles: ``,
})
export class TopFilters {}
