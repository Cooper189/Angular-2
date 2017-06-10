import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, BaseRequestOptions, Http ,ResponseOptions, RequestMethod} from '@angular/http';
import { MockBackend, MockConnection  } from '@angular/http/testing';
import { MainPage} from './main.page'
import {
    RouterTestingModule
} from '@angular/router/testing';

let component: MainPage;
describe('MainComponent', () => {
beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [ HttpModule, RouterTestingModule ],
    declarations: [MainPage],
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
    const fixture = TestBed.createComponent(MainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
}));
it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MainPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('get news data', async(inject([MockBackend], (backend: MockBackend) => {
    let req = backend.connectionsArray[0];
    expect(req.request.method).toEqual(RequestMethod.Get);
    expect(req.request.url).toEqual('api/main');
    expect(req.request.headers.get('Content-Type')).toEqual('application/json;charset=utf-8');
  })));
});
