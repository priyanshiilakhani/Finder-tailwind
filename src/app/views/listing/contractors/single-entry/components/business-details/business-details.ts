import { Component } from '@angular/core';
import { contractorInfoData } from '../../data';

@Component({
  selector: 'app-business-details',
  imports: [],
  templateUrl: './business-details.html',
  styles: ``,
})
export class BusinessDetails {
  contractorInfoData = contractorInfoData;
}
