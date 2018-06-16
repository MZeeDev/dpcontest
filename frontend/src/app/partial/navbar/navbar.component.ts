import { Component, OnInit } from '@angular/core';
import { AuthServiceManual } from '../../services/authguard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public profielService:AuthServiceManual) { }

  ngOnInit() {
  }
  logOut(){
    console.log("logOut Clicked");
    
    this.profielService.logout();
  }
}
