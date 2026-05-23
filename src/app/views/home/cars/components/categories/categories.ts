import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { categoriesData } from '../../data';

register();

@Component({
  selector: 'cars-categories',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './categories.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Categories {
  categoriesData = categoriesData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    spaceBetween: 16,
    pagination: {
      el: '#category-pagination',
      clickable: true,
    },
    breakpoints: {
      '460': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      '600': {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      '992': {
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
