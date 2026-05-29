import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Comments } from '../comments/comments';
import { RouterLink } from '@angular/router';
import { benefitsData, blogCategoriesData } from '../../data';

@Component({
  selector: 'blog-single-v1-single-post',
  imports: [Comments, RouterLink],
  templateUrl: './single-post.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SinglePost {
  benefitsData = benefitsData;
  blogCategoriesData = blogCategoriesData;
}
