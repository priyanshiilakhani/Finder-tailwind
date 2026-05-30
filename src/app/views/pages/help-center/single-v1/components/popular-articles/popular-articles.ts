import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from "lucide-angular";
import { articleCategoryData, popularArticleData } from '../../data';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';

register();

@Component({
  selector: 'single-v1-popular-articles',
  imports: [RouterLink, LucideAngularModule, CommonModule, SwiperDirective],
  templateUrl: './popular-articles.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class PopularArticles {
  articleCategoryData = articleCategoryData;
  popularArticleData = popularArticleData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,
    pagination: {
      el: '#single-articles-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      }
    },
  };
}
