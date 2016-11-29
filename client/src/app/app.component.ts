import {Component, OnInit} from '@angular/core';
import { Message, User } from './';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  messages: Message[];

  ngOnInit(): void {
    this.initModel();
  }

  initModel(): void {
    this.messages = [
      new Message(new User('luis', 'http://avatar.3sd.me/80'), 'Hi there'),
      new Message(new User('juan', 'http://avatar.3sd.me/80'), 'How are you'),
    ];
  }

}
