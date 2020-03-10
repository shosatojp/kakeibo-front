import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { EntrydataService } from '../entrydata.service';
import { Entry, Categories } from '../definitions';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    @Input() month: number;
    @Input() year: number;

    categories: string[] = [];
    constructor(private http: HttpClient,
        private authenticator: AuthenticatorService,
        public entrydata: EntrydataService) {
    }

    ngOnInit(): void {
        // this.show();
    }

    async show() {
        await this.entrydata.update(this.year, this.month);

        this.entrydata.getCategories().then(data => {
            console.log(data);
            this.categories = data;
        });

        // console.log(await this.entrydata.getEntries(this.year, this.month));
    }


}
