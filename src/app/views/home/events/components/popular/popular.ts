import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { eventsData } from '../../data';

@Component({
  selector: 'events-popular',
  imports: [RouterLink],
  templateUrl: './popular.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Popular {
  eventsData = eventsData;

  featuredEvent = this.eventsData.find((item) => item.featured);

  sideEvents = this.eventsData.filter((item) => !item.featured);
}
