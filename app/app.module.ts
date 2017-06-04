import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {MainPage} from './pages/main.page/main.page';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './about/about.component';
import {RegComponent} from './pages/registration/reg.component';
import {BasicComponent} from './pages/basic/basic.component';
import {NewsComponent} from './pages/add.news/news.component';
import {PageComponent} from './pages/add.page/page.component';

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
    imports: [BrowserModule, RouterModule.forRoot(route)],
    declarations: [AppComponent, MainPage, AboutComponent, BasicComponent, RegComponent, NewsComponent,PageComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}