import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { regulationArticleData } from '../../data';

@Component({
  selector: 'app-regulations',
  imports: [RouterLink],
  templateUrl: './regulations.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Regulations {
  regulationArticleData = regulationArticleData;
}
