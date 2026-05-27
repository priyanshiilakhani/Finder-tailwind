import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { contractorGalleryData } from '../../data';
import { GlightboxDirective } from "@/app/directive/glightbox.directive";

@Component({
  selector: 'app-image-section',
  imports: [GlightboxDirective],
  templateUrl: './image-section.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageSection {
  contractorGalleryData = contractorGalleryData;
}
