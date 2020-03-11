import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatorService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    userName: string = localStorage.getItem('userName') || '';
    password: string = '';
    sessionId: string = localStorage.getItem('sessionId') || '';
    expiresOn: number = Number(localStorage.getItem('expiresOn') || 0);

    authed(): boolean {
        return !!this.sessionId;
    }

    async updateSessionId() {
        return new Promise((res, rej) => {
            this.http.get('/api/v1/reflesh', {
                params: {
                    userName: this.userName,
                    sessionId: this.sessionId,
                },
                observe: 'response'
            }).subscribe(response => {
                if (response.status == 200) {
                    this.sessionId = response.body['sessionId'];
                    localStorage.setItem('sessionId', this.sessionId);
                    this.expiresOn = Number(response.body['expiresOn']);
                    localStorage.setItem('expiresOn', String(this.expiresOn));
                    res();
                } else {
                    this.router.navigate(['/login']);
                    rej();
                }
            });
        });
    }

    async auth(_userName?: string, _password?: string) {
        const userName = _userName || this.userName;
        const password = _password || this.password;

        if (!(userName)) {
            this.router.navigate(['/login']);
            throw Error();
        }

        if (this.expiresOn < new Date().getTime() + 1 * 60 * 1000) {
            await this.updateSessionId();
        }

        if (!this.authed()) {
            return new Promise((res, rej) => {
                this.http.get('/api/v1/auth', {
                    params: {
                        userName: userName,
                        password: password
                    },
                    observe: 'response'
                }).subscribe(response => {
                    if (response.status == 200) {
                        console.log('authed');
                        this.sessionId = response.body['sessionId'];
                        this.expiresOn = Number(response.body['expiresOn']);
                        this.userName = userName;
                        localStorage.setItem('sessionId', this.sessionId);
                        localStorage.setItem('expiresOn', String(this.expiresOn));
                        localStorage.setItem('userName', userName);
                        res();
                    } else {
                        this.router.navigate(['/login']);
                        rej();
                    }
                }, error => {
                    rej();
                });
            });
        }
    }

    async logout(): Promise<boolean> {
        return new Promise((res, rej) => {
            this.http.get('/api/v1/logout', {
                params: {
                    userName: this.userName,
                    sessionId: this.sessionId,
                },
                observe: 'response'
            }).subscribe(response => {
                if (response.status == 200) {
                    this.sessionId = null;
                    this.userName = '';
                    localStorage.removeItem('userName');
                    localStorage.removeItem('sessionId');
                    this.router.navigate(['/login']);
                    res();
                } else {
                    rej();
                }
            });
        });
    }
}
