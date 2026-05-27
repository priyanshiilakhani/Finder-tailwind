import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { budgetData, featuresData, ratingsData, servicesData } from '../../data';

@Component({
  selector: 'contractors-listings-left-sidebar',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './left-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LeftSidebar {
  servicesData = servicesData;
  budgetData = budgetData;
  featuresData = featuresData;
  ratingsData = ratingsData;
}
