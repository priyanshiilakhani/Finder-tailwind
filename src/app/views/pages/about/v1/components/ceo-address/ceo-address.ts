import { Component } from '@angular/core';
import { statisticsData } from '../../data';

@Component({
  selector: 'about-v1-ceo-address',
  imports: [],
  templateUrl: './ceo-address.html',
  styles: ``,
})

export class CEOAddress {
  statisticsData = statisticsData;
}
