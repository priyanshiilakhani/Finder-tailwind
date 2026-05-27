import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';
import { eventsData } from '../../data';
register();
@Component({
  selector: 'city-guide-events',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './events.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Events {
  eventsData = eventsData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      prevEl: '#events-prev',
      nextEl: '#events-next',
    },
    breakpoints: {
      '500': { slidesPerView: 1 },
      '992': { slidesPerView: 2 },
      '1200': { slidesPerView: 'auto' },
    },
  };
}
