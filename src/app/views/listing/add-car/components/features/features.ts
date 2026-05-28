import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { accordionData } from '../../data';

@Component({
  selector: 'add-car-features',
  imports: [RouterLink],
  templateUrl: './features.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class Features {
  accordionData = accordionData;
}
