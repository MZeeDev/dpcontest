import { Component, OnInit } from '@angular/core';
import { AuthServiceManual } from '../../../services/authguard.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(public auth:AuthServiceManual) { }

  ngOnInit() {
  }

}
