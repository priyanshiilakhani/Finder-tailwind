import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'real-estate-vendor-details',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './details.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Details {}
