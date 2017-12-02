/**
 * Created by ZhangHaodong on 2017/9/30.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from "./home/home.component";
import {LoginGuardService} from "./guard/login-guard.service";
import {ProductComponent} from "./product/product.component";
const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },{
    path: 'login', component: LoginComponent, data: {state: 'login'}
  },{
    path: 'home', component: HomeComponent, data: {state: 'home'}
  },{
    path: 'product', component: ProductComponent, data: {state:'product'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    LoginGuardService,
  ]
})
export class AppRoutingModule {}
