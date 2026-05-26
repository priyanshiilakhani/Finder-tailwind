import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { restaurantListData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'city-guide-restaurants',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './restaurants.html',
  styles: ``,
})
export class Restaurants {
  restaurantListData = restaurantListData;
}
