import { Component } from '@angular/core';
import { Navbar4 } from "@app/components/header/navbar4/navbar4";
import { Hero } from "./components/hero/hero";
import { HelpTopics } from "./components/help-topics/help-topics";
import { Guides } from "./components/guides/guides";
import { FAQ } from "./components/faq/faq";
import { CTA } from "./components/cta/cta";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'app-help-v3',
  imports: [Navbar4, Hero, HelpTopics, Guides, FAQ, CTA, Footer3],
  templateUrl: './help-v3.html',
  styles: ``,
})
export class HelpV3 {}
