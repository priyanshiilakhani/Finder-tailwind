import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { reviewaboutData, reviewbyyouData } from '../../data';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reviews-content',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './reviews-content.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class ReviewsContent {
  reviewaboutData = reviewaboutData;
  reviewbyyouData = reviewbyyouData;
  Math = Math;
}
