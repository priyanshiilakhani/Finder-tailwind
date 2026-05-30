import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar3 } from "@app/components/header/navbar3/navbar3";
import { LucideAngularModule } from "lucide-angular";
import { Footer1 } from "@app/components/footer/footer1/footer1";

@Component({
  selector: 'help-center-single-v2',
  imports: [Navbar3, LucideAngularModule, RouterLink, Footer1],
  templateUrl: './single-v2.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class SingleV2 {}
