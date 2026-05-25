import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { medicalCategoryData } from '../../data';

@Component({
  selector: 'doctors-searches',
  imports: [RouterLink],
  templateUrl: './searches.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Searches {
  medicalCategoryData = medicalCategoryData;
}
