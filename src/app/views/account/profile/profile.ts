import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar8 } from "@app/components/header/navbar8/navbar8";
import { AccountSidebar } from "../components/account-sidebar/account-sidebar";
import { Footer } from "@app/components/footer/footer/footer";
import { ProfileContent } from "./components/profile-content/profile-content";

@Component({
  selector: 'app-profile',
  imports: [Navbar8, AccountSidebar, ProfileContent, Footer],
  templateUrl: './profile.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class Profile {}
