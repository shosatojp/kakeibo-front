import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { EntrydataService } from '../entrydata.service';
import { Entry } from '../definitions';
import { InputDataComponent } from '../input-data/input-data.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    @Input() month: number;
    @Input() year: number;

    constructor(private http: HttpClient,
        private authenticator: AuthenticatorService,
        public entrydata: EntrydataService,
        public dialog: MatDialog,
        private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
        this.authenticator.auth().then(async () => {
            await this.show();
        });
    }

    incrementMonth() {
        if (this.month == 12) {
            this.month = 1;
            this.year++;
        } else {
            this.month++;
        }
    }

    decrementMonth() {
        if (this.month == 1) {
            this.month = 12;
            this.year--;
        } else {
            this.month--;
        }
    }
    showNextMonth() {
        this.incrementMonth();
        this.show();
    }
    showPrevMonth() {
        this.decrementMonth();
        this.show();
    }

    async show() {
        await this.entrydata.update(this.year, this.month);
    }

    sumDate(date: number): number {
        let sum = 0;
        for (const category of this.entrydata.data[date - 1].categories) {
            for (const entry of category.entries) {
                sum += entry.price;
            }
        }
        return sum;
    }

    sumCategory(category: string): number {
        return this.entrydata.data.map(e =>
            e.categories.filter(e => e.category == category)
                .map(e => e.entries.map(e => e.price).reduce((a, b) => a + b, 0))
                .reduce((a, b) => a + b, 0)
        ).reduce((a, b) => a + b, 0);
    }

    sumAll() {
        return this.entrydata.categories.map(c => this.sumCategory(c)).reduce((a, b) => a + b, 0)
    }

    getDayOfWeek(date: Date): string {
        return '日月火水木金土'[date.getDay()];
    }

    openDialog(date: Date, category: string): void {
        const dialogRef = this.dialog.open(InputDataComponent, {
            width: '300px',
            data: {
                prevInputData: {
                    date: date.getTime(),
                    category: category
                }
            }
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
