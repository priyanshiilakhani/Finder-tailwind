import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { categoriesData, moreItemsData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'real-estate-categories',
  imports: [RouterLink],
  templateUrl: './categories.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Categories {
  categoriesData = categoriesData;
  moreItemsData = moreItemsData;
}
