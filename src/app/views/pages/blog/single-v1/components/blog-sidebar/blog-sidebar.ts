import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TopOffers } from '../top-offers/top-offers';
import { RouterLink } from '@angular/router';
import { notificationsData, relatedPostsData } from '../../data';

@Component({
  selector: 'blog-single-v1-blog-sidebar',
  imports: [TopOffers, RouterLink],
  templateUrl: './blog-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BlogSidebar {
  relatedPostsData = relatedPostsData;
  notificationsData = notificationsData;
}
