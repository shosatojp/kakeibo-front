import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticatorService } from '../authenticator.service';
import { TooltipComponent } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private authenticator: AuthenticatorService,
        private router: Router,
    ) { }

    userName: string = '';
    password: string = '';

    failedToLogin: boolean = false;

    ngOnInit(): void {
    }

    async login() {
        this.authenticator.auth(this.userName, this.password).then(() => {
            this.router.navigate(['/']);
        }).catch(() => {
            this.failedToLogin = true;
        });
    }

}
