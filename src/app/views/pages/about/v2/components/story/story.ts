import { Component } from '@angular/core';
import { timelineData } from '../../data';

@Component({
  selector: 'about-v2-story',
  imports: [],
  templateUrl: './story.html',
  styles: ``,
})
export class Story {
  timelineData = timelineData;
}
