import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { reviewData } from '../../data';

@Component({
  selector: 'single-city-guide-reviews',
  imports: [LucideAngularModule],
  templateUrl: './reviews.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Reviews {
  reviewData = reviewData;
  Math = Math;
}
