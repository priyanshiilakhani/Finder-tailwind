import { Component } from '@angular/core';
import { Navbar } from "@app/components/header/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Details } from "./components/details/details";
import { Form } from "./components/form/form";
import { PartnerLogos } from "./components/partner-logos/partner-logos";
import { Footer2 } from "@app/components/footer/footer2/footer2";

@Component({
  selector: 'contact-v2',
  imports: [Navbar, Hero, Details, Form, PartnerLogos, Footer2],
  templateUrl: './v2.html',
  styles: ``,
})
export class V2 {}
