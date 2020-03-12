import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonthInfo } from '../definitions';
import { EntrydataService } from '../entrydata.service';

@Component({
    selector: 'app-annual-report',
    templateUrl: './annual-report.component.html',
    styleUrls: ['./annual-report.component.scss']
})
export class AnnualReportComponent implements OnInit {

    @Input() year: number;

    data: MonthInfo[] = [];
    categories: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private entrydata: EntrydataService,
    ) {
        this.year = route.data['year'] || new Date().getFullYear();
    }

    ngOnInit(): void {
        this.update();
    }

    async update() {
        const data: MonthInfo[] = [];
        this.categories = await this.entrydata.getCategories();
        for (let i = 0; i < 12; i++) {
            data.push(await this.entrydata.getMonthInfo(this.year, i + 1));
        }
        this.data = data;
    }

    sumCategory(c: string) {
        return this.data.map(e => {
            return e.categories[c] ? e.categories[c].sum : 0;
        }).reduce((a, b) => a + b, 0);
    }

    sumAll() {
        return this.categories.map(c =>
            this.sumCategory(c)).reduce((a, b) => a + b, 0);
    }

    async showPrevYear(){
        this.router.navigate(['/annual-report', --this.year]);
        this.update();
    }
    async showNextYear(){
        this.router.navigate(['/annual-report', ++this.year]);
        this.update();
    }

}
