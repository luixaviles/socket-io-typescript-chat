import {Injectable} from '@angular/core';
import {Message} from '../model/message';
import {Event} from '../model/event';
import * as socketIo from 'socket.io-client';
import {fromEvent, Observable} from "rxjs";

const SERVER_URL = 'http://localhost:8080';

@Injectable()
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return fromEvent(this.socket, 'message')
  }

  public onEvent(event: Event): Observable<any> {
    return fromEvent(this.socket, event);
  }
}
