/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: AuthService, useValue: { handleAuthentication: () => {}, isAuthenticated: () => {} } },
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
