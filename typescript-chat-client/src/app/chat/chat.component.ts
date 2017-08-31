import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Message } from '../shared/message.model';
import { User } from '../shared/user.model';
import { SocketService } from '../shared/socket.service';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


let AVATAR_URL = 'https://api.adorable.io/avatars/285';

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
  defaultDialogUserParams: any = {
    disableClose: true,
    data: {
      title: 'Wellcome',
      typeDialog: 'new-user'
    }
  };

  constructor(private socketService: SocketService,
    public dialog: MdDialog) { }

  ngOnInit(): void {
    this.initModel();
    // Using timeout due to https://github.com/angular/angular/issues/14748
    setTimeout(() => {
      this.openUserPopup(this.defaultDialogUserParams);
    }, 0);
  }

  private initModel(): void {
    this.user = {
      id: this.getRandomId()
    };

    this.messages = [];
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        this.messages.push(message);
        console.log(this.messages);
      });

    this.socketService.onConnect()
      .subscribe(() => {
        console.log('onConnect');
      });

    this.socketService.onDisconnect()
      .subscribe(() => {
        console.log('onDisconnect');
      });
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }

  public onClickUserInfo() {
    this.openUserPopup({
      data: {
        username: this.user.name,
        title: 'Edit Details',
        typeDialog: 'edit-user'
      }
    });
  }

  private openUserPopup(params): void {
    this.dialogRef = this.dialog.open(DialogEditUserComponent, params);
    this.dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.user.name = result;
      this.user.avatar = `${AVATAR_URL}/${this.user.id}.png`;
      this.initIoConnection();
    });
  }

  public sendMessage(message): void {
    if (!message) {
      return;
    }

    this.socketService.send({
      from: this.user,
      content: message
    });
    this.messageContent = null;
  }
}
