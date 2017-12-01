import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialog,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
} from '@angular/material';

import { ChatComponent } from './chat.component';
import { SocketService } from '../shared/socket.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule
  ],
  declarations: [ChatComponent, DialogUserComponent],
  providers: [MatDialog, SocketService],
  entryComponents: [DialogUserComponent]
})
export class ChatModule { }
