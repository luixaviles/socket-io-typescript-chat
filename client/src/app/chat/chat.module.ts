import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdDialog,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
} from '@angular/material';

import { ChatComponent } from './chat.component';
import { SocketService } from '../shared/socket.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdButtonModule,
    MdCardModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    ReactiveFormsModule
  ],
  declarations: [ChatComponent, DialogUserComponent],
  providers: [MdDialog, SocketService],
  entryComponents: [DialogUserComponent]
})
export class ChatModule { }
