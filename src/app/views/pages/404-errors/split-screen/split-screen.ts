import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { splitScreenData } from './data';

@Component({
  selector: 'app-split-screen',
  imports: [RouterLink],
  templateUrl: './split-screen.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class SplitScreen {
  splitScreenData = splitScreenData;
}
