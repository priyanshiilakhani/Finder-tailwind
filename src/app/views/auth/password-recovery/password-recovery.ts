import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-password-recovery',
  imports: [RouterLink],
  templateUrl: './password-recovery.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class PasswordRecovery {}
