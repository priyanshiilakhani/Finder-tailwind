import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { propertySections } from '../../data';

@Component({
  selector: 'app-listings-content',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './listings-content.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class ListingsContent {
  propertySections = propertySections;
}
