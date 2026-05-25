import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';
import { blogSlidesData } from '../../data';
import { LucideAngularModule } from "lucide-angular";
register();

@Component({
  selector: 'events-news',
  imports: [RouterLink, SwiperDirective, LucideAngularModule],
  templateUrl: './news.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class News {
  blogSlidesData = blogSlidesData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 48,
    autoHeight: true,
    pagination: {
      el: '#news-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      '850': {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 48,
      },
      '1200': {
        slidesPerView: 3,
        spaceBetween: 80,
      },
    },
  };
}
