import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'doctors-list-results-toolbar',
  imports: [LucideAngularModule],
  templateUrl: './results-toolbar.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ResultsToolbar {}
