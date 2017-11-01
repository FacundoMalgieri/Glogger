import { Component, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router';
import $ from 'jquery';

@Component({
    moduleId: module.id,
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    selector: 'sidebar'
})

export class SideBarComponent implements AfterViewInit {
    public constructor(private _router: Router) { }

    ngAfterViewInit() {
        this.jQueryInitFunction();
    }

    jQueryInitFunction() {
        $(() => {
            var trigger = $('.hamburger'),
                overlay = $('.overlay'),
                isClosed = false;

            trigger.click(function () {
                hamburger_cross();
            });

            function hamburger_cross() {

                if (isClosed == true) {
                    overlay.hide();
                    trigger.removeClass('is-open');
                    trigger.addClass('is-closed');
                    isClosed = false;
                } else {
                    overlay.show();
                    trigger.removeClass('is-closed');
                    trigger.addClass('is-open');
                    isClosed = true;
                }
            }

            $('[data-toggle="offcanvas"]').click(function () {
                $('#wrapper').toggleClass('toggled');
            });
        });
    }
}