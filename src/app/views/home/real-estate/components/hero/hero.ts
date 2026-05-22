import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
@Component({
  selector: 'real-estate-hero',
  imports: [NouisliderModule, FormsModule],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  productRange = 2000;
  priceFormat = {
    to: (value: number) => {
      return '$' + Math.round(value);
    },
    from: (value: string) => {
      return Number(value.replace('$', ''));
    },
  };
}
