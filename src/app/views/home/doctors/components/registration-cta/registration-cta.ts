import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ctaData } from '../../data';

@Component({
  selector: 'doctors-registration-cta',
  imports: [RouterLink],
  templateUrl: './registration-cta.html',
  styles: ``,
})
export class RegistrationCta {
  ctaData = ctaData;
}
