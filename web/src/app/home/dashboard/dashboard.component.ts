import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { SideNavService } from "../../service/side-nav.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    @ViewChild('sidenav') public sidenav!: MatSidenav;

    constructor(private sideNavService: SideNavService) {}

    ngOnInit() {
        console.log(this.sidenav);
        if(!this.sidenav) {
            this.sideNavService.sideNavToggleSubject.subscribe(() => {
                this.sidenav.toggle();
            })
        }
    }
    
}