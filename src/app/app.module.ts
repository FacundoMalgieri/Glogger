import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SweetAlertService } from 'ng2-sweetalert2';
import { ChartsModule } from 'ng2-charts';

import { SideBarComponent } from "./components/partials/sidebar/sidebar.component";
import { ChartsComponent } from "./components/partials/charts/charts.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AlertService } from "./services/alert.service";
import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SideBarComponent,
    ChartsComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule,
    AppRoutes
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
