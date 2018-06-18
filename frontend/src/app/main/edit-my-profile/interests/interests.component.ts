import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  interest:FormGroup;
  constructor(private _interest:FormBuilder) { }
 
  ngOnInit() {
      this.interest=new FormGroup(
        {
         'addnewInterest':this._interest.array([this.onInItNR()])
        })
  }

  onsubmittingForm(){
    console.log(this.interest.value['addnewInterest']);
    
    // const val: Array<any> = [
    //   this.interest.value['addnewInterest']
    // ]
    // console.log(JSON.stringify(val));
    console.log(this.interest.valid);
  }
  onInItNR(){
    return this._interest.group(
      {
        'nameOfinterest': [null, Validators.required]
      })
  }
  onAddingNewRow()
  {
    const controls=<FormArray>this.interest.controls['addnewInterest'];
    controls.push(this.onInItNR());
  }
  removeAt(i:number)
  {
   
   (<FormArray>this.interest.get('addnewInterest')).removeAt(i);
  }
}
