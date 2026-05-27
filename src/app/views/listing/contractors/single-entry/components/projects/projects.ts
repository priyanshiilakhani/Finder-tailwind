import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { categoryTagsData, projectsData } from '../../data';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './projects.html',
  styles: ``,
})
export class Projects {
  categoryTagsData = categoryTagsData;
  projectsData = projectsData;
}
