import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../../core/services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-register-form',
  templateUrl: './login-register-form.component.html',
  styleUrls: ['./login-register-form.component.scss'],
})
export class LoginRegisterFormComponent implements OnInit {
  @Input() mode: string = '';

  modesE = ModesE;
  constructor(private loginService: LoginService) {}
  // using FormControl instances instead of FormBuilder because form is not being repetitive
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  ngOnInit() {}

  onLogin(email: string, password: string) {
    this.loginService.dummyLogin(email, password)?.subscribe((res) => {
      console.log(res);
    });
  }
}

export enum ModesE {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
}
