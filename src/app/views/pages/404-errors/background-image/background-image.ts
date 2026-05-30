import { Component } from '@angular/core';
import { Navbar2 } from "@app/components/header/navbar2/navbar2";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-background-image',
  imports: [Navbar2, RouterLink],
  templateUrl: './background-image.html',
  styles: ``,
})
  
export class BackgroundImage {}
