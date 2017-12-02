import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {LoginServiceService} from "./service/login-service.service";
import { NavigateComponent } from './home/navigate/navigate.component';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { InventoryComponent } from './home/inventory/inventory.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFilterComponent } from './product/product-filter/product-filter.component';
import {ProductListService} from "./service/product/product-list.service";
import { ProductNameFilterPipe } from './pipe/product-name-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigateComponent,
    SidenavComponent,
    StatisticsComponent,
    InventoryComponent,
    ProductComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductNameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    LoginServiceService,
    ProductListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
