import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar4 } from "@app/components/header/navbar4/navbar4";
import { Hero } from "./components/hero/hero";
import { ArticleContent } from "./components/article-content/article-content";
import { Cta } from "./components/cta/cta";
import { Footer3 } from "@app/components/footer/footer3/footer3";

@Component({
  selector: 'help-center-single-v3',
  imports: [Navbar4, Hero, ArticleContent, Cta, Footer3],
  templateUrl: './single-v3.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class SingleV3 {}
