import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogSectionsData } from '../../data';

@Component({
  selector: 'blog-v3-articles',
  imports: [RouterLink],
  templateUrl: './articles.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Articles {
  blogSectionsData = blogSectionsData;
}
