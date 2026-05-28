import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar7 } from '@app/components/header/navbar7/navbar7';
import { LucideAngularModule } from 'lucide-angular';
import { pricingPlansData, promotionData } from './data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promotion',
  imports: [RouterLink, Navbar7, LucideAngularModule, CommonModule],
  templateUrl: './promotion.html',
  styles: ``,
})

export class Promotion {
  pricingPlansData = pricingPlansData;
  promotionData = promotionData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
