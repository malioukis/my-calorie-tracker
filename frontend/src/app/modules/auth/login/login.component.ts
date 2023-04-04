import { Component } from '@angular/core';
import { ModesE } from '../login-register-form/login-register-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  modesE = ModesE;
}
