import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { EntrydataService } from '../entrydata.service';
import { MatDialog } from '@angular/material/dialog';
import { Entry } from '../definitions';
import { InputDataComponent } from '../input-data/input-data.component';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private authenticator: AuthenticatorService,
        public entrydata: EntrydataService,
        public dialog: MatDialog,
    ) {
    }

    ngOnInit(): void {
        this.entrydata.updateMonthInfo();
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
