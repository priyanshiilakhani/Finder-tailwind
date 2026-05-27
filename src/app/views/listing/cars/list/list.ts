import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar3 } from "@app/components/header/navbar3/navbar3";
import { Breadcrumb } from "../components/breadcrumb/breadcrumb";
import { Filter } from "../components/filter/filter";
import { FilterSidebar } from "../components/filter-sidebar/filter-sidebar";
import { Pagination } from "../components/pagination/pagination";
import { CarInfo } from "./components/car-info/car-info";
import { Footer1 } from "@app/components/footer/footer1/footer1";

@Component({
  selector: 'cars-list',
  imports: [Navbar3, Breadcrumb, Filter, FilterSidebar, Pagination, CarInfo, Footer1],
  templateUrl: './list.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class List {}
