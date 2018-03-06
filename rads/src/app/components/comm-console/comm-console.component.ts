import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommService } from '../../services/comm/comm.service';

@Component({
  selector: 'app-comm-console',
  templateUrl: './comm-console.component.html',
  styleUrls: ['./comm-console.component.scss']
})
export class CommConsoleComponent implements OnInit, OnDestroy {
  public message;
  public messages: string[] = [];
  public commands: any[] = [];
  public commMessages;
  public commCommands;

  public constructor(public comm: CommService) { }

  ngOnInit() {
    console.log('CommConsoleComponent: getMessages().subscribe()');
    this.commMessages = this.comm.getMessages().subscribe(message => {
      console.log('CommConsoleComponent: MESSAGE!');
      this.messages.push(message.toString());
    });
    console.log('CommConsoleComponent: getCommands().subscribe()');
    this.commCommands = this.comm.getCommands().subscribe(command => {
      console.log('CommConsoleComponent: COMMAND!');
      this.commands.push(command);
    });
  }

  ngOnDestroy() {
    console.log('~CommConsoleComponent: getMessages().unsubscribe()');
    this.commMessages.unsubscribe();
    console.log('~CommConsoleComponent: getCommands().unsubscribe()');
    this.commCommands.unsubscribe();
  }

  keyPress(event: any) {
    if (event.key === 'Enter') {
      console.log('->');
      this.sendMessage();
    }
  }

  sendMessage() {
    console.log('CommConsoleComponent: sendMessage()');
    this.comm.sendMessage(this.message);
    this.message = '';
  }

  formatCommand(command: any): string {
    return JSON.stringify(command);
  }
}
