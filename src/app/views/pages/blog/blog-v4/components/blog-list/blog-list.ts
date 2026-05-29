import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogData, categoryData } from '../../data';
import { Pagination } from '../pagination/pagination';

@Component({
  selector: 'blog-v4-blog-list',
  imports: [RouterLink, Pagination],
  templateUrl: './blog-list.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogList {
  categoryData = categoryData;
  blogData = blogData;
}
