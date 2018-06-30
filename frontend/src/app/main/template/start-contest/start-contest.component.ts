import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-contest',
  templateUrl: './start-contest.component.html',
  styleUrls: ['./start-contest.component.css']
})
export class StartContestComponent implements OnInit {

  constructor() { }
  public cand1:boolean=false;
  public cand2:boolean=false;
  ngOnInit() {
    this.cand2=true;
  }

}
