import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { categoriesData } from '../../data';

@Component({
  selector: 'city-guide-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  categoriesData = categoriesData;
}
