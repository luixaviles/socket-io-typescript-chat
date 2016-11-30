import {Component, OnInit} from '@angular/core';
import {Message} from './shared/message.model';
import {User} from './shared/user.model';

let AVATAR_URL = 'http://avatar.3sd.me/80';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    user: User = new User('random-user', AVATAR_URL);
    messages: Message[] = [
        new Message(this.user, 'Hi there'),
        new Message(new User('juan', AVATAR_URL), 'How are you'),
    ];
    messageString: string;

    ngOnInit(): void {
        this.initModel();
    }

    initModel(): void {
        this.messageString = '';
    }

    sendMessage(): void {
        this.messages.push(new Message(this.user, this.messageString));
        this.initModel();
    }
}
