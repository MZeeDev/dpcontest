import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { ActivitiesComponent } from './activities/activities.component';
import { MyActivityRightComponent } from './my-activity-right/my-activity-right.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AlbumComponent } from './album/album.component';
import { MyfriendsComponent } from './myfriends/myfriends.component';



const route: Routes = [
  {
    path: "",
    component: TemplateComponent,
    children: [
      {
        path: "",
        component: ActivitiesComponent
      },
      {
        path: "activities",
        component: ActivitiesComponent
      },
      {
        path: "about-me",
        component: AboutMeComponent
      },
      {
        path: "my-album",
        component: AlbumComponent
      },
      {
        path: "my-friends",
        component: MyfriendsComponent
      }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild(route)
  ],
  declarations: [TemplateComponent, ActivitiesComponent, MyActivityRightComponent, AboutMeComponent, AlbumComponent, MyfriendsComponent]
})
export class TimelineModule { }