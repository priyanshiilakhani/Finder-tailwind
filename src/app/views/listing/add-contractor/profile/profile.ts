import { Component } from '@angular/core';
import { Navbar7 } from "@app/components/header/navbar7/navbar7";
import { BusinessSteps } from "../components/business-steps/business-steps";
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { Footer2 } from "@app/components/footer/footer2/footer2";

@Component({
  selector: 'app-profile',
  imports: [Navbar7, BusinessSteps, LucideAngularModule, RouterLink, Footer2],
  templateUrl: './profile.html',
  styles: ``,
})
export class Profile {}
