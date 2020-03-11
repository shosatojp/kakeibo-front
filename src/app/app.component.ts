import { Component } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputDataComponent } from './input-data/input-data.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AuthenticatorService } from './authenticator.service';
import { Entry } from './definitions';
import { MatSidenavContainer, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'kakeibo';
    constructor(public dialog: MatDialog,
        public authenticator: AuthenticatorService,
        private router: Router) {
    }

    prevInputData: Entry;
    openDialog(): void {
        const dialogRef = this.dialog.open(InputDataComponent, {
            width: '300px',
            data: { prevInputData: this.prevInputData }
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }
}
