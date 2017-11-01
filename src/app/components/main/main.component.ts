import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { AlertService } from "../../services/alert.service";
import $ from 'jquery';

@Component({
    moduleId: module.id,
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css']
})

export class MainComponent implements OnInit {
    public constructor(
        private _router: Router,
        private alertService: AlertService) { }
        
    ngOnInit(): void {
        //this.alertService.okAlert({ title: 'Welcome to Glogger 3.0', text: 'This redesign will soon include AI for better reports and analysis of the Test Cases.', type: 'info' });
    }
}