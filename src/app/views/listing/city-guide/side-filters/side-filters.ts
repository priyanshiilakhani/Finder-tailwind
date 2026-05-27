import { Component } from '@angular/core';
import { Navbar6 } from "@app/components/header/navbar6/navbar6";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { AccountSidebar } from "./components/account-sidebar/account-sidebar";
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { Filter } from "./components/filter/filter";
import { CityGuideCard } from "./components/city-guide-card/city-guide-card";
import { Pagination } from "./components/pagination/pagination";
import { Footer5 } from "@app/components/footer/footer5/footer5";

@Component({
  selector: 'app-side-filters',
  imports: [Navbar6, Breadcrumb, AccountSidebar, LucideAngularModule, RouterLink, Filter, CityGuideCard, Pagination, Footer5],
  templateUrl: './side-filters.html',
  styles: ``,
})
export class SideFilters {}
