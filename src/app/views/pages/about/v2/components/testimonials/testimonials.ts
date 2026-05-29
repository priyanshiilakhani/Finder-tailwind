import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';
import { testimonialsData } from '../../data';
register();

@Component({
  selector: 'about-v2-testimonials',
  imports: [SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Testimonials {
  testimonialsData = testimonialsData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      prevEl: '#prevTestimonial',
      nextEl: '#nextTestimonial',
    },
    breakpoints: {
      '680': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
    },
  };
}
