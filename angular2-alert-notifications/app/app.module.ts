import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/alert.component';
import { AlertService } from './_services/alert.service';
import { HomeComponent } from './home/index';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
    ],
    providers: [
        AlertService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }