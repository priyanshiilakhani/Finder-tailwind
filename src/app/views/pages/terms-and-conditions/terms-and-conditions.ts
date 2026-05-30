import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { RouterLink } from "@angular/router";
import { Footer } from "@app/components/footer/footer/footer";

@Component({
  selector: 'app-terms-and-conditions',
  imports: [Navbar2, RouterLink, Footer],
  templateUrl: './terms-and-conditions.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class TermsAndConditions {}
