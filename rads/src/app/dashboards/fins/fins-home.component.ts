import { Component, OnInit } from '@angular/core';
import { Car, CarService } from '../../services/car/car.service';

@Component({
  selector: 'app-fins-home',
  templateUrl: './fins-home.component.html',
  styleUrls: ['./fins-home.component.scss']
})
export class FinsHomeComponent implements OnInit {
  cars: Car[];
  rowGroupMetadata: any;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsMedium().then(cars => {
      this.cars = cars;
      this.updateRowGroupMetaData();
    });
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};
    if (this.cars) {
      for (let i = 0; i < this.cars.length; i++) {
        let rowData = this.cars[i];
        let brand = rowData.brand;
        if (i == 0) {
          this.rowGroupMetadata[brand] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = this.cars[i - 1];
          let previousRowGroup = previousRowData.brand;
          if (brand === previousRowGroup)
            this.rowGroupMetadata[brand].size++;
          else
            this.rowGroupMetadata[brand] = { index: i, size: 1 };
        }
      }
    }
  }
}
