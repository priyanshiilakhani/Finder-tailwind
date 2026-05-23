import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { servicesData } from '../../data';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Hero {
  servicesData = servicesData;
}
