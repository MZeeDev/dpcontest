import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { PartialModule } from '../partial/partial.module';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const route: Routes = [
  {
    path: "",
    component: MainScreenComponent,
    children: [
      {
        path: "",
        loadChildren: './template/template.module#TemplateModule'
      },
      {
        path: "timeline",
        loadChildren: "./timeline/timeline.module#TimelineModule"
      },

      {
        path: "edit-profile",
        loadChildren: "./edit-my-profile/edit-my-profile.module#EditMyProfileModule"
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    PartialModule,
    FormsModule,
    RouterModule.forChild(route)
  ],
  declarations: [MainScreenComponent]
})
export class MainModule { }