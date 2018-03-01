import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AbstractService {
  public ax: number;
  public by: number;

  constructor(public httpClient: HttpClient) {
    this.ax = 1;
    this.by = 2;
  }

  public async getAbstracts(): Promise<Abstract[]> {
    return this.httpClient.get<Abstract[]>('/assets/data/abstract.json')
      .toPromise()
      .then(data => {
        console.log(data);
        const rv: Abstract[] = data as Abstract[];
        return rv;
      });
  }
}

export class Abstract {
  title: string;
  location: string;
  date: string;
  abstract: string;
}
