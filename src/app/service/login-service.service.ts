import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceService {

  validInfo = false;
  isAdministrator = false;
  isEmployee = false;
  constructor() { }

  match(username: string, password: string){
    if(username === "20154878"&&password === "20154878"){
      this.validInfo = true;
      this.isAdministrator = true;
      return;
    }else{
      this.validInfo = false;
      this.isAdministrator = false;
    }
    if(username === "20151111"&&password === "123456"){
      this.validInfo = true;
      this.isEmployee = true;
      return;
    }else{
      this.validInfo = false;
      this.isEmployee = false;
    }
  }

}
