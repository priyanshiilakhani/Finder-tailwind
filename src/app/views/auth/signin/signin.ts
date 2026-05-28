import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-signin',
  imports: [RouterLink],
  templateUrl: './signin.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Signin {

}
