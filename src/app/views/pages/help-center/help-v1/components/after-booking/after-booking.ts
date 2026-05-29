import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { afterBookingArticleData } from '../../data';

@Component({
  selector: 'app-after-booking',
  imports: [RouterLink],
  templateUrl: './after-booking.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class AfterBooking {
  afterBookingArticleData = afterBookingArticleData;
}
