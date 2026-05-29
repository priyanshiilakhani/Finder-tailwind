import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { marketLinksData, marketRatingsData, teamAvatarsData } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'about-v2-info-columns',
  imports: [RouterLink],
  templateUrl: './info-columns.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InfoColumns {
  marketRatingsData = marketRatingsData;
  marketLinksData = marketLinksData;
  teamAvatarsData = teamAvatarsData;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
