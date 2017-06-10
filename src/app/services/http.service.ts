import { Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}
    public getData() {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
       return this.http.get('api/main', {headers:headers}).map((resp: Response) => {
           return resp;
       })
    };
    public sendNews(data) {
        const body = JSON.stringify(data);
        console.log('data', body)
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('api/main', body, {headers:headers}).map((resp: Response) => {
           return resp;
       })
    }
}