import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { notificationPreferenceData } from '../../data';

@Component({
  selector: 'app-notification-setting',
  imports: [RouterLink],
  templateUrl: './notification-setting.html',
  styles: ``,
})
  
export class NotificationSetting {
  notificationPreferenceData = notificationPreferenceData;
}
