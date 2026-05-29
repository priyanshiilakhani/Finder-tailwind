import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar8 } from "@app/components/header/navbar8/navbar8";
import { Footer } from "@app/components/footer/footer/footer";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { ReviewsContent } from "./components/reviews-content/reviews-content";

@Component({
  selector: 'app-reviews',
  imports: [Navbar8, AccountSidebar, ReviewsContent, Footer],
  templateUrl: './reviews.html',
  styles: ``,
})
  
export class Reviews {}
