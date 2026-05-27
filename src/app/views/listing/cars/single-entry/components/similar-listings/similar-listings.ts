import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { carGridListingData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'single-entry-similar-listings',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './similar-listings.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class SimilarListings {
  carGridListingData = carGridListingData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#similar-list-pagination',
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
