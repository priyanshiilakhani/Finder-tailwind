import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'real-estate-listings-property-filter',
  imports: [LucideAngularModule, FormsModule],
  templateUrl: './property-filter.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PropertyFilter {
  homeTypeDropdownOpen = false;

  homeTypeData = [
    {
      id: 'apartments',
      label: 'Apartments',
      count: 621,
      checked: true,
    },
    {
      id: 'hostels',
      label: 'Hostels',
      count: 83,
      checked: false,
    },
    {
      id: 'cabins',
      label: 'Condos',
      count: 283,
      checked: false,
    },
    {
      id: 'villas',
      label: 'Townhomes',
      count: 346,
      checked: false,
    },
  ];

  get selectedHomeTypeCount(): number {
    return this.homeTypeData.filter((item) => item.checked).length;
  }

  toggleHomeTypeDropdown() {
    this.homeTypeDropdownOpen = !this.homeTypeDropdownOpen;
  }
}
