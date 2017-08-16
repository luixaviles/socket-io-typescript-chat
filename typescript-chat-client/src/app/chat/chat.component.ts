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
    this.initIoConnection();
    // Using timeout due to https://github.com/angular/angular/issues/14748
    setTimeout(() => {
      this.openUserPopup(this.defaultDialogUserParams);
    }, 0);
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
    });
  }

  public sendMessage(message): void {
    this.socketService.send(new Message(this.user, message));
    this.messageContent = null;
  }
}
