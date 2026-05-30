import { GlightboxDirective } from '@/app/directive/glightbox.directive';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { helpArticleLinkData } from '../../data';

@Component({
  selector: 'single-v3-article-content',
  imports: [RouterLink, GlightboxDirective],
  templateUrl: './article-content.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class ArticleContent {
  helpArticleLinkData = helpArticleLinkData;
}
