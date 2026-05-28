import { Component, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-property-sidebar',
  imports: [LucideAngularModule],
  templateUrl: './property-sidebar.html',
  styles: ``,
})
export class PropertySidebar {
  @Input() currentStepIndex: number = 0;
  steps = [
    'Property type',
    'Location',
    'Photos and videos',
    'Property details',
    'Price',
    'Contact info',
    'Ad promotion'
  ];
}
