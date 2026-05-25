import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { eventCategoriesData } from '../../data';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
register();

@Component({
  selector: 'events-categories',
  imports: [SwiperDirective, RouterLink],
  templateUrl: './categories.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Categories {
  eventCategoriesData = eventCategoriesData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
      el: '#category-pagination',
      clickable: true,
    },
    breakpoints: {
      '560': {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      '920': {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      '1200': {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
  };
}
