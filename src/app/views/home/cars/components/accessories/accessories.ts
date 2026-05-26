import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { accessoryData } from '../../data';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';

register();

@Component({
  selector: 'cars-accessories',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './accessories.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Accessories {
  accessoryData = accessoryData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
      el: '#accessories-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      }
    },
  };
}
