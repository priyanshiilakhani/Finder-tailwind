import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { helpSupportCardData } from '../../data';

@Component({
  selector: 'help-v2-account-settings',
  imports: [RouterLink],
  templateUrl: './account-settings.html',
  styles: ``,
})
  
export class AccountSettings {
  helpSupportCardData = helpSupportCardData;
}
