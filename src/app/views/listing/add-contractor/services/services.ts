import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar7 } from "@app/components/header/navbar7/navbar7";
import { BusinessSteps } from "../components/business-steps/business-steps";
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { FormsModule } from '@angular/forms';
import { contractorServiceData, exteriorServiceData } from './data';
import { Footer2 } from "@app/components/footer/footer2/footer2";

@Component({
  selector: 'app-services',
  imports: [Navbar7, BusinessSteps, RouterLink, LucideAngularModule, FormsModule, Footer2],
  templateUrl: './services.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Services {
  contractorServiceData = contractorServiceData;
  exteriorServiceData = exteriorServiceData;
}
