import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogPostsData } from '../../data';

@Component({
  selector: 'doctors-news',
  imports: [RouterLink],
  templateUrl: './news.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class News {
  blogPostsData = blogPostsData;
}
