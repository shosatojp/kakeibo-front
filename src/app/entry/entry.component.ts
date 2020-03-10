import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry } from '../definitions';

@Component({
    selector: 'app-entry',
    templateUrl: './entry.component.html',
    styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
    @Input() entry: Entry;
    createdByUserName: string = '';
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
    }

    async getCreatedByUserName() {
        this.createdByUserName = this.createdByUserName || <string>(await this.http.get('/api/v1/username', {
            params: {
                userId: String(this.entry.createdBy)
            }
        }).toPromise())['userName'];
    }
}
