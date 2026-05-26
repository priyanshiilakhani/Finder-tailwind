import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { carListingData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();
@Component({
  selector: 'cars-listings',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './listings.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Listings {
  carListingData = carListingData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#listing-pagination',
      clickable: true,
    },
    breakpoints: {
      '550': {
        slidesPerView: 2,
      },
      '850': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    },
  };
}
