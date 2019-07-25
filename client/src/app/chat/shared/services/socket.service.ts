import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Message} from '../model/message';
import {Event} from '../model/event';
import * as socketIo from 'socket.io-client';
import {fromEvent} from 'rxjs/observable/fromEvent';

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
