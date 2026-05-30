import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { Footer } from "@app/components/footer/footer/footer";
import { BlogPosts } from "./components/blog-posts/blog-posts";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { SinglePost } from "./components/single-post/single-post";
import { BlogSidebar } from "./components/blog-sidebar/blog-sidebar";

@Component({
  selector: 'blog-single-v1',
  imports: [Navbar2, Footer, BlogPosts, Breadcrumb, SinglePost, BlogSidebar],
  templateUrl: './single-v1.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class SingleV1 {}
