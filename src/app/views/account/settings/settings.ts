import { Component } from '@angular/core';
import { Navbar8 } from "@app/components/header/navbar8/navbar8";
import { Footer } from "@app/components/footer/footer/footer";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { PersonInfo } from "./components/person-info/person-info";
import { PasswordSecurity } from "./components/password-security/password-security";
import { NotificationSetting } from "./components/notification-setting/notification-setting";

@Component({
  selector: 'app-settings',
  imports: [Navbar8, Footer, AccountSidebar, PersonInfo, PasswordSecurity, NotificationSetting],
  templateUrl: './settings.html',
  styles: ``,
})
export class Settings {}
