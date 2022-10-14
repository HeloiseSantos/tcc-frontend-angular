import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './page-title-data.model';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Home',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
