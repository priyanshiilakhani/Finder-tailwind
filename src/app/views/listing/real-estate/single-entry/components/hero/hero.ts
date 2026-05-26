import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { galleryData } from '../../data';
import { GlightboxDirective } from '@/app/directive/glightbox.directive';

@Component({
  selector: 'real-estate-single-entry-hero',
  imports: [GlightboxDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  galleryData = galleryData;
}
