import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { environment } from "environments/environment";
import { AlertService } from "../../services/alert.service";

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    formErrors = { 'email': '', 'password': '' };

    public constructor(
        private _router: Router,
        private formBuilder: FormBuilder,
        private alertService: AlertService) { }

    ngOnInit(): void {
        this.buildForm();
        //this.alertService.okAlert({title: 'something', text:'something', type:'error'});
    }

    /**
     * Builds a form with its form controlls and validations and waits for changes. 
     */
    buildForm(): void {
        this.loginForm = this.formBuilder.group({
            'email': ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.pattern('[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})')
            ]],
            'password': ['', [
                Validators.required,
                Validators.minLength(4),
            ]]
        });

        this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }

    /**
     * This method waits for changes and adds the validation errors to every form control.
     * @param data the event.
     */
    onValueChanged(data?: any) {
        if (!this.loginForm) return;
        for (let field in this.formErrors) {
            this.formErrors[field] = '';
            let control = this.loginForm.get(field);
            if (control && control.dirty || !control.valid && control.touched && control.statusChanges) {
                let messages = this.validations[field];
                for (let key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    /**
     * Makes a login request.
     * Here's also an alert Example.
     * @param formValues user email and password.
     */
    login(formValues: any) {
        console.log(formValues)
        this._router.navigate(['/home'])
    }

    validations = {
        'email': {
            'required': 'email@example.com is required.',
            'minlength': 'Email cannot be less than 4 characters long.',
            'pattern': 'Valid Email format required'
        },
        'password': {
            'required': 'Password is required.',
            'minlength': 'Password cannot be less than 4 characters long.',
        }
    }
}