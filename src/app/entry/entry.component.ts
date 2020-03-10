import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry } from '../definitions';
import { EntrydataService } from '../entrydata.service';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
    @Input() entry: Entry;
    createdByUserName: string = '';
    constructor(private http: HttpClient,
        private entrydata: EntrydataService) { }

    hover: boolean = false;
    ngOnInit(): void {
    }

    async onMouseEnter() {
        this.getCreatedByUserName();
    }

    async getCreatedByUserName() {
        this.createdByUserName = this.createdByUserName || <string>(await this.http.get('/api/v1/username', {
            params: {
                userId: String(this.entry.createdBy)
            }
        }).toPromise())['userName'];
    }

    async remove() {
        this.entrydata.removeEntry(this.entry);
        const date = new Date(this.entry.date);
        this.entrydata.update(date.getFullYear(), date.getMonth() + 1);
    }
}
