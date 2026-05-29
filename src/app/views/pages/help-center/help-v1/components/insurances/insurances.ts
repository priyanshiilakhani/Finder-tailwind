import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { insuranceArticleData } from '../../data';

@Component({
  selector: 'app-insurances',
  imports: [RouterLink],
  templateUrl: './insurances.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Insurances {
  insuranceArticleData = insuranceArticleData;
}
