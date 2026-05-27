import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar3 } from "@app/components/header/navbar3/navbar3";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Filter } from "../components/filter/filter";
import { FilterSidebar } from "../components/filter-sidebar/filter-sidebar";
import { CarList } from "./components/car-list/car-list";
import { Pagination } from "../components/pagination/pagination";
import { Footer1 } from "@app/components/footer/footer1/footer1";

@Component({
  selector: 'cars-grid',
  imports: [Navbar3, Breadcrumb, Filter, FilterSidebar, CarList, Pagination, Footer1],
  templateUrl: './grid.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Grid {}
