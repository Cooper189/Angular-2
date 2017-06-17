import {Component} from '@angular/core';
import { HttpService} from '../../services/http.service'

class AddNews {
    img:string;
    title: string;
    body: string;
    year: string;
}

@Component({
    selector: 'add-news',
    templateUrl: './page.ypl.html',
    providers : [HttpService]
})
export class PageComponent {
    addNews: AddNews = new AddNews;

    constructor(private http: HttpService) {}

    public addArticle() {
        this.http.sendNews(this.addNews, 'api/news').subscribe((data) => {
            console.log(data)
        });
    }

}
