import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { partnersData } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
register();

@Component({
  selector: 'about-v2-partners',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './partners.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Partners {
  partnersData = partnersData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#partners-pagination',
      clickable: true,
    },
    breakpoints: {
      '460': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
      '992': {
        slidesPerView: 4,
      },
    },
  };
}
