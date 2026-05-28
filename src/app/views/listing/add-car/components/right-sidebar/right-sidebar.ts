import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { actionButtonsData, vehicleDetailsData } from '../../data';

@Component({
  selector: 'add-car-right-sidebar',
  imports: [RouterLink],
  templateUrl: './right-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class RightSidebar {
  actionButtonsData = actionButtonsData;
  vehicleDetailsData = vehicleDetailsData;
}
