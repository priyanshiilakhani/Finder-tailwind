import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { reviewsData } from '../../data';
import { GlightboxDirective } from "@/app/directive/glightbox.directive";

@Component({
  selector: 'real-estate-vendor-reviews',
  imports: [RouterLink, LucideAngularModule, GlightboxDirective],
  templateUrl: './reviews.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Reviews {
  reviewsData = reviewsData;
}
