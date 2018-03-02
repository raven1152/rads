import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class CommService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
    console.log('CommService: constructor');
  }

  public sendMessage(message) {
    this.socket.emit('message', message);
    console.log('CommService: sendMessage\'message\'');
  }

  public getCommands() {
    console.log('CommService: getCommands');
    const observable = new Observable(observer => {
      this.socket.on('command', (data) => {
        observer.next(data);
        console.log('CommService/on(command): subscribe');
      });
      return () => {
        console.log('CommService/on(command): unsubscribe');
      };
    });
    return observable;
  }

  public getMessages() {
    console.log('CommService: getMessages');
    const observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
        console.log('CommService/on(message): subscribe');
      });
      return () => {
        console.log('CommService/on(message): unsubscribe');
      };
    });
    return observable;
  }
}
