import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-hero',
  imports: [LucideAngularModule],
  templateUrl: './hero.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Hero {}
