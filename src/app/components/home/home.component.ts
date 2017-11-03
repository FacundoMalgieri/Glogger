import { Component, OnInit } from '@angular/core'
import { BaseComponent } from "../../components/base/base.component";
import { AlertService } from "../../services/alert.service";
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent extends BaseComponent implements OnInit {
    listFilter: string;
    
    constructor(protected router: Router, protected alertService: AlertService) {
        super(router, alertService);
    }

    ngOnInit(): void {
        //this.alertService.okAlert({ title: 'Welcome to Glogger 3.0', text: 'This redesign will soon include AI for better reports and analysis of the Test Cases.', type: 'info' });
    }
}