import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AppRoutes } from "app/app.routes";
import { AlertService } from "app/services/alert.service";
import { BaseComponent } from "app/components/base/base.component";

@Component({
    moduleId: module.id,
    selector: 'header-bar',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent extends BaseComponent {
    private currentUser: Object;

    constructor(protected router: Router, protected alertService: AlertService) {
        super(router, alertService);
    }
}
