import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { eventDateData, eventFacilityData, eventParticipantData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'single-entry-event-details',
  imports: [LucideAngularModule, RouterLink, SwiperDirective],
  templateUrl: './event-details.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class EventDetails {
  eventDateData = eventDateData;
  eventParticipantData = eventParticipantData;
  eventFacilityData = eventFacilityData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,
    pagination: {
      el: '#event-details-pagination',
      clickable: true,
    },
    breakpoints: {
      '450': {
        slidesPerView: 2,
      },
      '600': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 2,
      },
      '1200': {
        slidesPerView: 3,
      },
    },
  };
}
