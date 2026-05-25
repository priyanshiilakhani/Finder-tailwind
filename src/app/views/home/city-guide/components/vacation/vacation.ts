import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { cityGuideData } from '../../data';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
register();

@Component({
  selector: 'city-guide-vacation',
  imports: [SwiperDirective, RouterLink, LucideAngularModule],
  templateUrl: './vacation.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class Vacation {
  cityGuideData = cityGuideData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,
    pagination: {
      el: '#vacation-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
    },
  };
}
