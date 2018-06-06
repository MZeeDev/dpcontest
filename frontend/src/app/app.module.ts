import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

const route:Routes=[
  
  {
    path:"",
    loadChildren:"./main/main.module#MainModule"
  },
  {
    path:"home",
    loadChildren:"./main/main.module#MainModule"
  }

]

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule ,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }