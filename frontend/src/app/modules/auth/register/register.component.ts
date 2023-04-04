import { Component } from '@angular/core';
import { ModesE } from '../login-register-form/login-register-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  modesE = ModesE;
}
