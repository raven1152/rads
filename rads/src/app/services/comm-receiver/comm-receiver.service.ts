import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class CommReceiverService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
    console.log('CommReceiverService: constructor');
  }

  public sendMessage(message) {
    this.socket.emit('response', message);
    console.log('CommReceiverService: sendMessage\'response\'');
  }

  public getCommands(): Observable<any> {
    console.log('CommReceiverService: getCommands');
    const observable = new Observable(observer => {
      this.socket.on('command', (data) => {
        observer.next(data);
        console.log('CommReceiverService/on(command): subscribe');
      });
      return () => {
        console.log('CommReceiverService/on(command): unsubscribe');
      };
    });
    return observable;
  }

  public getMessages(): Observable<any> {
    console.log('CommReceiverService: getMessages');
    const observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
        console.log('CommReceiverService/on(message): subscribe');
      });
      return () => {
        console.log('CommReceiverService/on(message): unsubscribe');
      };
    });
    return observable;
  }
}
