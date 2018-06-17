import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tcc-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(public auth: AuthService, public router: Router) {
        auth.handleAuthentication();
    }

    public logout(): void {
        this.auth.logout();
    }
    public login(): void {
        this.auth.login();
    }

    public isLoggedIn(): boolean {
        return this.auth.isAuthenticated();
    }


}
