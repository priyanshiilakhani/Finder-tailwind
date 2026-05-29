import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { sellingCarData } from '../../data';

@Component({
  selector: 'help-v2-selling-car',
  imports: [RouterLink],
  templateUrl: './selling-car.html',
  styles: ``,
})
  
export class SellingCar {
  sellingCarData = sellingCarData;
}