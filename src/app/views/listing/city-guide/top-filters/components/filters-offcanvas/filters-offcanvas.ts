import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlatpickrDirective } from 'angularx-flatpickr';
import { LucideAngularModule } from "lucide-angular";
import { amenityFilterData, priceRangeFilterData, ratingFilterData, roomFacilityFilterData } from '../../data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'top-filters-offcanvas',
  imports: [LucideAngularModule, FlatpickrDirective, FormsModule],
  templateUrl: './filters-offcanvas.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class FiltersOffcanvas {
  flatPickrOptions = {
    dateFormat: 'M j, Y',
    monthSelectorType: 'dropdown' as const,
  };

  priceDropdownOpen = false;

  priceRangeFilterData = priceRangeFilterData;
  roomFacilityFilterData = roomFacilityFilterData;
  amenityFilterData = amenityFilterData;
  ratingFilterData = ratingFilterData;

  get priceCount(): number {
    return this.priceRangeFilterData.filter((item) => item.checked).length;
  }

  get facilitiesCount(): number {
    return this.roomFacilityFilterData.filter((item) => item.checked).length;
  }

  get amenitiesCount(): number {
    return this.amenityFilterData.filter((item) => item.checked).length;
  }

  get ratingCount(): number {
    return this.ratingFilterData.filter((item) => item.checked).length;
  }

  togglePriceDropdown() {
    this.priceDropdownOpen = !this.priceDropdownOpen;
  }
}
