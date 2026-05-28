import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { accountBenefitData } from './data';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './signup.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Signup {
  accountBenefitData = accountBenefitData;
}
