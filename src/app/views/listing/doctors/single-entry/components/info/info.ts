import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { cardiologyServicesData, clinicLocationsData } from '../../data';
import { RouterLink } from "@angular/router";
import { Reviews } from "../reviews/reviews";

@Component({
  selector: 'doctors-single-entry-info',
  imports: [LucideAngularModule, RouterLink, Reviews],
  templateUrl: './info.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Info {
  cardiologyServicesData = cardiologyServicesData;
  clinicLocationsData = clinicLocationsData;
}
