import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerFeatureData, footerSectionData, socialMediaData } from '../data';

@Component({
  selector: 'app-footer1',
  imports: [RouterLink],
  templateUrl: './footer1.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Footer1 {
  socialMediaData = socialMediaData;
  footerSectionData = footerSectionData;
  footerFeatureData = footerFeatureData;
}
