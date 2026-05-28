import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { carBodyData } from '../../data';

@Component({
  selector: 'add-car-basic-information',
  imports: [],
  templateUrl: './basic-information.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class BasicInformation {
  carBodyData = carBodyData;
}
