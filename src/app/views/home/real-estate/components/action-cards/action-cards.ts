import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { actioncardsData } from '../../data';
import { register } from 'swiper/element/bundle';
import { RouterLink } from "@angular/router";
register();

@Component({
  selector: 'real-estate-action-cards',
  imports: [RouterLink],
  templateUrl: './action-cards.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActionCards {
  actioncardsData = actioncardsData;
}
