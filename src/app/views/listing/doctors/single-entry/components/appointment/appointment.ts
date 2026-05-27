import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { visitTimeSlotsData } from '../../data';

@Component({
  selector: 'doctors-single-entry-appointment',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './appointment.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Appointment {
  visitTimeSlotsData = visitTimeSlotsData;
}
