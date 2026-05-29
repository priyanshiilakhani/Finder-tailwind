import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { cancellationArticleData } from '../../data';

@Component({
  selector: 'app-cancellation',
  imports: [RouterLink],
  templateUrl: './cancellation.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Cancellation {
  cancellationArticleData = cancellationArticleData;
}
