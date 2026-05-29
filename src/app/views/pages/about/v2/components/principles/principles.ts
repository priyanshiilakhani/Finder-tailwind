import { Component } from '@angular/core';
import { principlesData } from '../../data';

@Component({
  selector: 'about-v2-principles',
  imports: [],
  templateUrl: './principles.html',
  styles: ``,
})

export class Principles {
  principlesData = principlesData;
}
