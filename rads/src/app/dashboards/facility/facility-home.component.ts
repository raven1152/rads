import { Component } from '@angular/core';

@Component({
  selector: 'app-location-home',
  templateUrl: './facility-home.component.html',
  styleUrls: ['./facility-home.component.scss']
})
export class FacilityHomeComponent {
  single: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Shift';
  showYAxisLabel = true;
  yAxisLabel = 'Units Shipped';

  colorScheme = {
    domain: ['#611f78', '#C7B42C', '#aa7828']
  };

  constructor() {
    Object.assign(this, {single});
  }

  onSelect(event) {
    console.log(event);
  }
}

export const single = [
  {
    'name': '1st Shift',
    'value': 22
  },
  {
    'name': '2nd Shift',
    'value': 10
  },
  {
    'name': '3rd Shift',
    'value': 18
  }
];
