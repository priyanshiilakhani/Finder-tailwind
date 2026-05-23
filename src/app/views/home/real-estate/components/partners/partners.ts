import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { partnerLogoData } from '../../data';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
register();
@Component({
  selector: 'real-estate-partners',
  imports: [SwiperDirective, RouterLink],
  templateUrl: './partners.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Partners {
  partnerLogoData = partnerLogoData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '#partners-pagination',
      clickable: true,
    },
    breakpoints: {
      '400': {
        slidesPerView: 2,
      },
      '600': {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      '900': {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      '1200': {
        slidesPerView: 5,
        spaceBetween: 16,
      },
      '1400': {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  };
}
