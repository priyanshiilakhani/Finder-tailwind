import { Component } from '@angular/core';
import { CoverImage } from "./components/cover-image/cover-image";
import { Details } from "./components/details/details";
import { Properties } from "./components/properties/properties";
import { Reviews } from "./components/reviews/reviews";
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { Footer } from "@app/components/footer/footer/footer";

@Component({
  selector: 'app-vendor',
  imports: [CoverImage, Details, Properties, Reviews, Navbar2, Footer],
  templateUrl: './vendor.html',
  styles: ``,
})
export class Vendor {}
