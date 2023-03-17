import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    showPassword: boolean = false;

    constructor(private formBuilder: FormBuilder) { }

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }

    loginForm = this.formBuilder.group({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    })

    get userName(): AbstractControl {
        return this.loginForm.get('username')!;
    }

    get password(): AbstractControl {
        return this.loginForm.get('password')!;
    }
}