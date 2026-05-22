import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  imports: [],
  templateUrl: './back-to-top.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BackToTop {
   showButton = false;

  totalLength = 318;
  dashOffset = 318;

  ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {

    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop;

    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent = scrollTop / docHeight;

    const draw = this.totalLength * scrollPercent;

    this.dashOffset = this.totalLength - draw;

    this.showButton = scrollTop > 450;
  }

  scrollToTop(): void {

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
