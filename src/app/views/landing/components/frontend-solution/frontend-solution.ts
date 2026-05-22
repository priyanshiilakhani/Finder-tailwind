import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { featureData } from '../../data';

@Component({
  selector: 'landing-frontend-solution',
  imports: [],
  templateUrl: './frontend-solution.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class FrontendSolution {
  featureData = featureData;
}
