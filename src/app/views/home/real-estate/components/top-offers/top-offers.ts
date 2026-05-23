import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';
import { propertyData } from '../../data';
register();

@Component({
  selector: 'real-estate-top-offers',
  imports: [SwiperDirective, RouterLink],
  templateUrl: './top-offers.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopOffers {
  propertyData = propertyData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    observer: true,
    observeParents: true,

    navigation: {
      prevEl: '#offers-prev',
      nextEl: '#offers-next',
    },

    pagination: {
      el: '#offers-pagination',
      clickable: true,
    },

    breakpoints: {
      460: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
    },
  };

  propertyImageSwiper(id: number): SwiperOptions {
    return {
      modules: [Navigation, Pagination],

      slidesPerView: 1,

      loop: true,

      nested: true,

      observer: true,
      observeParents: true,

      navigation: {
        prevEl: `.btn-prev-${id}`,
        nextEl: `.btn-next-${id}`,
      },

      pagination: {
        el: `.offers-pagination-${id}`,
        clickable: true,
      },
    };
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      const swipers = document.querySelectorAll('.inner-swiper');

      swipers.forEach((swiper: any) => {
        Object.assign(swiper, swiper.config || {});

        swiper.initialize();
      });
    });
  }
}
