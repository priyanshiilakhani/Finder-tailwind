import { Component } from '@angular/core';
import { Navbar6 } from "@app/components/header/navbar6/navbar6";
import { LucideAngularModule } from "lucide-angular";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { PlaceDetails } from "./components/place-details/place-details";
import { OverallInfo } from "./components/overall-info/overall-info";
import { Reviews } from "./components/reviews/reviews";
import { TopPlaces } from "./components/top-places/top-places";
import { Footer5 } from "@app/components/footer/footer5/footer5";

@Component({
  selector: 'city-guide-single-entry',
  imports: [Navbar6, LucideAngularModule, Breadcrumb, PlaceDetails, OverallInfo, Reviews, TopPlaces, Footer5],
  templateUrl: './single-entry.html',
  styles: ``,
})
  
export class SingleEntry {}
