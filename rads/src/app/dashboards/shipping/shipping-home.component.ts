import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-home',
  templateUrl: './shipping-home.component.html',
  styleUrls: ['./shipping-home.component.scss']
})
export class ShippingHomeComponent implements OnInit {
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit() { }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
