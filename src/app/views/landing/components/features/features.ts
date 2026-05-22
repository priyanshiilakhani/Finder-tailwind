import { Component } from '@angular/core';
import { featureGridData } from '../../data';

@Component({
  selector: 'landing-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})

export class Features {
  featureGridData = featureGridData;
}
