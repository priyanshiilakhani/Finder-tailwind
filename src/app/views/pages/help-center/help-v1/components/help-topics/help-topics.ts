import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Accommodation } from "../accommodation/accommodation";
import { Booking } from "../booking/booking";
import { Payment } from "../payment/payment";
import { AfterBooking } from "../after-booking/after-booking";
import { Cancellation } from "../cancellation/cancellation";
import { Regulations } from "../regulations/regulations";
import { Insurances } from "../insurances/insurances";
import { supportTabData } from '../../data';

@Component({
  selector: 'help-v1-help-topics',
  imports: [
    RouterLink,
    Accommodation,
    Booking,
    Payment,
    AfterBooking,
    Cancellation,
    Regulations,
    Insurances,
  ],
  templateUrl: './help-topics.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class HelpTopics {
  supportTabData = supportTabData;
}
