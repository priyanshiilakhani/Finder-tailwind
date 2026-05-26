import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { offersData } from '../../data';
import { LucideAngularModule } from "lucide-angular";
register();

@Component({
  selector: 'city-guide-offers',
  imports: [RouterLink, SwiperDirective, LucideAngularModule],
  templateUrl: './offers.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Offers {
  offersData = offersData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,
    pagination: {
      el: '#offers-pagination',
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
