import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { reviewsData } from '../../data';

@Component({
  selector: 'app-reviews',
  imports: [LucideAngularModule],
  templateUrl: './reviews.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Reviews {
  reviewsData = reviewsData;
}
