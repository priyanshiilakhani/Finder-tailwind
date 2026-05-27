import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { FlatpickrDirective } from 'angularx-flatpickr';

@Component({
  selector: 'event-listing-filter',
  imports: [LucideAngularModule, RouterLink, FlatpickrDirective],
  templateUrl: './filter.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Filter {
  flatPickrOptions = {
    dateFormat: 'M j, Y',
    defaultDate: new Date(),
    monthSelectorType: 'dropdown' as const,
  };
}
