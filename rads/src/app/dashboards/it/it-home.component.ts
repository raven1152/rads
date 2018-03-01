import { Component } from '@angular/core';

@Component({
  selector: 'app-it-home',
  templateUrl: './it-home.component.html',
  styleUrls: ['./it-home.component.scss']
})
export class ItHomeComponent {
  public single: any[];

  public showLegend = true;

  public colorScheme = {
    domain: ['#aa7828', '#611f78', '#aa2f26']
  };

  public showLabels = true;
  public explodeSlices = false;
  public doughnut = false;

  constructor() {
    Object.assign(this, {single});
  }

  onSelect(event) {
    console.log(event);
  }
}

const single = [
  {
    'name': 'Hardware',
    'value': 221
  },
  {
    'name': 'Software',
    'value': 114
  },
  {
    'name': 'External',
    'value': 42
  }
];
