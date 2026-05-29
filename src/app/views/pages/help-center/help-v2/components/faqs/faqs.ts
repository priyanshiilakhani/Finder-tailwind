import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { popularFaqData } from '../../data';

@Component({
  selector: 'help-v2-faqs',
  imports: [],
  templateUrl: './faqs.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Faqs {
  popularFaqData = popularFaqData;
}
