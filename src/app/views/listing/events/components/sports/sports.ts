import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { sportsEventData } from '../../listings/components/data';
import { SwiperOptions } from 'swiper/types';
import { Navigation } from 'swiper/modules';
import { LucideAngularModule } from "lucide-angular";
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'event-listing-sports',
  imports: [RouterLink, LucideAngularModule, SwiperDirective],
  templateUrl: './sports.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Sports {
  sportsEventData = sportsEventData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoHeight: true,
    navigation: {
      prevEl: '#sports-prev',
      nextEl: '#sports-next',
    },
    breakpoints: {
      '500': { slidesPerView: 2 },
      '800': { slidesPerView: 3 },
      '1100': { slidesPerView: 4 },
    },
  };
}
