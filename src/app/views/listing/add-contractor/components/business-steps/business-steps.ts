import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

type ContractorStepType = {
  title: string;
  icon: string;
  completedIcon: string;
  route: string;
};

@Component({
  selector: 'add-contractor-business-steps',
  imports: [RouterLink],
  templateUrl: './business-steps.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BusinessSteps {
  constructor(private router: Router) {}

  contractorStepData: ContractorStepType[] = [
    {
      title: 'Business location',
      icon: 'lucide:map',
      completedIcon: 'lucide:circle-check-big',
      route: '/add-contractor/location',
    },
    {
      title: 'Choose services',
      icon: 'lucide:swatch-book',
      completedIcon: 'lucide:circle-check-big',
      route: '/add-contractor/services',
    },
    {
      title: 'Profile details',
      icon: 'lucide:user-check',
      completedIcon: 'lucide:circle-check-big',
      route: '/add-contractor/profile',
    },
    {
      title: 'Price and hours',
      icon: 'lucide:clock',
      completedIcon: 'lucide:circle-check-big',
      route: '/add-contractor/price',
    },
    {
      title: 'Create first project',
      icon: 'lucide:layout-grid',
      completedIcon: 'lucide:circle-check-big',
      route: '/add-contractor/project',
    },
  ];

  get currentStep(): number {
    return this.contractorStepData.findIndex((item) => this.router.url.includes(item.route));
  }
}
