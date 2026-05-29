import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { paymentCardData } from '../../data';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-payment-content',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './payment-content.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class PaymentContent {
  paymentCardData = paymentCardData;
}
