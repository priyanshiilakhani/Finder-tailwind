import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogPostsData, socialShareData } from '../../data';

@Component({
  selector: 'blog-single-v3-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Sidebar {
  blogPostsData = blogPostsData;
  socialShareData = socialShareData;
}
