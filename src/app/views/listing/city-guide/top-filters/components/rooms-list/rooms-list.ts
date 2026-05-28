import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { cityGuideData } from '../../data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'top-filters-rooms-list',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './rooms-list.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class RoomsList {
  cityGuideData = cityGuideData;
}
