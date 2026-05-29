import { Component } from '@angular/core';
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { Hero } from "./components/hero/hero";
import { HelpTopics } from "./components/help-topics/help-topics";
import { PopularArticles } from "./components/popular-articles/popular-articles";
import { Faq } from "./components/faq/faq";
import { Footer } from "@app/components/footer/footer/footer";

@Component({
  selector: 'app-help-v1',
  imports: [Navbar2, Hero, HelpTopics, PopularArticles, Faq, Footer],
  templateUrl: './help-v1.html',
  styles: ``,
})
export class HelpV1 {}
