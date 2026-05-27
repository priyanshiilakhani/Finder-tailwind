import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { cityGuideCardData } from '../../data';

@Component({
  selector: 'side-filters-city-guide-card',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './city-guide-card.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class CityGuideCard {
  Math = Math;
  cityGuideCardData = cityGuideCardData;
}
