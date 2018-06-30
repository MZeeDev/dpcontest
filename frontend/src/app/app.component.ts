import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavigationEnd, NavigationError, NavigationCancel, NavigationStart, Router } from '@angular/router';
import { Utils } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        Utils.blockPage();
      }
      else if ((event instanceof NavigationEnd) || (event instanceof NavigationError) || (event instanceof NavigationCancel)) {
        Utils.unblockPage();
        this.scrollUp();
      }    
    })
  }

  title = 'app';

  ngOnInit() {
    this.scrollUp();
  }

  scrollUp() {
    $("html, body").animate({ scrollTop: 0 }, 600);
  }
  
}