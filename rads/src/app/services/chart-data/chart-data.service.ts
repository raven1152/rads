import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChartDataService {
  public apiRoot = 'api/static';
  public apiSingle = 'single';
  public apiMulti = 'multi';
  public rows: any;

  constructor(private http: HttpClient) { }

  public async getSingleData(variation?: string): Promise<SingleData[]> {
    let apiURL: string;
    if (variation === undefined) {
      apiURL = `${this.apiRoot}/${this.apiSingle}`;
    } else {
      apiURL = `${this.apiRoot}/${this.apiSingle}/${variation}`;
    }
    await this.http.post<SingleData[]>(apiURL, '')
      .toPromise()
      .then(
        res => {
          this.rows = res;
        }
      );
    return this.rows;
  }

  public async getMultiData(variation?: string): Promise<any> {
    let apiURL: string;
    if (variation === undefined) {
      apiURL = `${this.apiRoot}/${this.apiMulti}`;
    } else {
      apiURL = `${this.apiRoot}/${this.apiMulti}/${variation}`;
    }
    await this.http.post<any>(apiURL, '')
      .toPromise()
      .then(
        res => {
          this.rows = res;
        }
      );
    return this.rows;
  }
}

export class SingleData {
  public name: string;
  public value: number;
}

export class MultiData {
  public name: string;
  public series: any[];
}
