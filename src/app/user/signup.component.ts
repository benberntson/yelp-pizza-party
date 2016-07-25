import {Component, OnInit} from "@angular/core";
import {FormBuilder, ControlGroup, Validators, Control} from "@angular/common";

import {User} from "./user";
import {LoginService} from "./login.service";

@Component({
  selector: 'signup',
  template: `
  <section class="col-md-8 col-md-offset-2">
    <form [ngFormModel]="signupForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input [ngFormControl]="signupForm.find('firstName')" name="firstName" type="text" id="firstName" class="form-control">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input [ngFormControl]="signupForm.find('lastName')" name="lastName" type="text" id="lastName" class="form-control">
      </div>
      <div class="form-group">
        <label for="email">E-Mail</label>
        <input [ngFormControl]="signupForm.find('email')" name="email" type="email" id="email" class="form-control"> 
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input [ngFormControl]="signupForm.find('password')" name="password" type="password" id="password" class="form-control">
      </div>
      <button type="submit" class="btn btn-default" [disabled]="!signupForm.valid">Sign Up</button>
    </form>
  </section>
  `

})

export class SignupComponent implements OnInit {
  signupForm: ControlGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService
  ) { }


  ngOnInit() {
    this.signupForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        this.isEmail
      ])],
      password: ['', Validators.required]
    });
  }

  private isEmail(control: Control): { [s: string]: boolean } {
    const EMAIL_REGEX = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    if (!control.value.match(EMAIL_REGEX)) {
      return { invalidMail: true };
    }
  }

  onSubmit() {
    const user = new User(
      this.signupForm.value.email,
      this.signupForm.value.password,
      this.signupForm.value.firstName,
      this.signupForm.value.lastName
    );
    console.log(user);
    this._loginService.signup(user)
      .subscribe(
      data => console.log(data),
      error => console.error(error)
      )
  }
}