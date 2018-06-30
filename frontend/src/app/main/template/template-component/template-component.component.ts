import { Component, OnInit } from '@angular/core';
import { AuthServiceManual } from '../../../services/authguard.service';

@Component({
  selector: 'app-template-component',
  templateUrl: './template-component.component.html',
  styleUrls: ['./template-component.component.css']
})
export class TemplateComponentComponent implements OnInit {

  constructor(private auth:AuthServiceManual) { }

  ngOnInit() {
  }

}
