import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogVlogData } from '../../data';

@Component({
  selector: 'blog-v2-videos',
  imports: [RouterLink],
  templateUrl: './videos.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Videos {
  blogVlogData = blogVlogData;
}
