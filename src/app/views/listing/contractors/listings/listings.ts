import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar } from "@app/components/header/navbar/navbar";
import { Footer2 } from "@app/components/footer/footer2/footer2";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { LeftSidebar } from "./components/left-sidebar/left-sidebar";
import { List } from "./components/list/list";

@Component({
  selector: 'contractors-listings',
  imports: [Navbar, Footer2, Breadcrumb, LeftSidebar, List],
  templateUrl: './listings.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Listings {}
