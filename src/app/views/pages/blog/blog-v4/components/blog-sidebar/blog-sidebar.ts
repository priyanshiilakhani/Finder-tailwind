import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { moreTopicsData, topicsData } from '../../data';

@Component({
  selector: 'blog-v4-blog-sidebar',
  imports: [RouterLink],
  templateUrl: './blog-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class BlogSidebar {
  showMore = false;
  topicsData = topicsData;
  moreTopicsData = moreTopicsData;
  toggleTopics() {
    this.showMore = !this.showMore;
  }
}
