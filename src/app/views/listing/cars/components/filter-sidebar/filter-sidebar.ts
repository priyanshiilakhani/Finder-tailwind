import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { bodyTypeData, carCategoryData, colorData, drivetrainData, fuelTypeData, locationOptionsData, makeOptionsData, modelOptionsData, radiusOptionsData, sellersData, transmissionData, yearOptionsData } from '../../grid/data';
import { NouisliderComponent } from "ng2-nouislider";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'grid-filter-sidebar',
  imports: [RouterLink, NouisliderComponent, FormsModule],
  templateUrl: './filter-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class FilterSidebar {
  priceRange: number[] = [10000, 70000];
  tooltips = [
    {
      to: (value: number) => `$${Math.round(value)}`,
    },
    {
      to: (value: number) => `$${Math.round(value)}`,
    },
  ];
  carCategoryData = carCategoryData;
  locationOptionsData = locationOptionsData;
  radiusOptionsData = radiusOptionsData;
  bodyTypeData = bodyTypeData;
  yearOptionsData = yearOptionsData;
  makeOptionsData = makeOptionsData;
  modelOptionsData = modelOptionsData;
  drivetrainData = drivetrainData;
  fuelTypeData = fuelTypeData;
  transmissionData = transmissionData;
  colorData = colorData;
  sellersData = sellersData;
}
