import { Component } from "@angular/core";
import { FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent {
    showPassword: boolean = false;
    showPasswordForReEnterPasswordField: boolean = false;
    isUserNameAlreadyAvailable: boolean = false;

    constructor(private formBuilder: FormBuilder) { }

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }

    togglePasswordVisibilityForReEnterPasswordField(): void {
        this.showPasswordForReEnterPasswordField =
            !this.showPasswordForReEnterPasswordField;
    }

    signUpForm = this.formBuilder.group({
        userName: ['', [Validators.required, Validators.pattern(/[A-Za-z]/)]],
        password: ['Arulsaru', [Validators.required, Validators.pattern(/[A-Za-z0-9]{8}[\d]{1}/)]],
        reEnterPassword: ['Arulsaru', [Validators.required]],
        email: ['saruarul154@gmail.com', [Validators.required, Validators.email]],
        phoneNumber: ['1234567890', [Validators.required, Validators.pattern(/[0-9]{9}/)]],
    });

    get userName(): AbstractControl {
        return this.signUpForm.get('userName')!;
    }

    get password(): AbstractControl {
        return this.signUpForm.get('password')!;
    }

    get reEnterPassword(): AbstractControl {
        return this.signUpForm.get('reEnterPassword')!;
    }

    get email(): AbstractControl {
        return this.signUpForm.get('email')!;
    }

    get phoneNumber(): AbstractControl {
        return this.signUpForm.get('phoneNumber')!;
    }

}