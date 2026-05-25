import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { projectsData } from '../../data';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, LucideAngularModule,DecimalPipe],
  templateUrl: './projects.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Projects {
  projectsData = projectsData;
}
