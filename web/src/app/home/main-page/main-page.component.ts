import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {
    fileName: string = '';
    isFileUploaded: boolean = false;
    isButtonClicked: boolean = false;

    constructor(private http: HttpClient) { }

    onFileSelected(event: any): void {
        const file: File = event.target.files[0];
        if (file) {
            this.fileName = file.name;
            const formData = new FormData();
            formData.append("thumbnail", file);
            const upload$ = this.http.post("/api/thumbnail-upload", formData);
            upload$.subscribe();
            this.isFileUploaded = true; 
        }
    }

    showResults(): void {
        this.isButtonClicked = true;
        window.setTimeout(() => {
            this.isButtonClicked = false;
            this.isFileUploaded = false;
        }, 3000);
    }
}