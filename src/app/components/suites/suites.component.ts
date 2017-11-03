import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { AlertService } from "../../services/alert.service";
import { BaseComponent } from "app/components/base/base.component";

@Component({
    moduleId: module.id,
    templateUrl: 'suites.component.html',
    styleUrls: ['suites.component.css']
})

export class SuitesComponent extends BaseComponent implements OnInit {
    constructor(protected router: Router, protected alertService: AlertService) {
        super(router, alertService);
    }

    ngOnInit(): void {
        //this.alertService.okAlert({ title: 'Welcome to Glogger 3.0', text: 'This redesign will soon include AI for better reports and analysis of the Test Cases.', type: 'info' });
    }
}