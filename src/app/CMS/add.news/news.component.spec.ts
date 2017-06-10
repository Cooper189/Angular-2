import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, BaseRequestOptions, Http ,ResponseOptions, Headers, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection  } from '@angular/http/testing';
import { NewsComponent} from './news.component'
import {
    RouterTestingModule
} from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

let component: NewsComponent;
describe('NewsComponent', () => {
beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [ HttpModule, RouterTestingModule , FormsModule],
    declarations: [NewsComponent],
    providers: [
      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
          return new Http(backend, options);
        },
        deps: [ MockBackend, BaseRequestOptions ]
      }
    ]
  })
  .compileComponents().then(() => {
    const fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    component.img ='pictur';
    component.title ='Main title';
    component.text ='disription';
    component.onSubmit()
  });
}));
it('should create the app', async(() => {
    const fixture = TestBed.createComponent(NewsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
it('send data to create news', async(inject([MockBackend], (backend: MockBackend) => {
    let config = backend.connectionsArray[0];
    expect(config.request.method).toEqual(RequestMethod.Post);
    expect(config.request.url).toEqual('api/main');
    expect(config.request.text()).toEqual(JSON.stringify({ img: 'pictur', title: 'Main title',text: 'disription'}));
    expect(config.request.headers.get('Content-Type')).toEqual('application/json;charset=utf-8');
})));
});