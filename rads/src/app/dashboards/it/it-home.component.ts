import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommService } from '../../services/comm/comm.service';
import { SingleData, ChartDataService } from '../../services/chart-data/chart-data.service';

@Component({
  selector: 'app-it-home',
  templateUrl: './it-home.component.html',
  styleUrls: ['./it-home.component.scss']
})
export class ItHomeComponent implements OnInit, OnDestroy {
  public single: any[];
  public showLegend = true;
  public colorScheme = {
    domain: ['#aa7828', '#611f78', '#aa2f26']
  };
  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  public data: SingleData[];
  public command: string;
  public commCommands;
  public targetData = 'single';

  constructor(public dataService: ChartDataService, public comm: CommService) { }

  async ngOnInit() {
    this.data = await this.dataService.getSingleData();
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
      this.data = await this.dataService.getSingleData();
    }
  }

  public ngOnDestroy() {
    this.commCommands.unsubscribe();
  }

  onSelect(event) {
    console.log(event);
  }
}
