import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar7 } from "@app/components/header/navbar7/navbar7";
import { BusinessSteps } from "../components/business-steps/business-steps";
import { LucideAngularModule } from "lucide-angular";
import { Footer2 } from "@app/components/footer/footer2/footer2";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-location',
  imports: [Navbar7, BusinessSteps, LucideAngularModule, Footer2, RouterLink],
  templateUrl: './location.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Location {}
