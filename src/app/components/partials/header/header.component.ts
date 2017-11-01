import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AppRoutes } from "app/app.routes";
import { AlertService } from "app/services/alert.service";

@Component({
    moduleId: module.id,
    selector: 'header-bar',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
    private currentUser: Object;     
    
    constructor(
        private router: Router,
        private alertService: AlertService) { }
    
    ngOnInit(): void {
    }

    home(): void {
        this.router.navigate(['/home']);
    }

    goTo(location: string): void {
        window.location.hash = location;
    }
}
