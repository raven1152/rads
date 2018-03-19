import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Car {
  vin?;
  year?;
  brand?;
  color?;
  price?;
  saleDate?;
}

@Injectable()
export class CarService {

  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get<any>('assets/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => data);
  }

  getCarsMedium() {
    return this.http.get<any>('assets/data/cars-medium.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => data);
  }

  getCarsLarge() {
    return this.http.get<any>('assets/data/cars-large.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => data);
  }

  getCarsHuge() {
    return this.http.get<any>('assets/data/cars-huge.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => data);
  }
}
