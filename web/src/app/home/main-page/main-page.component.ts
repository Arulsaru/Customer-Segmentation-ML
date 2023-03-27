import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FileUploadService } from 'src/app/service/file-upload.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent {
    file!: File; // Variable to store file
    loading: boolean = false; // Flag variable
    shortLink: string = '';

    isFileUploaded: boolean = false;
    isButtonClicked: boolean = false;

    constructor(private auth: FileUploadService) { }

    onChange(event: any) {
        this.file = event.target.files[0];
        this.isFileUploaded = true;
    }

    onUpload() {
        this.loading = true;
        console.log(this.file);
        this.auth.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {

                    // Short link via api response
                    this.shortLink = event.link;
                    this.loading = false; // Flag variable 
                }
            }
        );

        window.setTimeout(() => {
            this.loading = false;
        }, 3000);
    }

    showResults(): void {
        this.isButtonClicked = true;
        window.setTimeout(() => {
            this.isButtonClicked = false;
            this.isFileUploaded = false;
        }, 3000);
    }
}