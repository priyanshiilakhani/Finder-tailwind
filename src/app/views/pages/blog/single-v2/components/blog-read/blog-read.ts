import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogPostsData } from '../../data';

@Component({
  selector: 'blog-single-v2-blog-read',
  imports: [RouterLink],
  templateUrl: './blog-read.html',
  styles: ``,
})

export class BlogRead {
  blogPostsData = blogPostsData;
}
