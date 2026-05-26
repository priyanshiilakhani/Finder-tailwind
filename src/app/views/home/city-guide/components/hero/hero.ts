import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { categoriesData } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'city-guide-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Hero {
  categoriesData = categoriesData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
