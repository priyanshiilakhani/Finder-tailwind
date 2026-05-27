import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { additionalOptionData, bathroomData, bedroomData, homeTypeData, leftAmenityData, petData, rightAmenityData, yearData } from '../../data';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'real-estate-listings-filter-modal',
  imports: [LucideAngularModule, FormsModule, RouterLink],
  templateUrl: './filter-modal.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class FilterModal {
  homeTypeData = homeTypeData;
  bedroomData = bedroomData;
  bathroomData = bathroomData;
  leftAmenityData = leftAmenityData;
  rightAmenityData = rightAmenityData;
  yearData = yearData;
  petData = petData;
  additionalOptionData = additionalOptionData;

  isHomeTypeDropdownOpen = false;

  toggleHomeTypeDropdown() {
    this.isHomeTypeDropdownOpen = !this.isHomeTypeDropdownOpen;
  }

  get selectedHomeTypeCount(): number {
    return this.homeTypeData.filter((item) => item.checked).length;
  }
}
