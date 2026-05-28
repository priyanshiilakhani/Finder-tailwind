import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { GlightboxDirective } from "@/app/directive/glightbox.directive";

@Component({
  selector: 'single-city-guide-place-details',
  imports: [RouterLink, LucideAngularModule, GlightboxDirective],
  templateUrl: './place-details.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class PlaceDetails {}
