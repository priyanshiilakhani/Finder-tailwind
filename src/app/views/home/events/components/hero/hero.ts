import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { heroSliderData } from '../../data';

register();

@Component({
  selector: 'events-hero',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero {
  heroSliderData = heroSliderData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    effect: 'creative',
    loop: true,
    speed: 450,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    creativeEffect: {
      prev: {
        translate: [0, 0, -800],
        rotate: [180, 0, 0],
      },
      next: {
        translate: [0, 0, -800],
        rotate: [-180, 0, 0],
      },
    },
    navigation: {
      prevEl: '#hero-prev',
      nextEl: '#hero-next',
    },
  };
}
