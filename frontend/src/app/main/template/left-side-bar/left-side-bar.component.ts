import { Component, OnInit } from '@angular/core';
import { AuthModule } from '../../../auth/auth.module';
import { AuthServiceManual } from '../../../services/authguard.service';


@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  constructor(private auth:AuthServiceManual) { }

  ngOnInit() {
    
  }

}
