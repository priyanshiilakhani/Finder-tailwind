import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core'
import { SwiperOptions } from 'swiper/types'
import { isPlatformBrowser } from '@angular/common'
import { Inject, PLATFORM_ID } from '@angular/core'

@Directive({
  selector: 'swiper-container',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  @Input('config') config?: SwiperOptions

  constructor(
    private el: ElementRef<HTMLElement & { initialize: () => void }>,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      Object.assign(this.el.nativeElement, this.config)
      this.el.nativeElement.initialize()
    }
  }
}
