import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceManual } from '../../services/authguard.service';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
declare const swal;
@Component({
  selector: 'app-user-log-in-register',
  templateUrl: './user-log-in-register.component.html',
  styleUrls: ['./user-log-in-register.component.css']
})
export class UserLogInRegisterComponent implements OnInit, OnDestroy {
  sub: any;

  genderArray = ['Male', 'Female', 'Other'];
  constructor(public authService: AuthServiceManual, private socialAuthService: AuthService) { }

  ngOnInit() {
  }
  onSubmittingRegistraionForm(registerationForm: NgForm) {

    try {
      let value = registerationForm.value;
      this.authService.signup(value);
    } catch (error) {
      swal("error");
    }
  }
  async onLogIn(logInForm: NgForm) {
    try {
      let email = logInForm.value['email'];
      let password = logInForm.value['password'];
      let response = await this.authService.login(email, password);
    } catch (error) {
      console.log(error);
    }
  }

  async logInWithFaceBook() {
    await this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.sub = this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.authService.getAuthState(user);

    });

  }
  async loginWithGoogle() {
    await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.sub = this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.authService.getAuthState(user);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}