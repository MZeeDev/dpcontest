import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceManual } from '../../../services/authguard.service';
import { CompitationService } from '../../../services/compatation.services';
declare const swal: any;
@Component({
  selector: 'app-start-contest',
  templateUrl: './start-contest.component.html',
  styleUrls: ['./start-contest.component.css']
})
export class StartContestComponent implements OnInit {
  candidate1: {
    name: null,
    email: null,
    picUrl: null,
    address: null
  }
  public candidate2: {
    name: null,
    email: null,
    picUrl: null,
    address: null
  }
  constructor(private auth: AuthServiceManual, private compitation: CompitationService) { }
  public cand1: boolean = false;
  public cand2: boolean = false;
  ngOnInit() {
    this.cand2 = true;
  }

  async onSubmittingCandForm(cand1Form: NgForm) {
   
   try {
    let obj = {
      "candidate1": {
        name: cand1Form.value['name'],
        email: cand1Form.value['email'],
        picUrl: cand1Form.value['picUrl'],
        address: cand1Form.value['address']
      },
      "candidate2": {
        name: cand1Form.value['name2'],
        email: cand1Form.value['email2'],
        picUrl: cand1Form.value['picUrl2'],
        address: cand1Form.value['address2']
      },
      "userId": this.auth.profile._id,
      "hours": cand1Form.value['hours']
    }
   await this.compitation.startCompittaion(obj);
    cand1Form.reset();
    swal({
      title: "Great!",
      text: "You done it, Let's have fun with compitation!",
      icon: "success",
      button: "Aww yes!Cool",
    });  
   } catch (error) {
    swal("OOPS!", "SomeThing Went Wrong!", "error");
     
   }
   
   

  }
}
