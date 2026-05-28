import { Component } from '@angular/core';
import { Navbar7 } from "@app/components/header/navbar7/navbar7";
import { BusinessSteps } from "../components/business-steps/business-steps";
import { Content } from "./components/content/content";
import { Footer2 } from "@app/components/footer/footer2/footer2";
import { AddPayment } from "./components/add-payment/add-payment";

@Component({
  selector: 'app-price-hours',
  imports: [Navbar7, BusinessSteps, Content, Footer2, AddPayment],
  templateUrl: './price-hours.html',
  styles: ``,
})
export class PriceHours {}
