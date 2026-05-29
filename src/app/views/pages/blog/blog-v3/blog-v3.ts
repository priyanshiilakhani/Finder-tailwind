import { Component } from '@angular/core';
import { Navbar } from "@app/components/header/navbar/navbar";
import { FeaturedPost } from "./components/featured-post/featured-post";
import { Articles } from "./components/articles/articles";
import { GridPosts } from "./components/grid-posts/grid-posts";
import { Cta } from "./components/cta/cta";
import { Footer2 } from "@app/components/footer/footer2/footer2";

@Component({
  selector: 'app-blog-v3',
  imports: [Navbar, FeaturedPost, Articles, GridPosts, Cta, Footer2],
  templateUrl: './blog-v3.html',
  styles: ``,
})

export class BlogV3 {}
