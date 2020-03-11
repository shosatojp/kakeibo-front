import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { EntrydataService } from '../entrydata.service';


@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private authenticator: AuthenticatorService,
        public entrydata:EntrydataService,
    ) { }

    ngOnInit(): void {
        this.entrydata.updateMonthInfo();
    }

}
