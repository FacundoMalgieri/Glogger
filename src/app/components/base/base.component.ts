import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { AlertService } from "../../services/alert.service";

@Component({
    moduleId: module.id,
})
export abstract class BaseComponent {
    public array: Array<number> = Array.from(Array(100), ((v, i) => i + 1));
    
    protected constructor(protected router: Router, protected alertService: AlertService) { }

    /**
     * @param path the desired path
     */
    navigate(path: string): void {
        this.router.navigate(['/' + path]);
    }

    /**
     * @param path the desired path
     * @param param the param. For e.g. an ID
     */
    navigateWithParam(path: string, param: string) {
        this.router.navigate(['/' + path + '/' + param]);
    }

    goTo(location: string): void {
        window.location.hash = location;
    }

}