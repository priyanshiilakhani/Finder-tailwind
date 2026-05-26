import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { amenitiesData, nearbyCategoriesData, transportScoreData, propertyDetailsData } from '../../data';

@Component({
  selector: 'real-estate-single-entry-property-detail',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './property-detail.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PropertyDetail {
  amenitiesData = amenitiesData;
  transportScoreData = transportScoreData;
  nearbyCategoriesData = nearbyCategoriesData;
  propertyDetailsData = propertyDetailsData;
}
