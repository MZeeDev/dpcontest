import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserLogInRegisterComponent } from './user-log-in-register/user-log-in-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider } from "angularx-social-login";


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("489375842383-3l3ba0q8prcn72e3npaq0h4k209c5f50.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    
    provider: new FacebookLoginProvider("1224414374328501")
    // provider: new FacebookLoginProvider("1224414374328501")
  }
]);
export function provideConfig() {
  return config;
}
const routes: Routes = [
  {
    path: "",
    component: UserLogInRegisterComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SocialLoginModule
  ],
  declarations: [UserLogInRegisterComponent],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }
  ]
})
export class AuthModule { }
