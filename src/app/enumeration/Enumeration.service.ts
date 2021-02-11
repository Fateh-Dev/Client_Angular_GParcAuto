import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../baseUrl';

@Injectable({
  providedIn: 'root',
})
export class EnumerationService {
  recievedEnumerations: any = {};
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getEnums() {
     this.http
      .get(AppSettings.API_ENDPOINT + '/api/app/enumeration')
      .subscribe((e) => (this.recievedEnumerations = e));
  }
}
