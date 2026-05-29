import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { propertyListingData, realEstateListingData, supportCardData } from '../../data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import { LucideAngularModule } from "lucide-angular";
import { SwiperDirective } from '@/app/directive/swiper-directive';

register();

@Component({
  selector: 'app-profile-content',
  imports: [RouterLink, CommonModule, LucideAngularModule, SwiperDirective],
  templateUrl: './profile-content.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class ProfileContent {
  supportCardData = supportCardData;
  realEstateListingData = realEstateListingData;
  propertyListingData = propertyListingData;

  swiperConfig: SwiperOptions = {
    modules: [Pagination, Navigation],
    breakpoints: {
      991: {
        allowTouchMove: false,
      },
    },
  };
}
