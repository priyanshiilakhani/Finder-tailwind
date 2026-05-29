import { Component } from '@angular/core';
import { blogData } from '../../data';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'blog-v2-popular-posts',
  imports: [RouterLink],
  templateUrl: './popular-posts.html',
  styles: ``,
})
export class PopularPosts {
  blogData = blogData;
}
