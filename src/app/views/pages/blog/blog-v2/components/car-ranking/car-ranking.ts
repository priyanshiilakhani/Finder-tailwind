import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { carCategoriesData, carListData } from '../../data';

@Component({
  selector: 'blog-v2-car-ranking',
  imports: [RouterLink],
  templateUrl: './car-ranking.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarRanking {
  carCategoriesData = carCategoriesData;
  carListData = carListData;
}
