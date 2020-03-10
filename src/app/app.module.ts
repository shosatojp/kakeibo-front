import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { InputDataComponent } from './input-data/input-data.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpHandler } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        InputDataComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        FormsModule,
    ],
    providers: [{
        provide:HttpHandler,
        useClass:
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
