import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'doctors-grid-results-toolbar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './results-toolbar.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ResultsToolbar {}
