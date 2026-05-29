import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FlatpickrDirective } from 'angularx-flatpickr';
import Cleave from 'cleave.js';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-person-info',
  imports: [RouterLink, LucideAngularModule, FlatpickrDirective],
  templateUrl: './person-info.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class PersonInfo implements AfterViewInit {
  @ViewChild('phoneInput') phoneInput!: ElementRef;

  ngAfterViewInit(): void {
    new Cleave(this.phoneInput.nativeElement, {
      numericOnly: true,
      delimiters: ['(', ')', ' ', '-'],
      blocks: [0, 3, 0, 3, 4],
    });
  }

  flatPickrOptions = {
    dateFormat: 'M j, Y',
    monthSelectorType: 'dropdown' as const,
  };
}
