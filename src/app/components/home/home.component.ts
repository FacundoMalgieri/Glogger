import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { AlertService } from "../../services/alert.service";
import $ from 'jquery';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    public constructor(
        private _router: Router,
        private alertService: AlertService) { }
        
    ngOnInit(): void {
        this.alertService.okAlert({ title: 'Welcome to Glogger 3.0', text: 'This redesign will soon include AI for better reports and analysis of the Test Cases.', type: 'info' });
    }
}