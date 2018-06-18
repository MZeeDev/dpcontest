import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editbasic-info',
  templateUrl: './editbasic-info.component.html',
  styleUrls: ['./editbasic-info.component.css']
})
export class EditbasicInfoComponent implements OnInit {
  genderArray = ['Male','Female','Other'];
  constructor() { }
  ngOnInit() {
  }
  onSubmittingBasicInfo(basicInfo: NgForm) {
    try {
      console.log("hello i'm working fine");
      
      let value = basicInfo.value;
      console.log(value);
      
    } catch (error) {
      alert(error);
    }
  }

}
