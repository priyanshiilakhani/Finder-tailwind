import { Component } from '@angular/core';
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { Hero } from "./components/hero/hero";
import { Features } from "./components/features/features";
import { Accordion } from "./components/accordion/accordion";
import { PartnerLogos } from "./components/partner-logos/partner-logos";
import { FeatureCards } from "./components/feature-cards/feature-cards";
import { CEOAddress } from "./components/ceo-address/ceo-address";
import { Testimonials } from "./components/testimonials/testimonials";
import { BlogPosts } from "./components/blog-posts/blog-posts";
import { Footer } from "@app/components/footer/footer/footer";

@Component({
  selector: 'about-v1',
  imports: [Navbar2, Hero, Features, Accordion, PartnerLogos, FeatureCards, CEOAddress, Testimonials, BlogPosts, Footer],
  templateUrl: './v1.html',
  styles: ``,
})

export class V1 {}
