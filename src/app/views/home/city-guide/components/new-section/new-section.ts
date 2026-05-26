import { SwiperDirective } from '@/app/directive/swiper-directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { swiperData } from '../../data';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
register();

@Component({
  selector: 'city-guide-new-section',
  imports: [SwiperDirective, RouterLink, LucideAngularModule],
  templateUrl: './new-section.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewSection {
  @ViewChild('imageSwiper') imageSwiper!: ElementRef;
  @ViewChild('contentSwiper') contentSwiper!: ElementRef;

  swiperData = swiperData;
  swiperConfig: SwiperOptions = {
    allowTouchMove: false,
    loop: true,
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },
  };

  swiperConfigs: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 32,
    loop: true,
    speed: 400,
    autoHeight: true,
    // controlSlider: '#images',
    navigation: {
      prevEl: '#new-prev',
      nextEl: '#new-next',
    },
  };

   ngAfterViewInit(): void {

    const imageSwiperEl = this.imageSwiper.nativeElement;
    const contentSwiperEl = this.contentSwiper.nativeElement;

    const imageSwiper = imageSwiperEl.swiper;
    const contentSwiper = contentSwiperEl.swiper;

    imageSwiper.controller.control = contentSwiper;
    contentSwiper.controller.control = imageSwiper;
  }
}
