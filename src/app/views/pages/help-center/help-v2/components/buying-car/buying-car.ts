import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { supportCards } from '../../data';

@Component({
  selector: 'help-v2-buying-car',
  imports: [RouterLink],
  templateUrl: './buying-car.html',
  styles: ``,
})
  
export class BuyingCar {
  supportCards = supportCards;
}
