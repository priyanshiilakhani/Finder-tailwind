import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'cars-features',
  imports: [],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Features {
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#feature-pagination',
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
