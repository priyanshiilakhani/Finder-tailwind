import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { actioncardsData } from '../../data';
import { register } from 'swiper/element/bundle';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
register();

@Component({
  selector: 'real-estate-action-cards',
  imports: [RouterLink,SwiperDirective],
  templateUrl: './action-cards.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActionCards {
  actioncardsData = actioncardsData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#swiper-pagination1',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '768': {
        slidesPerView: 3,
      },
    },
  };
}
