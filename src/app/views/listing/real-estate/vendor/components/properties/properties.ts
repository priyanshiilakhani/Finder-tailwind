import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { realEstateData } from '../../data';
register();

@Component({
  selector: 'real-estate-vendor-properties',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './properties.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Properties {
  realEstateData = realEstateData;
  getSwiperConfig(index: number): SwiperOptions {
    return {
      modules: [Pagination],
      pagination: {
        el: `.properties-pagination-${index}`,
        clickable: true,
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
