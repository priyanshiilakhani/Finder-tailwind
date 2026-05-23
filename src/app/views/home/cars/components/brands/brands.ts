import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { brandData } from '../../data';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

register();

@Component({
  selector: 'cars-brands',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './brands.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Brands {
  brandData = brandData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: '#brand-pagination',
      clickable: true,
    },
    breakpoints: {
      '420': {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      '550': {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      '730': {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      '880': {
        slidesPerView: 6,
        spaceBetween: 24,
      },
      '992': {
        slidesPerView: 7,
        spaceBetween: 24,
      },
      '1200': {
        slidesPerView: 8,
        spaceBetween: 24,
      },
    },
  };
}
