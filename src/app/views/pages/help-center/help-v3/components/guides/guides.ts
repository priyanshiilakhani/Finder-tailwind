import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { helpArticleData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'help-v3-guides',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './guides.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Guides {
  helpArticleData = helpArticleData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoHeight: true,
    navigation: {
      prevEl: '#prev',
      nextEl: '#next',
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
