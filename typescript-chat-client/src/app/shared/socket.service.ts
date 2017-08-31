import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Message } from './message.model';

import * as socketIo from 'socket.io-client';

let SERVER_URL = 'http://localhost:8080';

@Injectable()
export class SocketService {
    private socket;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(message: Message): void {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<any> {
        return new Observable(observer => {
            this.socket.on('message', (data) => {
                observer.next(data);
            });
        });
    }

    public onConnect(): Observable<any> {
        return new Observable(observer => {
            this.socket.on('connect', () => observer.next());
        });
    }
    
    public onDisconnect(): Observable<any> {
        return new Observable(observer => {
            this.socket.on('disconnect', () => observer.next());
        });
    }
}
