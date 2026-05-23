import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

type footerType = {
  title: string;
  links: string[];
};

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer {
  footerData: footerType[] = [
    {
      title: 'Quick links',
      links: [
        'Daily rental',
        'Long-term rental',
        'Buy property',
        'Sell property',
        'Popular offers',
      ],
    },
    {
      title: 'Profile',
      links: ['My account', 'My listings', 'Add listings', 'Help center', 'Privacy policy'],
    },
  ];
}
