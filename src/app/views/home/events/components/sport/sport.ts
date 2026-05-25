import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { sportsData } from '../../data';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
register();

@Component({
  selector: 'events-sport',
  imports: [SwiperDirective, RouterLink, LucideAngularModule],
  templateUrl: './sport.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Sport {
  sportsData = sportsData;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoHeight: true,
    navigation: {
      prevEl: '#sports-prev',
      nextEl: '#sports-next',
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '800': {
        slidesPerView: 3,
      },
      '1100': {
        slidesPerView: 4,
      },
    },
  };
}
