import {Component, OnInit} from '@angular/core';
import { HttpService} from '../../services/http.service'


@Component({
    selector: 'main',
    templateUrl: './mainTpl.html',
    providers: [HttpService]
})
export class MainPage implements OnInit {
    block: any[];
    constructor(private httpService: HttpService) {}
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.httpService.getData().subscribe((data) => {
            console.log('data',  data.json().slides);
            this.block = data.json().slides
        });
    }

   
}