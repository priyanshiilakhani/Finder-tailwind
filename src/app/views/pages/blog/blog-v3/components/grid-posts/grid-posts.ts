import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogsData } from '../../data';

@Component({
  selector: 'blog-v3-grid-posts',
  imports: [RouterLink],
  templateUrl: './grid-posts.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class GridPosts {
  blogsData = blogsData;
}
