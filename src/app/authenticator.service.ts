import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatorService {

    constructor(private http: HttpClient) { }

    userName: string = 'hoge';
    password: string = 'aaa';
    sessionId: string;

    authed(): boolean {
        return !!this.sessionId;
    }

    async auth() {
        if (!this.authed()) {
            console.log('auth')
            const res = await this.http.get('/api/v1/auth', {
                params: {
                    userName: this.userName,
                    password: this.password
                }
            }).toPromise();
            this.sessionId = res['sessionId'];
        }
    }
}
