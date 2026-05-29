import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'blog-v3-featured-post',
  imports: [RouterLink],
  templateUrl: './featured-post.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class FeaturedPost {}
