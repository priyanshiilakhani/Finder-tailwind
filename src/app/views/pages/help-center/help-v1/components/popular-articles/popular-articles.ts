import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { helpArticleSliderData, helpCategoryData } from '../../data';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { LucideAngularModule } from "lucide-angular";
import { CommonModule } from '@angular/common';

register();

@Component({
  selector: 'help-v1-popular-articles',
  imports: [RouterLink, SwiperDirective, LucideAngularModule, CommonModule],
  templateUrl: './popular-articles.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class PopularArticles {
  helpCategoryData = helpCategoryData;
  helpArticleSliderData = helpArticleSliderData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    autoHeight: true,
    pagination: {
      el: '#popular-article-pagination',
      clickable: true,
    },
    breakpoints: {
      '500': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
    },
  };
}
