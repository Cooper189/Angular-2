import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {MainPage} from './pages/main.page/main.page';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './pages/about/about.component';
import {RegComponent} from './CMS/registration/reg.component';
import {BasicComponent} from './pages/basic/basic.component';
import {NewsComponent} from './CMS/add.news/news.component';
import {PageComponent} from './CMS/add.page/page.component';
import { HttpModule} from '@angular/http'

const regRote: Routes = [
    {path: '', component: NewsComponent},
    {path: 'page', component: PageComponent}
]

const mainRout: Routes = [
    {path: '', component: MainPage},
    {path: 'about', component: AboutComponent}
]
const route: Routes = [
    {path: '', component: BasicComponent, children: mainRout},
    {path: 'ng-admin', component: RegComponent, children: regRote}
]


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(route), HttpModule],
    declarations: [AppComponent, MainPage, AboutComponent, BasicComponent, RegComponent, NewsComponent,PageComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}