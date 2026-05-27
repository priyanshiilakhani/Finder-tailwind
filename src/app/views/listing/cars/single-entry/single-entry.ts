import { Component } from '@angular/core';
import { Navbar3 } from "@app/components/header/navbar3/navbar3";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Hero } from "./components/hero/hero";
import { CarDetails } from "./components/car-details/car-details";
import { SimilarListings } from "./components/similar-listings/similar-listings";
import { Footer1 } from "@app/components/footer/footer1/footer1";

@Component({
  selector: 'cars-single-entry',
  imports: [Navbar3, Breadcrumb, Hero, CarDetails, SimilarListings, Footer1],
  templateUrl: './single-entry.html',
  styles: ``,
})
export class SingleEntry {}
