import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { stepsData } from '../../data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
register();

@Component({
  selector: 'app-steps',
  imports: [SwiperDirective],
  templateUrl: './steps.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Steps {
  stepsData = stepsData;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#steps-pagination',
      clickable: true,
    },
    breakpoints: {
      '450': {
        slidesPerView: 2,
      },
      '800': {
        slidesPerView: 3,
      },
    },
  };
}
