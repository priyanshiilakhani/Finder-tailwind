import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { homeDemoData } from '../../data';

@Component({
  selector: 'landing-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Hero {
  homeDemoData = homeDemoData;
}
