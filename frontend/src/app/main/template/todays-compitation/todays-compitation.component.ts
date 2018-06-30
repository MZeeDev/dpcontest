import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CompitationService } from '../../../services/compatation.services';
import { AuthServiceManual } from '../../../services/authguard.service';

@Component({
  selector: 'app-todays-compitation',
  templateUrl: './todays-compitation.component.html',
  styleUrls: ['./todays-compitation.component.css']
})

export class TodaysCompitationComponent implements OnInit, AfterViewInit {

  isVoteViewd:boolean=true;
  compitatorsId: number;
  public cand1data: any;
  public cand2data: any;
  public voted: boolean = false;
  public cand1Votes: number;
  public cand2Votes: number;
  public compitatorInfo = [
    {
      "name": null
    }
  ]
  public allCandidates = [
    {
      _id: null,
      userId: null,
      candidate1: {
        _id: null,
        name: null,
        email: null,
        picUrl: null,
        address: null,
        userId: null,
        createdAt: null,
        votes: null
      },
      candidate2: {
        _id: null,
        name: null,
        email: null,
        picUrl: null,
        address: null,
        userId: null,
        createdAt: null,
        votes: null
      }
    }
  ]

  constructor(private comp: CompitationService, private authService: AuthServiceManual) { }

  ngOnInit() {
    this.getCompitaios();
    this.getUserById();
  }
  ngAfterViewInit() {
    this.getCompitaios();
    setTimeout(() => {
      this.getUserById();
    }, 5000);
    // this.getUserById();
  }
  async voteForFirstCandidate1(_id) {
    let candidateId = _id;
    await this.comp.Vote(candidateId);
    this.voted = true;
  }

  async voteForFirstCandidate2(_id) {
    let candidateId = _id;
    await this.comp.Vote(candidateId);
    this.voted = true;
  }

  public async getUserById() {
    let response = await this.authService.getAllUserById(this.compitatorsId);
    this.compitatorInfo = (<any>response)[0].name;
  }

  public async getCompitaios() {
    try {
      let response = await this.comp.getAllCompitators();
      this.allCandidates = <any>response;
      this.compitatorsId = (<any>response)._id;
      for (let index = 0; index < this.allCandidates.length; index++) {
        this.cand1data = this.allCandidates[index].candidate1;
        this.cand2data = this.allCandidates[index].candidate2;
        // console.log(this.cand1data);
        // console.log(this.cand2data);
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  viewPreviousVotes(){
    this.voted=true;
    setTimeout(() => {
      this.voted=false;
      this.isVoteViewd=false;
    }, 1000);
  }
}