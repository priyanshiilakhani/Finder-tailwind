import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'single-entry-right-sidebar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './right-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class RightSidebar {}
