import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Job, JobService } from '../../services/job/job.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { CommService } from '../../services/comm/comm.service';

@Component({
  selector: 'app-drafting-home',
  templateUrl: './drafting-home.component.html',
  styleUrls: ['./drafting-home.component.scss']
})
export class DraftingHomeComponent implements OnInit, OnDestroy {
  @ViewChild('draftingTable') draftingTable: DatatableComponent;

  public jobs: Job[];
  public command: string;
  public commCommands;
  public targetData = 'job-data';

  constructor(public jobService: JobService, public comm: CommService) { }

  async ngOnInit() {
    this.jobs = await this.jobService.getJobs();
    this.commCommands = this.comm.getCommands().subscribe(async (command) => {
      await this.processCommand(command);
    });
  }

  public async processCommand(command: any) {
    this.command = JSON.stringify(command);
    if (command.command === 'refresh'
      && command.targetType === 'dashboard'
      && command.targetData === this.targetData
    ) {
      this.jobs = await this.jobService.getJobs();
    }
  }

  public ngOnDestroy() {
    this.commCommands.unsubscribe();
  }
}

