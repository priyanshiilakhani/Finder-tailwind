import { Component } from '@angular/core';
import { Navbar5 } from "@app/components/header/navbar5/navbar5";
import { EventDetails } from "./components/event-details/event-details";
import { Sports } from "../components/sports/sports";
import { PopularEvents } from "../components/popular-events/popular-events";
import { Footer4 } from "@app/components/footer/footer4/footer4";

@Component({
  selector: 'events-single-entry',
  imports: [Navbar5, EventDetails, Sports, PopularEvents, Footer4],
  templateUrl: './single-entry.html',
  styles: ``,
})
  
export class SingleEntry {}
