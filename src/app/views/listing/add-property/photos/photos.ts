import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar7 } from '@app/components/header/navbar7/navbar7';
import { PropertySidebar } from '../components/property-sidebar/property-sidebar';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { propertyGalleryData } from './data';

@Component({
  selector: 'app-photos',
  imports: [Navbar7, PropertySidebar, RouterLink, LucideAngularModule],
  templateUrl: './photos.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Photos {
  propertyGalleryData = propertyGalleryData;
}
