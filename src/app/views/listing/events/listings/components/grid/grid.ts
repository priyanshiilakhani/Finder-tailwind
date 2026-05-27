import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { eventCardData } from '../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'event-listing-grid',
  imports: [RouterLink],
  templateUrl: './grid.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Grid {
  eventCardData = eventCardData;
}
