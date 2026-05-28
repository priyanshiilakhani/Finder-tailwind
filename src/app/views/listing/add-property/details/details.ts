import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar7 } from '@app/components/header/navbar7/navbar7';
import { PropertySidebar } from '../components/property-sidebar/property-sidebar';
import { amenitiesData, propertyFeaturesData, propertyTypeData } from './data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [Navbar7, PropertySidebar, RouterLink],
  templateUrl: './details.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Details {
  propertyTypeData = propertyTypeData;
  propertyFeaturesData = propertyFeaturesData;
  amenitiesData = amenitiesData;
}
