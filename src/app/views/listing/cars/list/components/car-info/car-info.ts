import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { carListingData } from '../../data';

@Component({
  selector: 'list-car-info',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './car-info.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class CarInfo {
  carListingData = carListingData;
}
