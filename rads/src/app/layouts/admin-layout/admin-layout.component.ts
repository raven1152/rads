import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ClrAlerts } from '@clr/angular';
import { CommService } from '../../services/comm/comm.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('applicationAlerts') public applicationAlerts: ClrAlerts;
  public message: string;
  public command: string;
  public messageClosed = true;
  public commandClosed = true;
  public messages: string[] = [];
  public commands: any[] = [];
  public commMessages;
  public commCommands;

  public constructor(public comm: CommService) { }

  public ngOnInit() {
    console.log('AdminLayoutComponent: getMessages().subscribe()');
    this.commMessages = this.comm.getMessages().subscribe(message => {
      console.log('AdminLayoutComponent: MESSAGE!');
      this.messages.push(message.toString());
      this.processMessage(message);
    });
    console.log('AdminLayoutComponent: getCommands().subscribe()');
    this.commCommands = this.comm.getCommands().subscribe(command => {
      console.log('AdminLayoutComponent: COMMAND!');
      this.commands.push(command);
      this.processCommand(command);
    });
  }

  public ngOnDestroy() {
    console.log('~AdminLayoutComponent: getMessages().unsubscribe()');
    this.commMessages.unsubscribe();
    console.log('~AdminLayoutComponent: getCommands().unsubscribe()');
    this.commCommands.unsubscribe();
  }

  public processMessage(message: any) {
    this.applicationAlerts.allAlerts.first.alertType = 'alert-info';
    this.applicationAlerts.allAlerts.first.closable = false;
    this.message = message;
    this.messageClosed = false;
  }

  public processCommand(command: any) {
    this.applicationAlerts.allAlerts.last.alertType = 'alert-success';
    this.applicationAlerts.allAlerts.last.closable = false;
    this.command = JSON.stringify(command);
    this.commandClosed = false;
  }
}
