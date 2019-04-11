import { Component } from '@angular/core';

import { AlertService } from '../_services/alert.service';

@Component({
    moduleId: module.id,
    templateUrl: 'help.component.html'
})

export class HomeComponent {
    constructor(private alertService: AlertService) { }

    success(message: string) { 
        this.alertService.success(message);
    }

    error(message: string) {
        this.alertService.error(message);
    }

    info(message: string) {
        this.alertService.info(message);
    }

    warn(message: string) {
        this.alertService.warn(message);
    }

    clear() {
        this.alertService.clear();
    }
}