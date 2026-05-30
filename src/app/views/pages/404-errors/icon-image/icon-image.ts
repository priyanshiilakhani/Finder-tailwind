import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar3 } from "@app/components/header/navbar3/navbar3";
import { LucideAngularModule } from "lucide-angular";
import { supportFeatureData } from './data';

@Component({
  selector: 'app-icon-image',
  imports: [Navbar3, LucideAngularModule, RouterLink],
  templateUrl: './icon-image.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class IconImage {
  supportFeatureData = supportFeatureData;
}
