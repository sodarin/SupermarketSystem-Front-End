import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { routeAnimation } from './animations';

@Component({
  selector: 'app-root',
  animations: [routeAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getState(outlet){

    return outlet.activatedRouteData.state;
  }

}
