import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'single-v1-help-topics',
  imports: [RouterLink],
  templateUrl: './help-topics.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class HelpTopics {}
