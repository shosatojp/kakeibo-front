import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { TooltipComponent } from '@angular/material/tooltip';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private authenticator: AuthenticatorService,
    ) { }

    userName: string = '';
    password: string = '';

    ngOnInit(): void {
    }

    async login() {
        this.authenticator.userName = this.userName;
        this.authenticator.password = this.password;
        await this.authenticator.auth()
    }

}
