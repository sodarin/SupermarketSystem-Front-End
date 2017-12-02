import {Component, Input, OnInit} from '@angular/core';
import {LoginServiceService} from "../service/login-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  isAdministrator: boolean;
  isEmployee: boolean;
  title = "Supermarket Management System";
  constructor(private loginService: LoginServiceService) {
    // serviceBus.isAdministrator.subscribe((isAdministrator: boolean)=>{
    //   console.log("test");
    //   this.isAdministrator = isAdministrator;
    // })
    this.isAdministrator = this.loginService.isAdministrator;
    this.isEmployee = this.loginService.isEmployee;
    console.log(this.loginService.isAdministrator);

  }

  ngOnInit() {
  }

}
