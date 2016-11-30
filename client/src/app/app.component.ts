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
    private user: User;
    private messages: Message[];
    private messageContent: string;
    private ioConnection: any;

    constructor(private socketService: SocketService) {}

    ngOnInit(): void {
        this.initModel();
        this.initIoConnection();
    }

    private initModel(): void {
        this.user = new User(this.getRandomUsername(), AVATAR_URL);
        this.messages = [];
    }

    private initIoConnection(): void {
        this.ioConnection = this.socketService.get().subscribe((message: Message) => {
            this.messages.push(message);
        });
    }

    private getRandomUsername(): string {
        return 'User-' + (Math.floor(Math.random() * (10000 - 0)) + 1);
    }

    sendMessage(): void {
        this.socketService.send(new Message(this.user, this.messageContent));
        this.messageContent = null;
    }
}
