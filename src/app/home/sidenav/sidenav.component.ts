import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  public hideSideNav():void {
    $('.sideNavTrigger').sideNav('hide');
  }


  public returnToLogin():void {
    this.hideSideNav();
    this.route.navigateByUrl('/login');
  }

}
