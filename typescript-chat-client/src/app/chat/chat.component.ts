import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Message } from '../shared/message.model';
import { User } from '../shared/user.model';
import { SocketService } from '../shared/socket.service';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


let AVATAR_URL = 'http://avatar.3sd.me/80';

@Component({
  selector: 'tcc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user: User;
  messages: Message[];
  messageContent: string;
  ioConnection: any;
  dialogRef: MdDialogRef<DialogEditUserComponent> | null;

  constructor(private socketService: SocketService, 
              public dialog: MdDialog) { }

  ngOnInit(): void {
    this.initModel();
    this.initIoConnection();
  }

  private initModel(): void {
    this.user = {
      name: this.getRandomUsername(),
      avatar: AVATAR_URL
    }; 
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

  public openUserPopup(): void {
    this.dialogRef = this.dialog.open(DialogEditUserComponent);
    this.dialogRef.afterClosed().subscribe(result => {

    });
  }

  public sendMessage(message): void {
    this.socketService.send(new Message(this.user, message));
    this.messageContent = null;
  }
}
