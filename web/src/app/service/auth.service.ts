import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../shared/constant';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private httpClient: HttpClient) {}
    
    saveUserDetails(userDetails: object) {
        console.log(userDetails);
        return this.httpClient.post(`${BASE_URL}user/create`, userDetails);
        // console.log("inside");
    }

    loginUser(loginDetails: object) {
        console.log(loginDetails);
        return this.httpClient.post(`${BASE_URL}user/login`, loginDetails);
    }
}