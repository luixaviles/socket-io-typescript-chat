import { TestBed } from '@angular/core/testing';

import { StoreUserService } from './store-user.service';

describe('StoreUserService', () => {
  let service: StoreUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
