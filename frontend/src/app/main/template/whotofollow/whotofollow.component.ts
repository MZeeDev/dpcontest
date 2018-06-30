import { Component, OnInit } from '@angular/core';
import { AuthServiceManual } from '../../../services/authguard.service';

@Component({
  selector: 'app-whotofollow',
  templateUrl: './whotofollow.component.html',
  styleUrls: ['./whotofollow.component.css']
})
export class WhotofollowComponent implements OnInit {
  public allUsers = [];

  constructor(private auth: AuthServiceManual) { }

  ngOnInit() {
    this.getAllUsers();
  }
  
  public async  getAllUsers() {
   try {
    let response = await this.auth.getAllUser();
    this.allUsers = <any>response;     
   } catch (error) {
     
   }

       
  }
}
