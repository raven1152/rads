import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-home',
  templateUrl: './sales-home.component.html',
  styleUrls: ['./sales-home.component.scss']
})
export class SalesHomeComponent {
  public multi: any[];

  public view: any[] = [700, 400];

  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Month';
  public showYAxisLabel = true;
  public yAxisLabel = 'US Dollars';

  public colorScheme = {
    domain: ['#1e7836', '#aa2f26']
  };

  // line, area
  public autoScale = true;

  public constructor() {
    Object.assign(this, {multi});
  }

  public onSelect(event) {
    console.log(event);
  }
}

const multi = [
  {
    'name': 'Sales',
    'series': [
      {
        'name': '01',
        'value': 720000
      },
      {
        'name': '02',
        'value': 894000
      },
      {
        'name': '03',
        'value': 910000
      },
      {
        'name': '04',
        'value': 775000
      },
      {
        'name': '05',
        'value': 620000
      },
      {
        'name': '06',
        'value': 700000
      }
    ]
  },
  {
    'name': 'Cost of Sales',
    'series': [
      {
        'name': '01',
        'value': 660000
      },
      {
        'name': '02',
        'value': 710000
      },
      {
        'name': '03',
        'value': 722000
      },
      {
        'name': '04',
        'value': 600000
      },
      {
        'name': '05',
        'value': 550000
      },
      {
        'name': '06',
        'value': 560000
      }
    ]
  }
];
