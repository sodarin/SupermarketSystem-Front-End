import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToProduct() {
    this.router.navigateByUrl('/product');
  }

}
