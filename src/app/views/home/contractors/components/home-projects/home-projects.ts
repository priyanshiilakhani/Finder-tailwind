import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { register } from 'swiper/element/bundle';
import { Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { homeProjectsData } from '../../data';
register();

@Component({
  selector: 'app-home-projects',
  imports: [RouterLink, LucideAngularModule, SwiperDirective],
  templateUrl: './home-projects.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeProjects {
  homeProjectsData = homeProjectsData;
  swiperConfig: SwiperOptions = {
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: {
      el: '#home-pagination',
      clickable: true,
    },
    breakpoints: {
      '650': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
    },
  };
}
