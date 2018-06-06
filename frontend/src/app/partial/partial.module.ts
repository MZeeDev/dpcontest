import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ FooterComponent, NavbarComponent],
  exports:[FooterComponent, NavbarComponent]  
})
export class PartialModule { }
