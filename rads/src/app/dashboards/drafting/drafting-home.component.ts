import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { Job, JobService } from '../../services/job/job.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-drafting-home',
  templateUrl: './drafting-home.component.html',
  styleUrls: ['./drafting-home.component.scss']
})
export class DraftingHomeComponent implements OnInit, AfterViewInit, AfterContentInit {
  @ViewChild('draftingTable') draftingTable: DatatableComponent;
  public jobs: Job[];

  constructor(public jobService: JobService) { }

  async ngOnInit() {
    this.jobs = await this.jobService.getJobs();
  }

  ngAfterContentInit() {
    // console.log('content-init')
    // console.log(this.draftingTable.columnTemplates);
  }

  ngAfterViewInit() {
    console.log('view-init');
    console.log(this.draftingTable._columns);
    console.log(this.draftingTable.columnTemplates);
    console.log(this.draftingTable.columnTemplates[2]);
    console.log(this.draftingTable.columnTemplates[3]);
  }
}

