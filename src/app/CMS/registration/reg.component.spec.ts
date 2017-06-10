import { TestBed, async } from '@angular/core/testing';
import {
    RouterTestingModule
} from '@angular/router/testing';

import { RegComponent } from './reg.component';

describe('RegComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegComponent
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RegComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});