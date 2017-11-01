import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { AlertService } from "../../services/alert.service";
import $ from 'jquery';

@Component({
    moduleId: module.id,
    templateUrl: 'suites.component.html',
    styleUrls: ['suites.component.css']
})

export class SuitesComponent implements OnInit {
    public constructor(
        private _router: Router,
        private alertService: AlertService) { }
        
    ngOnInit(): void {
        //this.alertService.okAlert({ title: 'Welcome to Glogger 3.0', text: 'This redesign will soon include AI for better reports and analysis of the Test Cases.', type: 'info' });
    }
}