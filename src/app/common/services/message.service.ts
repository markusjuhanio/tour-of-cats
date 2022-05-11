import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  };

  clear() {
    this.messages = [];
  }

  constructor() { }
}
