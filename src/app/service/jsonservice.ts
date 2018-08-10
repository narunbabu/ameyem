// import 'rxjs/add/observable/';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import 'rxjs/observable';

import { SubscribableOrPromise } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from '../model/Subject';

@Injectable()
export class JsonService {
  constructor(private http: HttpClient) {}

  getSubjects() {
    return this.http
      .get<any>('assets/geoservices.json')
      .toPromise()
      .then(res => <Subject[]>res.data)
      .then(data => {
        return data;
      });

    //   return this.http.get('assets/geoservices.json').map((res:Response)=>res.json());
  }
}
