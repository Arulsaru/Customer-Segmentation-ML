import { Component } from '@angular/core';
import { SideNavService } from '../service/side-nav.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {

    constructor(private sideNavService: SideNavService) {}

    logout(): void {}

    toggleSideNav(): void {
        this.sideNavService.toggle();
    }
}