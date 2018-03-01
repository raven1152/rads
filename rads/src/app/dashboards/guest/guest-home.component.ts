import { Component } from '@angular/core';

@Component({
  selector: 'app-guest-home',
  templateUrl: './guest-home.component.html',
  styleUrls: ['./guest-home.component.scss']
})
export class GuestHomeComponent {
  public single: any[];
  public multi: any[];

  // public view: any[] = [700, 400];

  // options
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Date';
  public showYAxisLabel = true;
  public yAxisLabel = 'Price';

  public colorScheme = {
    domain: ['#1e7836', '#aa7828']
  };

  public autoScale = true;

  constructor() {
    Object.assign(this, {single, multi});
    this.multi.forEach(p => {
      if (p.name === 'Gas Prices ($/10MBTU)') {
        p.series.forEach(q => {
          q.value = q.value * 10;
        });
      }
    });
  }

  onSelect(event) {
    console.log(event);
  }
}

export const single = [
  {
    'name': 'Oil Price',
    'value': 61.19
  },
  {
    'name': 'Gas Price',
    'value': 2.81
  }
];

const multi = [
  {
    'name': 'Oil Prices ($/BBL)',
    'series': [
      {
        'name': '12/31/13',
        'value': 105.48
      },
      {
        'name': '01/31/14',
        'value': 102.10
      },
      {
        'name': '02/28/14',
        'value': 104.83
      },
      {
        'name': '03/31/14',
        'value': 104.04
      },
      {
        'name': '04/30/14',
        'value': 104.87
      },
      {
        'name': '05/31/14',
        'value': 105.71
      },
      {
        'name': '06/30/14',
        'value': 108.37
      },
      {
        'name': '07/31/14',
        'value': 105.23
      },
      {
        'name': '08/31/14',
        'value': 100.05
      },
      {
        'name': '09/30/14',
        'value': 95.85
      },
      {
        'name': '10/31/14',
        'value': 86.08
      },
      {
        'name': '11/30/14',
        'value': 76.99
      },
      {
        'name': '12/31/14',
        'value': 60.70
      },
      {
        'name': '01/31/15',
        'value': 47.11
      },
      {
        'name': '02/28/15',
        'value': 54.79
      },
      {
        'name': '03/31/15',
        'value': 52.83
      },
      {
        'name': '04/30/15',
        'value': 57.54
      },
      {
        'name': '05/31/15',
        'value': 62.51
      },
      {
        'name': '06/30/15',
        'value': 61.31
      },
      {
        'name': '07/31/15',
        'value': 54.34
      },
      {
        'name': '08/31/15',
        'value': 45.69
      },
      {
        'name': '09/30/15',
        'value': 46.28
      },
      {
        'name': '10/31/15',
        'value': 46.96
      },
      {
        'name': '11/30/15',
        'value': 43.11
      },
      {
        'name': '12/31/15',
        'value': 36.57
      },
      {
        'name': '01/31/16',
        'value': 29.78
      },
      {
        'name': '02/29/16',
        'value': 31.03
      },
      {
        'name': '03/31/16',
        'value': 37.34
      },
      {
        'name': '04/30/16',
        'value': 40.75
      },
      {
        'name': '05/31/16',
        'value': 45.94
      },
      {
        'name': '06/30/16',
        'value': 47.69
      },
      {
        'name': '07/31/16',
        'value': 44.13
      },
      {
        'name': '08/31/16',
        'value': 44.88
      },
      {
        'name': '09/30/16',
        'value': 45.04
      },
      {
        'name': '10/31/16',
        'value': 49.29
      },
      {
        'name': '11/30/16',
        'value': 45.26
      },
      {
        'name': '12/31/16',
        'value': 52.62
      },
      {
        'name': '01/31/17',
        'value': 53.59
      },
      {
        'name': '02/28/17',
        'value': 54.35
      },
      {
        'name': '03/31/17',
        'value': 50.90
      },
      {
        'name': '04/30/17',
        'value': 52.16
      },
      {
        'name': '05/31/17',
        'value': 49.89
      },
      {
        'name': '06/30/17',
        'value': 46.17
      },
      {
        'name': '07/31/17',
        'value': 47.66
      },
      {
        'name': '08/31/17',
        'value': 49.94
      },
      {
        'name': '09/30/17',
        'value': 52.95
      },
      {
        'name': '10/31/17',
        'value': 54.92
      },
      {
        'name': '11/30/17',
        'value': 59.93
      },
      {
        'name': '12/31/17',
        'value': 61.19
      }
    ]
  },
  {
    'name': 'Gas Prices ($/10MBTU)',
    'series': [
      {
        'name': '12/31/13',
        'value': 4.24
      },
      {
        'name': '01/31/14',
        'value': 4.71
      },
      {
        'name': '02/28/14',
        'value': 6.00
      },
      {
        'name': '03/31/14',
        'value': 4.90
      },
      {
        'name': '04/30/14',
        'value': 4.66
      },
      {
        'name': '05/31/14',
        'value': 4.58
      },
      {
        'name': '06/30/14',
        'value': 4.59
      },
      {
        'name': '07/31/14',
        'value': 4.05
      },
      {
        'name': '08/31/14',
        'value': 3.91
      },
      {
        'name': '09/30/14',
        'value': 3.92
      },
      {
        'name': '10/31/14',
        'value': 3.78
      },
      {
        'name': '11/30/14',
        'value': 4.12
      },
      {
        'name': '12/31/14',
        'value': 3.48
      },
      {
        'name': '01/31/15',
        'value': 2.99
      },
      {
        'name': '02/28/15',
        'value': 2.87
      },
      {
        'name': '03/31/15',
        'value': 2.83
      },
      {
        'name': '04/30/15',
        'value': 2.61
      },
      {
        'name': '05/31/15',
        'value': 2.85
      },
      {
        'name': '06/30/15',
        'value': 2.78
      },
      {
        'name': '07/31/15',
        'value': 2.84
      },
      {
        'name': '08/31/15',
        'value': 2.77
      },
      {
        'name': '09/30/15',
        'value': 2.66
      },
      {
        'name': '10/31/15',
        'value': 2.34
      },
      {
        'name': '11/30/15',
        'value': 2.09
      },
      {
        'name': '12/31/15',
        'value': 1.93
      },
      {
        'name': '01/31/16',
        'value': 2.28
      },
      {
        'name': '02/29/16',
        'value': 1.99
      },
      {
        'name': '03/31/16',
        'value': 1.73
      },
      {
        'name': '04/30/16',
        'value': 1.92
      },
      {
        'name': '05/31/16',
        'value': 1.92
      },
      {
        'name': '06/30/16',
        'value': 2.59
      },
      {
        'name': '07/31/16',
        'value': 2.82
      },
      {
        'name': '08/31/16',
        'value': 2.82
      },
      {
        'name': '09/30/16',
        'value': 2.99
      },
      {
        'name': '10/31/16',
        'value': 2.98
      },
      {
        'name': '11/30/16',
        'value': 2.55
      },
      {
        'name': '12/31/16',
        'value': 3.59
      },
      {
        'name': '01/31/17',
        'value': 3.30
      },
      {
        'name': '02/28/17',
        'value': 2.85
      },
      {
        'name': '03/31/17',
        'value': 2.88
      },
      {
        'name': '04/30/17',
        'value': 3.10
      },
      {
        'name': '05/31/17',
        'value': 3.15
      },
      {
        'name': '06/30/17',
        'value': 2.98
      },
      {
        'name': '07/31/17',
        'value': 2.98
      },
      {
        'name': '08/31/17',
        'value': 2.90
      },
      {
        'name': '09/30/17',
        'value': 2.98
      },
      {
        'name': '10/31/17',
        'value': 2.88
      },
      {
        'name': '11/30/17',
        'value': 3.01
      },
      {
        'name': '12/31/17',
        'value': 2.81
      }
    ]
  }
];
