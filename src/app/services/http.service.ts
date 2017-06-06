import { Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}
    public getData() {
       return this.http.get('api/posts').map((resp: Response) => {
           return resp;
       })
    }
}