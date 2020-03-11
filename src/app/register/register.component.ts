import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private authenticator: AuthenticatorService,
    ) { }

    userName: string = '';
    userNameAvailability: boolean = true;
    password: string = '';
    passwordAvailability: boolean = true;

    ngOnInit(): void {
    }

    async checkUserName() {
        const res = await this.http.get('/api/v1/available/username', {
            params: {
                userName: this.userName,
            }
        }).toPromise();
        this.userNameAvailability = res && res['available'];
    }

    async checkPassword() {
        const res = await this.http.get('/api/v1/available/password', {
            params: {
                password: this.password,
            }
        }).toPromise();
        this.passwordAvailability = res && res['available'];
    }

    async register() {
        const res = await this.http.get('/api/v1/register', {
            params: {
                userName: this.userName,
                password: this.password,
            }
        }).toPromise();
        if (res && res['completed']) {
            await this.login();
        } else {
            console.log('failed to register');
        }
    }

    async login() {
        this.authenticator.userName = this.userName;
        this.authenticator.password = this.password;
        await this.authenticator.auth()
    }


}
