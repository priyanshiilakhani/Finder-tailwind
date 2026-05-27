import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FlatpickrDirective } from 'angularx-flatpickr';
import { LucideAngularModule } from "lucide-angular";
import { NouisliderComponent } from "ng2-nouislider";
import { categoryItemData } from '../../data';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'side-filters-account-sidebar',
  imports: [
    RouterLink,
    LucideAngularModule,
    NouisliderComponent,
    FormsModule,
    FlatpickrDirective,
    CommonModule,
  ],
  templateUrl: './account-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class AccountSidebar {
  categoryItemData = categoryItemData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  
  priceRange: number[] = [20, 150];
  tooltips = [
    {
      to: (value: number) => `$${Math.round(value)}`,
    },
    {
      to: (value: number) => `$${Math.round(value)}`,
    },
  ];

  flatPickrOptions = {
    dateFormat: 'M j, Y',
    monthSelectorType: 'dropdown' as const,
  };
}
