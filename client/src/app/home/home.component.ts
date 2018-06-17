import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tcc-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
        this.router.navigateByUrl('chat').then((bool) => {
            console.log('navigated to chat', bool);
        }).catch((err) => {
            console.log('error: ', err);
        });
    }
  }

}
