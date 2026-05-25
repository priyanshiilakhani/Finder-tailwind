import { SwiperDirective } from '@/app/directive/swiper-directive';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { LucideAngularModule } from 'lucide-angular';
import { onlineEventsData } from '../../data';
register();

@Component({
  selector: 'events-online',
  imports: [SwiperDirective, LucideAngularModule],
  templateUrl: './online.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Online implements AfterViewInit {
  @ViewChild('dateSwiperRef') dateSwiperRef!: ElementRef;
  @ViewChild('listingSwiperRef') listingSwiperRef!: ElementRef;

  ngAfterViewInit(): void {
    const dateSwiperEl = this.dateSwiperRef.nativeElement;
    const listingSwiperEl = this.listingSwiperRef.nativeElement;

    Object.assign(dateSwiperEl, this.swiperConfig);
    Object.assign(listingSwiperEl, this.swiperConfigs);

    dateSwiperEl.initialize();
    listingSwiperEl.initialize();

    setTimeout(() => {
      const firstSwiper = dateSwiperEl.swiper;
      const secondSwiper = listingSwiperEl.swiper;

      firstSwiper.controller.control = secondSwiper;
      secondSwiper.controller.control = firstSwiper;
    });
  }

  onlineEventsData = onlineEventsData;
  
  swiperConfig: SwiperOptions = {
    spaceBetween: 32,
    // controlSlider: '#listings',
    grabCursor: true,
    navigation: {
      prevEl: '#online-prev',
      nextEl: '#online-next',
    },
  };

  swiperConfigs: SwiperOptions = {
    allowTouchMove: false,
    spaceBetween: 24,
  };
}
