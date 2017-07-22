import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  resetPasswordMode = false;
  signupMode = false;
  switchSign = 'sign up';
  mode = 'sign up';

  constructor() {
  }

  ngOnInit() {
  }

  onSignup() {
    this.signupMode = !this.signupMode;
    this.switchSign = this.signupMode ? 'sign in' : 'sign up';
    this.mode = !this.signupMode ? 'sign in' : 'sign up';
    this.resetPasswordMode = false;
  }

  onResetPassword() {
    this.resetPasswordMode = true;
    this.mode = 'reset password';
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

}
