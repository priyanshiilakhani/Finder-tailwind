import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { commentsData } from '../../data';

@Component({
  selector: 'blog-single-v1-comments',
  imports: [],
  templateUrl: './comments.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Comments {
  commentsData = commentsData;
}
