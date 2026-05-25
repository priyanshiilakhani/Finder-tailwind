import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { citiesData, companyData, footerData2, paymentMethodsData } from '../data';

@Component({
  selector: 'app-footer2',
  imports: [RouterLink],
  templateUrl: './footer2.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Footer2 {
  citiesData = citiesData;
  footerData2 = footerData2;
  companyData = companyData;
  paymentMethodsData = paymentMethodsData;
}
