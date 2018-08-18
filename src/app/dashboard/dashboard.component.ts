import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router: Router) { }
  public urlPath: string = this.router.url;
  ngOnInit() {
    console.log(this.router.url);
  }

}
