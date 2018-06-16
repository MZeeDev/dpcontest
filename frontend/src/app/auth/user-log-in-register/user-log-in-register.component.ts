import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceManual } from '../../services/authguard.service';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-user-log-in-register',
  templateUrl: './user-log-in-register.component.html',
  styleUrls: ['./user-log-in-register.component.css']
})
export class UserLogInRegisterComponent implements OnInit {

  sub: any;
  constructor(public authService: AuthServiceManual,private socialAuthService: AuthService) { }

  ngOnInit() {
  }

 async logInWithFaceBook() {
    await this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.authService.getAuthState(user);

    });
    
  }
  async loginWithGoogle() {
    await this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user);
      this.authService.getAuthState(user);
    });
  }
 
  onSubmittingRegistraionForm(registerationForm: NgForm) {
    console.log(registerationForm.value)
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
}
