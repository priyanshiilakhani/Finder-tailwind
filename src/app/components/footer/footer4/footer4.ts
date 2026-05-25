import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerData4 } from '../data';

@Component({
  selector: 'app-footer4',
  imports: [RouterLink],
  templateUrl: './footer4.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer4 {
  footerData4 = footerData4;
}
