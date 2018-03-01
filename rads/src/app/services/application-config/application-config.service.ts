import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationConfigService {
  public layouts: string[];

  constructor() {
    this.layouts = ['admin', 'dashboard', 'login'];
  }
}
