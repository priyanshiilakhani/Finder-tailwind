import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar4 } from '@app/components/header/navbar4/navbar4';
import { Footer3 } from '@app/components/footer/footer3/footer3';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';
import { Appointment } from './components/appointment/appointment';
import { Info } from './components/info/info';
import { NearbyDoctors } from './components/nearby-doctors/nearby-doctors';

@Component({
  selector: 'doctors-single-entry',
  imports: [Navbar4, Footer3, Breadcrumb, Appointment, Info, NearbyDoctors],
  templateUrl: './single-entry.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SingleEntry {}
