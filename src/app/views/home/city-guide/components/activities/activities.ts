import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { activitiesData } from '../../data';

@Component({
  selector: 'city-guide-activities',
  imports: [RouterLink, LucideAngularModule, SwiperDirective],
  templateUrl: './activities.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Activities {
  activitiesData = activitiesData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#activities-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '900': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    },
  };
}
