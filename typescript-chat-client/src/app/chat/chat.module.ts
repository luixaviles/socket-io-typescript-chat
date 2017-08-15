import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdCardModule, 
         MdListModule, 
         MdIconModule, 
         MdInputModule, 
         MdButtonModule, 
         MdDialogModule, 
         MdDialog } from '@angular/material';

import { ChatComponent } from './chat.component';
import { SocketService } from '../shared/socket.service';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdDialogModule
  ],
  declarations: [ChatComponent, DialogEditUserComponent],
  providers: [SocketService, MdDialog],
  entryComponents: [DialogEditUserComponent]
})
export class ChatModule { }
