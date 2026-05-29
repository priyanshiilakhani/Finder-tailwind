import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { featuredBlogsData } from '../../data';

@Component({
  selector: 'blog-v4-featured-posts',
  imports: [RouterLink],
  templateUrl: './featured-posts.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class FeaturedPosts {
  featuredBlogsData = featuredBlogsData;
}
