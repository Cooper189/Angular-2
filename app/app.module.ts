import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {MainPage} from './pages/main.page/main.page';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent} from './about/about.component';

const route: Routes = [
    {path: '', component: MainPage},
    {path: 'about', component: AboutComponent}
]


@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(route)],
    declarations: [AppComponent, MainPage, AboutComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}