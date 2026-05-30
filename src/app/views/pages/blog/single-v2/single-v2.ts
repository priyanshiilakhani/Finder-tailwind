import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar3 } from '@app/components/header/navbar3/navbar3';
import { Footer1 } from '@app/components/footer/footer1/footer1';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';
import { BlogRead } from './components/blog-read/blog-read';
import { galleryData } from './data';
import { GlightboxDirective } from "@/app/directive/glightbox.directive";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'blog-single-v2',
  imports: [Navbar3, Footer1, Breadcrumb, BlogRead, GlightboxDirective, RouterLink],
  templateUrl: './single-v2.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class SingleV2 {
  galleryData = galleryData;
}
