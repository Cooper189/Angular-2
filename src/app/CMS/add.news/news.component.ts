import {Component} from '@angular/core';
import {HttpService} from '../../services/http.service';
import { NgForm} from '@angular/forms';

class News {
    img:string;
    title:string;
    text:string;
}

@Component({
    selector: 'add-news',
    templateUrl: './news.tpl.html',
    providers: [HttpService]
})
export class NewsComponent {

    news: News = new News;

    constructor(private httpService: HttpService) {}
    
    onSubmit() {
        console.log(this);
        this.httpService.sendNews(this.news).subscribe((data) => {
            console.log(data)
        });
    }
}
