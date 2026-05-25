import { Component } from '@angular/core';
import { featuresData, statisticsData } from '../../data';

@Component({
  selector: 'doctors-benefits',
  imports: [],
  templateUrl: './benefits.html',
  styles: ``,
})
export class Benefits {
  featuresData = featuresData;
  statisticsData = statisticsData;
}
