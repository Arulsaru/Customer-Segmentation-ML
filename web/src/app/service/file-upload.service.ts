import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})

export class FileUploadService {
    constructor(private http: HttpClient) { }

    server_add = "http://127.0.0.1:5000"    

    upload(file: any): Observable<any> {
        const formData = new FormData();
        formData.append("file", file, file.name);
        return this.http.post(this.server_add, formData);
    }
}