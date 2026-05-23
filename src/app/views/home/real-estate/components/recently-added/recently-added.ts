import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoriesData, propertyListData } from '../../data';

@Component({
  selector: 'real-estate-recently-added',
  imports: [RouterLink],
  templateUrl: './recently-added.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RecentlyAdded {
  CategoriesData = CategoriesData;
  propertyListData = propertyListData;
  largeProperty = this.propertyListData.find((item) => item.large);
  smallProperties = this.propertyListData.filter((item) => !item.large);
}
