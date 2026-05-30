import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from "@app/components/header/navbar/navbar";

@Component({
  selector: 'app-illustration',
  imports: [Navbar, RouterLink],
  templateUrl: './illustration.html',
  styles: ``,
})
  
export class Illustration {}
