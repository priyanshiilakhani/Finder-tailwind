import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { placeCardData } from '../../data';

@Component({
  selector: 'single-city-guide-top-places',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './top-places.html',
  styles: ``,
})
  
export class TopPlaces {
  placeCardData = placeCardData;
  Math = Math;
}
