import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { realEstateListingData } from '../../data';
import { RouterLink } from '@angular/router';

register();

@Component({
  selector: 'real-estate-listings-property-card',
  imports: [SwiperDirective, RouterLink],
  templateUrl: './property-card.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class PropertyCard {
  realEstateListingData = realEstateListingData;
  getSwiperConfig(markerId: number): SwiperOptions {
    return {
      modules: [Pagination, Navigation],

      pagination: {
        el: `.property-pagination-${markerId}`,
        clickable: true,
      },

      navigation: {
        prevEl: `.btn-prev-${markerId}`,
        nextEl: `.btn-next-${markerId}`,
      },

      breakpoints: {
        991: {
          allowTouchMove: false,
        },
      },
    };
  }
}
