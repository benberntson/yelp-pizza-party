import {Component, OnInit} from "@angular/core";
import {ControlGroup, FormBuilder, Validators, Control} from "@angular/common";
import {Router} from "@angular/router";

import {User} from "./user";
import {LoginService} from "./login.service";

@Component({
  selector: 'signin',
  template: `
  <section class="col-md-8 col-md-offset-2">
     <form [ngFormModel]="userForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="email">Mail</label>
        <input [ngFormControl]="userForm.find('email')" name="email" type="email" id="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input [ngFormControl]="userForm.find('password')" name="password" type="password" id="password" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary" [disabled]="!userForm.valid">Sign Up</button>
     </form>
  </section>
  `
})
export class SigninComponent implements OnInit {
  userForm: ControlGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private _router: Router
  ) { }
  ngOnInit() {
    this.userForm = this._formBuilder.group({
      email: ['', Validators.compose([Validators.required, this.isEmail])],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    let email:string = this.userForm.value.email;
    let password:string = this.userForm.value.password;
    let signinUser = {email,password,firstName:'',lastName:''};
      this._loginService.signin(signinUser)
        .subscribe(data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this._router.navigateByUrl('/');
        },
        error => console.log(error))
  }

  private isEmail(control: Control): { [s: string]: boolean } {
    const EMAIL_REGEX = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    if (!control.value.match(EMAIL_REGEX)) {
      return { invalidMail: true };
    }
  }

}