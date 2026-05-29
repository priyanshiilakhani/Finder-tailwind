import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { blogsData, categoryData } from '../../data';

@Component({
  selector: 'blog-v1-grid-posts',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './grid-posts.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class GridPosts {
  categoryData = categoryData;
  blogsData = blogsData;
}
