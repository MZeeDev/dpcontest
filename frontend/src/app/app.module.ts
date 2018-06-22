import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GuestGuard } from './guards/guest.guard';
import { UserAuthenticationGuard } from './guards/userAuthentication.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServiceManual } from './services/authguard.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const route: Routes = [
  {
    path: "",
    loadChildren: "./main/main.module#MainModule"
    // , canActivate: [UserAuthenticationGuard]
  },
  {
    path: "home",
    loadChildren: "./main/main.module#MainModule"
    // , canActivate: [UserAuthenticationGuard]
  },
  {
    path: "user-gate-way",
    loadChildren: "./auth/auth.module#AuthModule",
    // canActivate: [GuestGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    NgbModule.forRoot()
    
   
  ],
  providers: [AuthServiceManual, UserAuthenticationGuard, GuestGuard],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }