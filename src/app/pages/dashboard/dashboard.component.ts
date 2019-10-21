import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  //templateUrl: './dashboard.component.html',
  template:'<ejs-schedule></ejs-schedule>',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
