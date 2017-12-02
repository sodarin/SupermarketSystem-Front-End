import {Component, Input, OnInit} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit {


  @Input()
  title: string;
  constructor() {
  }

  ngOnInit() {
    $(".sideNavTrigger").sideNav();
  }

  openSideNav() {
    // this.sidenav.isOpen = true;
    $(".sideNavTrigger").sideNav('show');
    $("div#sidenav-overlay").remove();
  }



}
