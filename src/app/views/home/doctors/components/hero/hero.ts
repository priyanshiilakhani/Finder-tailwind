import { SwiperDirective } from '@/app/directive/swiper-directive';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { heroSliderData } from '../../data';
register();

@Component({
  selector: 'doctors-hero',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Hero implements AfterViewInit {
  @ViewChild('mainSwiper') mainSwiper!: ElementRef;
  @ViewChild('thumbSwiper') thumbSwiper!: ElementRef;

  heroSliderData = heroSliderData;

  swiperConfig: SwiperOptions = {
    effect: 'creative',
    speed: 450,
    allowTouchMove: false,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    thumbs: {
      swiper: '#thumbs',
    },
  };

  swiperConfigs: SwiperOptions = {
    spaceBetween: 24,
    slidesPerView: 3,
    watchSlidesProgress: true,
    breakpoints: {
      '500': {
        spaceBetween: 32,
      },
    },
  };
  ngAfterViewInit() {
    const main = this.mainSwiper.nativeElement.swiper;
    const thumbs = this.thumbSwiper.nativeElement.swiper;

    main.thumbs.swiper = thumbs;
    main.thumbs.init();
    main.thumbs.update();
  }
}
