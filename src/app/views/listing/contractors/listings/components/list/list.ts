import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { contractorsData, filterTagsData } from '../../data';
import { RouterLink } from '@angular/router';
import { SwiperOptions } from 'swiper/types';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import { DecimalPipe } from '@angular/common';
register();

@Component({
  selector: 'contractors-listings-list',
  imports: [LucideAngularModule, RouterLink, SwiperDirective,DecimalPipe],
  templateUrl: './list.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class List {
  filterTagsData = filterTagsData;
  contractorsData = contractorsData;
  getSwiperConfig(index: number): SwiperOptions {
    return {
      modules: [Pagination, Navigation],

      pagination: {
        el: `.list-pagination-${index}`,
        clickable: true,
      },

      navigation: {
        prevEl: `.btn-prev-${index}`,
        nextEl: `.btn-next-${index}`,
      },

      breakpoints: {
        991: {
          allowTouchMove: false,
        },
      },
    };
  }
}
