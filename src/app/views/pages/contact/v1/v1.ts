import { Component } from '@angular/core';
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { Hero } from "./components/hero/hero";
import { Locations } from "./components/locations/locations";
import { Faqs } from "./components/faqs/faqs";
import { Footer } from "@app/components/footer/footer/footer";

@Component({
  selector: 'contact-v1',
  imports: [Navbar2, Hero, Locations, Faqs, Footer],
  templateUrl: './v1.html',
  styles: ``,
})
export class V1 {}
