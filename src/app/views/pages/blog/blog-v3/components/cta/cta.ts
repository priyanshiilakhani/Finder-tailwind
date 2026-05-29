import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'blog-v3-cta',
  imports: [RouterLink],
  templateUrl: './cta.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Cta {}
