import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar8 } from "@app/components/header/navbar8/navbar8";
import { Footer } from "@app/components/footer/footer/footer";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { paymentCardData } from './data';
import { PaymentContent } from "./components/payment-content/payment-content";
import { PaymentModal } from "./components/payment-modal/payment-modal";

@Component({
  selector: 'app-payment',
  imports: [Navbar8, AccountSidebar, PaymentContent, Footer, PaymentModal],
  templateUrl: './payment.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Payment {
  paymentCardData = paymentCardData;
}
