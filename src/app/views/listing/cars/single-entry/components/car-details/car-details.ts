import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { Specifications } from "../specifications/specifications";
import { Features } from "../features/features";
import { RightSidebar } from "../right-sidebar/right-sidebar";
import { carGalleryData, carThumbnailData } from '../../data';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Thumbs } from 'swiper/modules';
import { SwiperDirective } from '@/app/directive/swiper-directive';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'single-entry-car-details',
  imports: [LucideAngularModule, Specifications, Features, RightSidebar, SwiperDirective],
  templateUrl: './car-details.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class CarDetails implements AfterViewInit {
  @ViewChild('mainSwiper') mainSwiper!: ElementRef;
  @ViewChild('thumbSwiper') thumbSwiper!: ElementRef;
  carGalleryData = carGalleryData;
  carThumbnailData = carThumbnailData;
  swiperConfig: SwiperOptions = {
    modules: [Navigation, Thumbs],
    loop: true,
    spaceBetween: 16,

    navigation: {
      prevEl: '.btn-prev',
      nextEl: '.btn-next',
    },

    thumbs: {
      swiper: '#thumbs',
    },
  };

  swiperConfig2: SwiperOptions = {
    loop: true,
    spaceBetween: 16,
    watchSlidesProgress: true,
    slidesPerView: 3,
    breakpoints: {
      340: {
        slidesPerView: 4,
      },
      500: {
        slidesPerView: 5,
      },
      600: {
        slidesPerView: 6,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 5,
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
