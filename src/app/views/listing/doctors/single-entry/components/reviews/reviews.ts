import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ratingProgressData, reviewsData } from '../../data';
import { Pagination } from "../pagination/pagination";

@Component({
  selector: 'doctors-single-entry-reviews',
  imports: [LucideAngularModule, Pagination],
  templateUrl: './reviews.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Reviews {
  ratingProgressData = ratingProgressData;
  reviewsData = reviewsData;
}
