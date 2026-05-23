import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { agentsData } from '../../data';

@Component({
  selector: 'real-estate-top-agents',
  imports: [RouterLink],
  templateUrl: './top-agents.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TopAgents {
  agentsData = agentsData;
}
