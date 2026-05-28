import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import Cleave from 'cleave.js';

@Component({
  selector: 'add-car-price2',
  imports: [LucideAngularModule],
  templateUrl: './price2.html',
  styles: ``,
})

export class Price2 implements AfterViewInit {
  @ViewChild('phoneInput') phoneInput!: ElementRef;

  ngAfterViewInit(): void {
    new Cleave(this.phoneInput.nativeElement, {
      numericOnly: true,
      delimiters: ['(', ')', ' ', '-'],
      blocks: [0, 3, 0, 3, 4],
    });
  }
}
