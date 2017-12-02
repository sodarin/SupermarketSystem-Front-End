import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginServiceService} from "../service/login-service.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder, private router: Router, private loginService: LoginServiceService) {
    this.formModel = fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  loginSubmit() {
    if(this.formModel.valid){
      this.loginService.match(this.formModel.get('username').value, this.formModel.get('password').value);
      // this.serviceBus.isAdministrator.emit(this.loginService.isAdministrator);
      this.router.navigateByUrl('/home');
      console.log(this.loginService.isAdministrator);
    }
  }

}
