import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';
import { LoginUsuario } from '../model/login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLogged = false;
  isLogginDail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      // Faltan controles deviceInfo
    });
  }

  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
}
