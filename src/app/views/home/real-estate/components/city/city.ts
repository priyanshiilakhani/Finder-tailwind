import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';
import { cityData } from '../../data';
register();

@Component({
  selector: 'real-estate-city',
  imports: [SwiperDirective, RouterLink],
  templateUrl: './city.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class City {
  cityData = cityData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      prevEl: '#city-prev',
      nextEl: '#city-next',
    },
    pagination: {
      el: '#city-pagination',
      clickable: true,
    },
    breakpoints: {
      '460': { slidesPerView: 2, spaceBetween: 16 },
      '768': { slidesPerView: 2, spaceBetween: 24 },
      '860': { slidesPerView: 3 },
      '1200': { slidesPerView: 4 },
    },
  };
}
