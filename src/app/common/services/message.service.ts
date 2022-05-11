import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  messages: Message[] = [];

  add(message: string): void {
    const randomId = Math.floor(Math.random() * 10000);
    if (this.messages.length >= 5) {
      this.messages.pop();
    }
    this.messages.unshift({id: randomId, text: message});
  };

  clear() {
    this.messages = [];
  }

  remove(id: number) {
    this.messages = this.messages.filter(msg => msg.id !== id);
  }

  constructor() { }
}
