import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers-home',
  templateUrl: './headers-home.component.html',
  styleUrls: ['./headers-home.component.scss']
})
export class HeadersHomeComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
