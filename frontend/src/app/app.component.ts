import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NavigationEnd, NavigationError, NavigationCancel, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 1000, 'swing', function () {
        });
      }
      else if ((event instanceof NavigationEnd) || (event instanceof NavigationError) || (event instanceof NavigationCancel)) {
        var body = $("html, body");
        body.stop().animate({ scrollTop: 0 }, 1000, 'swing', function () {
        });

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