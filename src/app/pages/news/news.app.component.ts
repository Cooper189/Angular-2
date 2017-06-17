import {Component, OnInit} from '@angular/core';
import { HttpService} from '../../services/http.service'

class Clin {
    title: string;
}

@Component({
    selector: 'news-app',
    templateUrl: './news.tpl.html',
    providers: [HttpService]
})
export class NewsApp {
    posts: any[];

    constructor(private http: HttpService) {}

    ngOnInit() {
        this.http.getData('api/news/all').subscribe((data) => {
            this.posts = data.json();
            console.log(data.json())
        });
    }
}