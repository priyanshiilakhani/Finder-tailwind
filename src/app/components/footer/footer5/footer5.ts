import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerData5 } from '../data';

@Component({
  selector: 'app-footer5',
  imports: [RouterLink],
  templateUrl: './footer5.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer5 {
  footerData5 = footerData5;
}
