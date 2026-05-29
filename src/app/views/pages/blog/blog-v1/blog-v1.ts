import { Component } from '@angular/core';
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { Footer } from "@app/components/footer/footer/footer";
import { FeaturedPost } from "./components/featured-post/featured-post";
import { GridPosts } from "./components/grid-posts/grid-posts";
import { CategoriesModal } from "./components/categories-modal/categories-modal";

@Component({
  selector: 'app-blog-v1',
  imports: [Navbar2, Footer, FeaturedPost, GridPosts, CategoriesModal],
  templateUrl: './blog-v1.html',
  styles: ``,
})

export class BlogV1 {}
