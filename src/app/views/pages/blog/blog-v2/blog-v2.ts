import { Component } from '@angular/core';
import { Navbar3 } from "@app/components/header/navbar3/navbar3";
import { Footer1 } from "@app/components/footer/footer1/footer1";
import { LatestPosts } from "./components/latest-posts/latest-posts";
import { PopularPosts } from "./components/popular-posts/popular-posts";
import { CarRanking } from "./components/car-ranking/car-ranking";
import { Videos } from "./components/videos/videos";
import { Cta } from "./components/cta/cta";

@Component({
  selector: 'app-blog-v2',
  imports: [Navbar3, Footer1, LatestPosts, PopularPosts, CarRanking, Videos, Cta],
  templateUrl: './blog-v2.html',
  styles: ``,
})
export class BlogV2 {}
