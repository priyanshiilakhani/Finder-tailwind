import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar2 } from '@app/components/header/navbar2/navbar2';
import { Footer } from "@app/components/footer/footer/footer";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Hero } from "./components/hero/hero";
import { AgentInfo } from "./components/agent-info/agent-info";
import { PropertyDetail } from "./components/property-detail/property-detail";

@Component({
  selector: 'real-estate-single-entry',
  imports: [Navbar2, Footer, Breadcrumb, Hero, AgentInfo, PropertyDetail],
  templateUrl: './single-entry.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SingleEntry {}
