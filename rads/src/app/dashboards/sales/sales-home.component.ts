import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartDataService, MultiData } from '../../services/chart-data/chart-data.service';
import { CommService } from '../../services/comm/comm.service';

@Component({
  selector: 'app-sales-home',
  templateUrl: './sales-home.component.html',
  styleUrls: ['./sales-home.component.scss']
})
export class SalesHomeComponent implements OnInit, OnDestroy {
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Month';
  public showYAxisLabel = true;
  public yAxisLabel = 'US Dollars';
  public colorScheme = { domain: ['#1e7836', '#aa2f26']};
  public autoScale = true;

  public data: any[];
  public command: string;
  public commCommands;
  public targetData = 'single';

  public constructor(public dataService: ChartDataService, public comm: CommService) { }

  async ngOnInit() {
    this.data = await this.dataService.getMultiData();
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
      this.data = await this.dataService.getMultiData();
    }
  }

  public ngOnDestroy() {
    this.commCommands.unsubscribe();
  }

  public onSelect(event) {
    console.log(event);
  }
}
