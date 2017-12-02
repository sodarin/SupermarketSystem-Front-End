import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {LoginServiceService} from "../service/login-service.service";

@Injectable()
export class LoginGuardService implements CanActivate{

  constructor(private loginService: LoginServiceService, private router: Router) { }
  canActivate(){
    if(this.loginService.validInfo){
      return true;
    }else {
      this.router.navigateByUrl("");
      alert("Wrong Information!")
    }
  }
}
