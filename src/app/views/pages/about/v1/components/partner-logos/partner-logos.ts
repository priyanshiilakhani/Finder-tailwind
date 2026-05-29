import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { companyLogosData } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'about-v1-partner-logos',
  imports: [RouterLink],
  templateUrl: './partner-logos.html',
  styles: ``,
})
export class PartnerLogos {
  companyLogosData = companyLogosData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
