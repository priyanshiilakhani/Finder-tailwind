import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar3 } from "@app/components/header/navbar3/navbar3";
import { AccountSettings } from "./components/account-settings/account-settings";
import { BuyingCar } from "./components/buying-car/buying-car";
import { SellingCar } from "./components/selling-car/selling-car";
import { Faqs } from "./components/faqs/faqs";
import { RightSidebar } from "./components/right-sidebar/right-sidebar";
import { RouterLink } from "@angular/router";
import { LucideAngularModule } from "lucide-angular";
import { Footer1 } from "@app/components/footer/footer1/footer1";

@Component({
  selector: 'app-help-v2',
  imports: [Navbar3, AccountSettings, BuyingCar, SellingCar, Faqs, RightSidebar, RouterLink, LucideAngularModule, Footer1],
  templateUrl: './help-v2.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class HelpV2 {}
