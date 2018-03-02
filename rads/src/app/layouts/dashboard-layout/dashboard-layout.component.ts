import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ClrAlerts } from '@clr/angular';
import { CommReceiverService } from '../../services/comm-receiver/comm-receiver.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('applicationAlerts') public applicationAlerts: ClrAlerts;
  public message: string;
  public command: string;
  public messageClosed = true;
  public commandClosed = true;
  public messages: string[] = [];
  public commands: any[] = [];
  public commMessages;
  public commCommands;

  public collapsed = true;

  public constructor(public comm: CommReceiverService) { }

  public ngOnInit() {
    this.commMessages = this.comm.getMessages().subscribe(message => {
      this.messages.push(message.toString());
      this.processMessage(message);
    });
    this.commCommands = this.comm.getCommands().subscribe(command => {
      this.commands.push(command);
      this.processCommand(command);
    });
  }

  public ngOnDestroy() {
    this.commMessages.unsubscribe();
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
