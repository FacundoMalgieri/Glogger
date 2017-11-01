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
import { HeaderComponent } from "./components/partials/header/header.component";
import { FooterComponent } from "./components/partials/footer/footer.component";
import { SuitesComponent } from "./components/suites/suites.component";
import { SuiteComponent } from "./components/suite/suite.component";
import { LoginComponent } from "./components/login/login.component";
import { MainComponent } from "./components/main/main.component";
import { AlertService } from "./services/alert.service";
import { AppComponent } from './app.component';
import { AppRoutes } from "./app.routes";
import { HomeComponent } from "app/components/home/home.component";

/**
 * Declare your components
 * Import other modules
 * Inject your providers
 * Bootstrap the app 
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideBarComponent,
    ChartsComponent,
    SuitesComponent,
    SuiteComponent,
    HomeComponent
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
