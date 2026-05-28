import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { Navbar7 } from '@app/components/header/navbar7/navbar7';
import { RouterLink } from '@angular/router';
import { PropertySidebar } from '../components/property-sidebar/property-sidebar';
import Cleave from 'cleave.js';

@Component({
  selector: 'add-property-contact-info',
  imports: [Navbar7, RouterLink, PropertySidebar],
  templateUrl: './contact-info.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class ContactInfo implements AfterViewInit {
  @ViewChild('phoneInput') phoneInput!: ElementRef;

  ngAfterViewInit(): void {
    new Cleave(this.phoneInput.nativeElement, {
      numericOnly: true,
      delimiters: ['(', ')', ' ', '-'],
      blocks: [0, 3, 0, 3, 4],
    });
  }
}
