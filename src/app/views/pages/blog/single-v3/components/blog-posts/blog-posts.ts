import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { BlogCarouselData } from '../../data';
register();

@Component({
  selector: 'blog-single-v3-blog-posts',
  imports: [RouterLink, SwiperDirective],
  templateUrl: './blog-posts.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class BlogPosts {
  BlogCarouselData = BlogCarouselData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
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
    },
  };
}
