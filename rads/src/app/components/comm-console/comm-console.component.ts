import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommService } from '../../services/comm/comm.service';

@Component({
  selector: 'app-comm-console',
  templateUrl: './comm-console.component.html',
  styleUrls: ['./comm-console.component.scss']
})
export class CommConsoleComponent implements OnInit, OnDestroy {
  public messages: string[] = [];
  public commands: any[] = [];
  public connection;
  public cmdConnection;
  public message;

  constructor(private comm: CommService) {}

  ngOnInit() {
    this.connection = this.comm.getMessages().subscribe(message => {
      this.messages.push(message.toString());
    });
    this.cmdConnection = this.comm.getCommands().subscribe(command => {
      this.commands.push(command);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
    this.cmdConnection.unsubscribe();
  }

  sendMessage() {
    this.comm.sendMessage(this.message);
    this.message = '';
  }

  formatCommand(command: any): string {
    return JSON.stringify(command);
  }

  keyPress(event: any) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }
}
