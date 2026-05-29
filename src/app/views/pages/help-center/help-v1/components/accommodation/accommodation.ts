import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { helpArticleData } from '../../data';

@Component({
  selector: 'app-accommodation',
  imports: [RouterLink],
  templateUrl: './accommodation.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Accommodation {
  helpArticleData = helpArticleData;
}
