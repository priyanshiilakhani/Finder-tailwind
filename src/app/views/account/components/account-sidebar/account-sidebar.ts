import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';
import { accountMenuData } from './data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-sidebar',
  imports: [RouterLink, CommonModule],
  templateUrl: './account-sidebar.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class AccountSidebar {
  accountMenuData = accountMenuData;
}
