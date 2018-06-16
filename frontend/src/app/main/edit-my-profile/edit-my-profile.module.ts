import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { EditbasicInfoComponent } from './editbasic-info/editbasic-info.component';
import { EditWorkComponent } from './edit-work/edit-work.component';
import { InterestsComponent } from './interests/interests.component';
import { ChangePassWordComponent } from './change-pass-word/change-pass-word.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const route: Routes = [{
  path: "",
  component: TemplateComponent,
  children: [{
    path: "",
    component: EditbasicInfoComponent
  },
  {
    path: "basic",
    component: EditbasicInfoComponent
  },
  
  {
    path: "work",
    component: EditWorkComponent
  }
,
  {
    path: "interest",
    component: InterestsComponent
  },
  {
    path: "change-password",
    component: ChangePassWordComponent
  },



]
}]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ],
  declarations: [TemplateComponent, EditbasicInfoComponent, EditWorkComponent, InterestsComponent, ChangePassWordComponent]
})
export class EditMyProfileModule { }
