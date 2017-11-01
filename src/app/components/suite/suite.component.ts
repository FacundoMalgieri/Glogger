import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from "../../services/alert.service";

@Component({
    moduleId: module.id,
    templateUrl: 'suite.component.html',
    styleUrls: ['suite.component.css']
})

export class SuiteComponent implements OnInit {
    id:any;

    public constructor(
        private _router: Router,
        private route: ActivatedRoute,
        private alertService: AlertService) { console.log('inside suite')}

    ngOnInit(): void {
        this.route.params.subscribe(
            params => {
                this.id = params['id'];
            }
        );
    }
}