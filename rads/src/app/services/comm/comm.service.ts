import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class CommService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
    console.log(`CommService: constructor - \'${this.url}\'`);
  }

  public sendMessage(message) {
    console.log(`CommService: sendMessage \'${message}\'`);
    this.socket.emit('message', message);
  }

  public getCommands() {
    console.log('CommService: subscribe(commands)');
    const observable = new Observable(observer => {
      this.socket.on('command', (data) => {
        observer.next(data);
        console.log(`CommService: on(command) \'${data}\'`);
      });
      return () => {
        console.log('CommService: unsubscribe');
      };
    });
    return observable;
  }

  public getMessages() {
    console.log('CommService: subscribe(messages)');
    const observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
        console.log(`CommService: on(message) \'${data}\'`);
      });
      return () => {
        console.log('CommService: unsubscribe');
      };
    });
    return observable;
  }
}
