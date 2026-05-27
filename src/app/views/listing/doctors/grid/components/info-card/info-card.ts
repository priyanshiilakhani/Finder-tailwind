import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { doctorInfoData } from '../../data';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'doctors-grid-info-card',
  imports: [LucideAngularModule,DecimalPipe,RouterLink],
  templateUrl: './info-card.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class InfoCard {
  doctorInfoData = doctorInfoData;
}
