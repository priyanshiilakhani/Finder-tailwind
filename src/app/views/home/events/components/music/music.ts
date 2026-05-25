import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { musicData } from '../../data';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
register();

@Component({
  selector: 'events-music',
  imports: [SwiperDirective, RouterLink, LucideAngularModule],
  templateUrl: './music.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Music {
  musicData = musicData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoHeight: true,
    navigation: {
      prevEl: '#theater-prev',
      nextEl: '#theater-next',
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
