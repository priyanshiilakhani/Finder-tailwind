import { Component } from '@angular/core';
import { Navbar4 } from "@app/components/header/navbar4/navbar4";
import { Footer3 } from "@app/components/footer/footer3/footer3";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'contact-v3',
  imports: [Navbar4, Footer3, RouterLink],
  templateUrl: './v3.html',
  styles: ``,
})
  
export class V3 {}
