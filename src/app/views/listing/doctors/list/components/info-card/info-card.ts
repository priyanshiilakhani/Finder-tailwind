import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { doctorinfoData } from '../../data';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'doctors-list-info-card',
  imports: [RouterLink, LucideAngularModule,DecimalPipe],
  templateUrl: './info-card.html',
  styles: ``,
})
export class InfoCard {
  doctorinfoData = doctorinfoData;
}
