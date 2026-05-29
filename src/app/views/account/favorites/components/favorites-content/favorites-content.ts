import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { realEstateListingData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-favorites-content',
  imports: [RouterLink, SwiperDirective, LucideAngularModule],
  templateUrl: './favorites-content.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class FavoritesContent {
  realEstateListingData = realEstateListingData;
  getSwiperConfig(index: number): SwiperOptions {
    return {
      modules: [Pagination, Navigation],
      pagination: {
        el: `.favorites-pagination-${index}`,
        clickable: true,
      },
      navigation: {
        prevEl: `.btn-prev-${index}`,
        nextEl: `.btn-next-${index}`,
      },
      breakpoints: {
        '991': {
          allowTouchMove: false,
        },
      },
    };
  }
}
