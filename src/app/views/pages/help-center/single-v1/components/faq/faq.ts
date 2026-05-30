import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { faqData } from '../../data';

@Component({
  selector: 'single-v1-faq',
  imports: [RouterLink],
  templateUrl: './faq.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class FAQ {
  faqData = faqData;
}
