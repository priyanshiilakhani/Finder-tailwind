import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { helpCategoryData } from '../../data';

@Component({
  selector: 'help-v3-help-topics',
  imports: [RouterLink],
  templateUrl: './help-topics.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class HelpTopics {
  helpCategoryData = helpCategoryData;

  toggleCollapse(collapseId: string): void {
    document.getElementById(collapseId)?.classList.toggle('hidden');
  }
}
