import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmittingEducation(Education: NgForm) {
    console.log(Education.value);
    
  }
  onSubmittingwork(work: NgForm) {
    console.log(work.value);
     
  }
}
