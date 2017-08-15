import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdCardModule, MdListModule, MdIconModule, MdInputModule } from '@angular/material';

import { ChatComponent } from './chat.component';
import { SocketService } from '../shared/socket.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdCardModule,
    MdListModule,
    MdIconModule,
    MdInputModule
  ],
  declarations: [ChatComponent],
  providers: [SocketService]
})
export class ChatModule { }
