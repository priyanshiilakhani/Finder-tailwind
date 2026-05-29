import { Component } from '@angular/core';
import { featureData } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'about-v1-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
})
export class Features {
  featureData = featureData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
