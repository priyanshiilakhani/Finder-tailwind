import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar7 } from '@app/components/header/navbar7/navbar7';
import { LucideAngularModule } from 'lucide-angular';
import { propertyCategoryData, propertyTypeData } from './data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PropertySidebar } from '../components/property-sidebar/property-sidebar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'add-property-type',
  imports: [Navbar7, LucideAngularModule, PropertySidebar, RouterLink],
  templateUrl: './type.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Type {
  propertyTypeData = propertyTypeData;
  propertyCategoryData = propertyCategoryData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
