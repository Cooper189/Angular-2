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
    news:News;
    img:string;
    title:string;
    text:string;
    constructor(private httpService: HttpService) {}
    onSubmit() {
        this.news = {
            img: this.img,
            title: this.title,
            text: this.text
        }
        console.log(this.news);
        this.httpService.sendNews(this.news).subscribe((data) => {
            console.log(data)
        });
    }
}
