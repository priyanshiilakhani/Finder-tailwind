import { Component } from '@angular/core';
import { Navbar6 } from "@app/components/header/navbar6/navbar6";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Filters } from "./components/filters/filters";
import { RoomsList } from "./components/rooms-list/rooms-list";
import { Pagination } from "./components/pagination/pagination";
import { Footer5 } from "@app/components/footer/footer5/footer5";
import { FiltersOffcanvas } from "./components/filters-offcanvas/filters-offcanvas";

@Component({
  selector: 'app-top-filters',
  imports: [Navbar6, Breadcrumb, Filters, RoomsList, Pagination, Footer5, FiltersOffcanvas],
  templateUrl: './top-filters.html',
  styles: ``,
})
export class TopFilters {}
