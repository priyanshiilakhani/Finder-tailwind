import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar4 } from "@app/components/header/navbar4/navbar4";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { FeaturedPosts } from "./components/featured-posts/featured-posts";
import { Cta } from "./components/cta/cta";
import { BlogSidebar } from "./components/blog-sidebar/blog-sidebar";
import { BlogList } from "./components/blog-list/blog-list";

@Component({
  selector: 'app-blog-v4',
  imports: [Navbar4, Footer3, FeaturedPosts, Cta, BlogSidebar, BlogList],
  templateUrl: './blog-v4.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogV4 {}
