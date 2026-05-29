import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GlightboxDirective } from "@/app/directive/glightbox.directive";

@Component({
  selector: 'about-v1-feature-cards',
  imports: [RouterLink, GlightboxDirective],
  templateUrl: './feature-cards.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class FeatureCards {}
