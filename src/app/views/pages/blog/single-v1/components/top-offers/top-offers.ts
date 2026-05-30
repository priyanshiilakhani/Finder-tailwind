import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { propertyData } from '../../data';
register();

@Component({
  selector: 'blog-single-v1-top-offers',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './top-offers.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class TopOffers {
  propertyData = propertyData;
  getSwiperConfig(index: number): SwiperOptions {
    return {
      modules: [Pagination, Navigation],
      pagination: {
        el: `.offers-pagination-${index}`,
      },
      navigation: {
        prevEl: `.btn-prev-${index}`,
        nextEl: `.btn-next-${index}`,
      },
      breakpoints: {
        '991': {
          allowTouchMove: false,
        },
      },
    };
  }
}
