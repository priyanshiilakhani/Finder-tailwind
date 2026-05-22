import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Navbar1 } from "@app/components/header/navbar1/navbar1";
import { FrontendSolution } from "./components/frontend-solution/frontend-solution";
import { Comparison } from "./components/comparison/comparison";
import { Features } from "./components/features/features";
import { MobilePwa } from "./components/mobile-pwa/mobile-pwa";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-landing',
  imports: [Hero, Navbar1, FrontendSolution, Comparison, Features, MobilePwa, Cta, Footer],
  templateUrl: './landing.html',
  styles: ``,
})
export class Landing {}
