import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    @Input() month: number;
    @Input() year: number;
    data: {
        date: Date,
    }[] = [];
    categories: {}[] = ["hoge","hgie"];
    constructor() {
        // set day
    }

    ngOnInit(): void {
        const first_day = new Date(this.year, this.month, 1);
        do {
            this.data.push({
                date: new Date(first_day)
            });
            first_day.setDate(first_day.getDate() + 1);
        } while (first_day.getDate() != 1);
    }

}
