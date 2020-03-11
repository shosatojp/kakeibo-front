import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private authenticator: AuthenticatorService,
        private router: Router,
    ) { }

    userName: string = '';
    userNameAvailability: boolean = true;
    password: string = '';
    passwordAvailability: boolean = true;

    failedToRegister: boolean = false;

    ngOnInit(): void {
    }

    async checkUserName() {
        this.http.get('/api/v1/available/username', {
            params: {
                userName: this.userName,
            }
        }).toPromise().then(res => {
            this.userNameAvailability = res && res['available'];
        });
    }

    async checkPassword() {
        this.http.get('/api/v1/available/password', {
            params: {
                password: this.password,
            }
        }).toPromise().then(res => {
            this.passwordAvailability = res && res['available'];
        });
    }

    async register() {
        return new Promise((res, rej) => {
            this.http.get('/api/v1/register', {
                params: {
                    userName: this.userName,
                    password: this.password,
                },
                observe: 'response'
            }).subscribe(async response => {
                if (response.status == 200) {
                    await this.login();
                    res();
                } else {
                    console.log('failed to register');
                    rej();
                }
            }, async error => {
                console.log('failed to register');
                rej();
            });
        });
    }

    async login() {
        this.authenticator.auth(this.userName, this.password).then(() => {
            this.router.navigate(['/']);
        }).catch(() => {
            this.failedToRegister = true;
        });
    }
}
