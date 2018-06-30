import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponentComponent } from './template-component/template-component.component';
import { Routes, RouterModule } from '@angular/router';
import { WhotofollowComponent } from './whotofollow/whotofollow.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { FriendsComponent } from './friends/friends.component';
import { ImagesComponent } from './images/images.component';
import { TodaysCompitationComponent } from './todays-compitation/todays-compitation.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { StartContestComponent } from './start-contest/start-contest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const route: Routes = [{
  path: "",
  component: TemplateComponentComponent,
  children: [
    {
      path: "",
      component: NewsfeedComponent
    },
    {
      path: "newsfeed",
      component: NewsfeedComponent
    },
    
    {
      path:"friends",
      component:FriendsComponent
    },
    {
      path:"images",
      component:ImagesComponent
    },
    {
      path:"todays-Contest",
      component:TodaysCompitationComponent
    },
    {
      path:"start-contest",
      component:StartContestComponent
    }
  ]
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  FormsModule,
  ReactiveFormsModule
   ],
  declarations: [TemplateComponentComponent, WhotofollowComponent, NewsfeedComponent, FriendsComponent, ImagesComponent, TodaysCompitationComponent, LeftSideBarComponent, UserDetailComponent, StartContestComponent],
  exports:[]
})
export class TemplateModule { }
