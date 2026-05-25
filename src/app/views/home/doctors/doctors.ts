import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Searches } from "./components/searches/searches";
import { Offers } from "./components/offers/offers";
import { Consultations } from "./components/consultations/consultations";
import { Steps } from "./components/steps/steps";
import { Benefits } from "./components/benefits/benefits";
import { News } from "./components/news/news";
import { RegistrationCta } from "./components/registration-cta/registration-cta";
import { MobileCta } from "./components/mobile-cta/mobile-cta";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Navbar4 } from "@app/components/header/navbar4/navbar4";

@Component({
  selector: 'app-doctors',
  imports: [Hero, Searches, Offers, Consultations, Steps, Benefits, News, RegistrationCta, MobileCta, Footer3, Navbar4],
  templateUrl: './doctors.html',
  styles: ``,
})
export class Doctors {}
