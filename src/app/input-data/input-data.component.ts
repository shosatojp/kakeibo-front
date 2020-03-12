import { Component, OnInit, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entry } from '../definitions';
import { CalendarComponent } from '../calendar/calendar.component';
import { EntrydataService } from '../entrydata.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
class JapaneseDateAdapter extends NativeDateAdapter {
    getDateNames(): string[] {
        return [...Array(31).keys()].map(e => String(e + 1));
    }
}

@Component({
    selector: 'app-input-data',
    templateUrl: './input-data.component.html',
    styleUrls: ['./input-data.component.scss'],
    providers: [{
        provide: DateAdapter,
        useClass: JapaneseDateAdapter,
    }]
})
export class InputDataComponent implements OnInit {
    date: Date;
    price: number;
    title: string = '';
    category: string = '';
    categories: string[] = [];

    exit: boolean = false;

    constructor(
        private http: HttpClient,
        private authenticator: AuthenticatorService,
        private dateAdapter: DateAdapter<NativeDateAdapter>,
        public dialogRef: MatDialogRef<InputDataComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Entry,
        public entrydata: EntrydataService,
        private _snackBar: MatSnackBar) {
        dateAdapter.setLocale('ja-JP');
        if (data) {
            if (data['prevInputData']) {
                this.date = new Date(data['prevInputData']['date']);
                this.category = data['prevInputData']['category'];
            }
            this.exit = data['exit'];
        } else {
            this.date = new Date();
        }

    }

    ngOnInit(): void {
        this.entrydata.getCategories().then(data => {
            this.categories = data;
        });
    }

    async submit() {
        await this.entrydata.postEntry({
            date: this.date.getTime(),
            price: this.price,
            title: this.title,
            category: this.category,
        });

        this.price = undefined;
        this.title = '';

        await this.entrydata.update(this.date.getFullYear(), this.date.getMonth() + 1);

        this.openSnackBar('登録しました', 'OK');

        if (this.exit)
            this.dialogRef.close();
    }



    onNoClick(): void {
        this.dialogRef.close();
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}

