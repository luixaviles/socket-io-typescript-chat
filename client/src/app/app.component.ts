import {Component, OnInit} from '@angular/core';
import {Message} from './shared/message.model';
import {User} from './shared/user.model';
import {SocketService} from './shared/socket.service';

let AVATAR_URL = 'http://avatar.3sd.me/80';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [SocketService]
})
export class AppComponent implements OnInit {
    user: User = new User('random-user', AVATAR_URL);
    messages: Message[] = [
        new Message(this.user, 'Hi there'),
        new Message(new User('juan', AVATAR_URL), 'How are you'),
    ];
    messageContent: string;
    ioConnection: any;

    constructor(private socketService: SocketService) {

    }

    ngOnInit(): void {
        this.initModel();
        this.initIoConnection();
    }

    initModel(): void {
        this.messageContent = '';
    }

    initIoConnection(): void {
        this.ioConnection = this.socketService.get().subscribe((message: Message) => {
            this.messages.push(message);
        });
    }

    sendMessage(): void {
        this.socketService.send(new Message(this.user, this.messageContent));
        this.initModel();
    }
}
