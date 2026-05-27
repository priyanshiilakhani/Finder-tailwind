import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { carListingData } from '../../data';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'grid-car-list',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './car-list.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class CarList {
  carListingData = carListingData;
}
