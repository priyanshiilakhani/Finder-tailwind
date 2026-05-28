import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar7 } from '@app/components/header/navbar7/navbar7';
import { PropertySidebar } from '../components/property-sidebar/property-sidebar';
import { LucideAngularModule } from 'lucide-angular';
import { propertyOptionsData, userData } from './data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'add-property-price',
  imports: [Navbar7, PropertySidebar, LucideAngularModule, RouterLink],
  templateUrl: './price.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Price {
  userData = userData;
  propertyOptionsData = propertyOptionsData;
}
