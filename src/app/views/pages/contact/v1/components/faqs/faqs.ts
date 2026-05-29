import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { faqData } from '../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'contact-v1-faqs',
  imports: [RouterLink],
  templateUrl: './faqs.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Faqs {
  faqData = faqData;
}
