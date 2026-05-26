import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { featureData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'cars-features',
  imports: [SwiperDirective],
  templateUrl: './features.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Features {
  featureData = featureData;
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
