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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { TopComponent } from './top/top.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        InputDataComponent,
        EntryComponent,
        TopComponent,
        LoginComponent,
        RegisterComponent
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
        MatSnackBarModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
    ],
    providers: [
        AuthenticatorService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

