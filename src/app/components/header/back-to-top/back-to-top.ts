import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [],
  templateUrl: './back-to-top.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class BackToTop {
    @ViewChild('topButton')
  topButton!: ElementRef<HTMLAnchorElement>;

  @ViewChild('scrollProgress')
  scrollProgress!: ElementRef<SVGRectElement>;

  private length = 0;
  private scrollOffset = 100;

  ngAfterViewInit(): void {

    const progress = this.scrollProgress.nativeElement;

    this.length = progress.getTotalLength();

    progress.style.strokeDasharray = `${this.length}`;
    progress.style.strokeDashoffset = `${this.length}`;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {

    const button = this.topButton.nativeElement;
    const progress = this.scrollProgress.nativeElement;

    if (window.pageYOffset > this.scrollOffset) {
      button.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      button.classList.add('opacity-0', 'pointer-events-none');
    }

    const scrollPercent =
      document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    const draw = this.length * scrollPercent;

    progress.style.strokeDashoffset = `${this.length - draw}`;
  }
}
