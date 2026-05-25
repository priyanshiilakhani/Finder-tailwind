import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pro-cta',
  imports: [RouterLink],
  templateUrl: './pro-cta.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ProCta {}
