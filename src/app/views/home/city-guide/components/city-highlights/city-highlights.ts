import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { placesData, restaurantsData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'city-guide-city-highlights',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './city-highlights.html',
  styles: ``,
})

export class CityHighlights {
  restaurantsData = restaurantsData;
  placesData = placesData;
}
