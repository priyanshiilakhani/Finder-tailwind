import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { categoryTagsData } from '../../data';

@Component({
  selector: 'blog-v1-categories-modal',
  imports: [RouterLink],
  templateUrl: './categories-modal.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class CategoriesModal {
  categoryTagsData = categoryTagsData;
}
