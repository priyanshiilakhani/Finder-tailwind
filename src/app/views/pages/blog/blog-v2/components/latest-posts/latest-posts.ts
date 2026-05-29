import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogListData } from '../../data';

@Component({
  selector: 'blog-v2-latest-posts',
  imports: [RouterLink],
  templateUrl: './latest-posts.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LatestPosts {
  blogListData = blogListData;
}
