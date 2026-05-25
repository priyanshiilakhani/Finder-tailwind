import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { adviceData } from '../../data';

@Component({
  selector: 'app-expert-advice',
  imports: [RouterLink],
  templateUrl: './expert-advice.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExpertAdvice {
  adviceData = adviceData;
}
