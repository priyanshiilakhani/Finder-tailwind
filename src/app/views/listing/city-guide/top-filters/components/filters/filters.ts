import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { FlatpickrDirective } from "angularx-flatpickr";
import { priceRangeFilterData, propertyTypeFilterData } from '../../data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'top-filters-filters',
  imports: [LucideAngularModule, RouterLink, FlatpickrDirective, FormsModule],
  templateUrl: './filters.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Filters {
  flatPickrOptions = {
    dateFormat: 'M j, Y',
    monthSelectorType: 'dropdown' as const,
  };

  typeDropdownOpen = false;
  priceDropdownOpen = false;

  propertyTypeFilterData = propertyTypeFilterData;
  priceRangeFilterData = priceRangeFilterData;

  get typeCount(): number {
    return this.propertyTypeFilterData.filter((item) => item.checked).length;
  }

  get priceCount(): number {
    return this.priceRangeFilterData.filter((item) => item.checked).length;
  }

  toggleTypeDropdown() {
    this.typeDropdownOpen = !this.typeDropdownOpen;
  }

  togglePriceDropdown() {
    this.priceDropdownOpen = !this.priceDropdownOpen;
  }
}
