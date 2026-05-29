import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { testimonialData } from '../../data';
register();

@Component({
  selector: 'about-v1-testimonials',
  imports: [SwiperDirective],
  templateUrl: './testimonials.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Testimonials {
  testimonialData = testimonialData;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 48,
    loop: true,
    autoHeight: true,
    navigation: { prevEl: '#prevTestimonial', nextEl: '#nextTestimonial' },
  };
}
