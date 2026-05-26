import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { carCategoriesData } from '../../data';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'cars-popular-categories',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './popular-categories.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class PopularCategories {
  carCategories = carCategoriesData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
      el: '#pcategory-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 4,
      },
      '992': {
        slidesPerView: 5,
      },
    },
  };
}
