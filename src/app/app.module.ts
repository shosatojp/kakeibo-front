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
import { HttpClientModule, HttpHandler, HttpClient } from '@angular/common/http';
import { AuthenticatorService } from './authenticator.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryComponent } from './entry/entry.component';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        InputDataComponent,
        EntryComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatSliderModule,
        MatInputModule,
        MatAutocompleteModule,
        MatTableModule,
        MatChipsModule,
        MatTooltipModule,
    ],
    providers: [
        AuthenticatorService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

