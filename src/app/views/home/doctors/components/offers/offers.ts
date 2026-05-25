import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { offersData } from '../../data';

@Component({
  selector: 'doctors-offers',
  imports: [RouterLink],
  templateUrl: './offers.html',
  styles: ``,
})
export class Offers {
  offersData = offersData;
}
