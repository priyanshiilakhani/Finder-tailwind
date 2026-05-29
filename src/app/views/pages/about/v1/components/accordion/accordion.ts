import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { accordionData } from '../../data';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'about-v1-accordion',
  imports: [LucideAngularModule],
  templateUrl: './accordion.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Accordion {
  accordionData = accordionData;
}
