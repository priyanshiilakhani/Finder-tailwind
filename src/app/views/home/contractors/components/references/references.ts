import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { referencesData } from '../../data';

@Component({
  selector: 'app-references',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './references.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class References {
  referencesData = referencesData;
}
