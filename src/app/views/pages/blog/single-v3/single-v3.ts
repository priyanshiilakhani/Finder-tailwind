import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar4 } from "@app/components/header/navbar4/navbar4";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { Cta } from "./components/cta/cta";
import { Sidebar } from "./components/sidebar/sidebar";
import { BlogPosts } from "./components/blog-posts/blog-posts";
import { RouterLink } from "@angular/router";
import { GlightboxDirective } from "@/app/directive/glightbox.directive";
import { Breadcrumb } from './components/breadcrumb/breadcrumb';

@Component({
  selector: 'blog-single-v3',
  imports: [Navbar4, Footer3, Cta, Breadcrumb, Sidebar, BlogPosts, RouterLink, GlightboxDirective],
  templateUrl: './single-v3.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class SingleV3 {}
