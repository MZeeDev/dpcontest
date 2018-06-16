import { Component, OnInit } from '@angular/core';
import { AuthServiceManual } from '../../../services/authguard.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor(public profileService:AuthServiceManual) { }

  ngOnInit() {
  }

}
