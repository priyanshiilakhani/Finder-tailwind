import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { Principles } from "./components/principles/principles";
import { Story } from "./components/story/story";
import { Testimonials } from "./components/testimonials/testimonials";
import { InfoColumns } from "./components/info-columns/info-columns";
import { Cta } from "./components/cta/cta";
import { Partners } from "./components/partners/partners";
import { Navbar } from "@app/components/header/navbar/navbar";
import { Footer } from "@app/components/footer/footer/footer";

@Component({
  selector: 'about-v2',
  imports: [Hero, Features, Principles, Story, Testimonials, InfoColumns, Cta, Partners, Navbar, Footer],
  templateUrl: './v2.html',
  styles: ``,
})
export class V2 {}
