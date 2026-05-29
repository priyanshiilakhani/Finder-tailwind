import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'help-v2-right-sidebar',
  imports: [RouterLink],
  templateUrl: './right-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class RightSidebar {}
