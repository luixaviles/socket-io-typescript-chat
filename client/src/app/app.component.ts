import {Component, OnInit} from '@angular/core';
import {Message, User} from './';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user: User = new User('random-user', 'http://avatar.3sd.me/80');
    messages: Message[] = [
        new Message(this.user, 'Hi there'),
        new Message(new User('juan', 'http://avatar.3sd.me/80'), 'How are you'),
    ];

    ngOnInit(): void {
        this.initModel();
    }

    initModel(): void {

    }

}
