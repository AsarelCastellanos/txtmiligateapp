import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettingsProvider } from "../app-settings/app-settings"; 

@Injectable()
export class DataServiceProvider {
  apiUrl = this.appSettings.getUrl()
  constructor(public http: Http, public appSettings : AppSettingsProvider) {
    console.log('Service: DataService');
  }
  public getEvents() {
    return this.http.get(this.apiUrl + "pullEvents")
    .map(response => response.json())
  }

}
