import { Component } from '@angular/core';
import { Navbar3 } from "@app/components/header/navbar3/navbar3";
import { Hero } from "./components/hero/hero";
import { Categories } from "./components/categories/categories";
import { Offers } from "./components/offers/offers";
import { Brands } from "./components/brands/brands";
import { PopularCategories } from "./components/popular-categories/popular-categories";
import { Features } from "./components/features/features";
import { Listings } from "./components/listings/listings";
import { Accessories } from "./components/accessories/accessories";
import { Videos } from "./components/videos/videos";

@Component({
  selector: 'app-cars',
  imports: [
    Navbar3, Hero,
    Categories,
    Offers,
    Brands,
    PopularCategories,
    Features,
    Listings,
    Accessories,
    Videos,
  ],
  templateUrl: './cars.html',
  styles: ``,
})
  
export class Cars {}
