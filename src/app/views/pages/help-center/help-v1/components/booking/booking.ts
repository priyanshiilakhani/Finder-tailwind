import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { bookingArticleData } from '../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking',
  imports: [RouterLink],
  templateUrl: './booking.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Booking {
  bookingArticleData = bookingArticleData;
}
