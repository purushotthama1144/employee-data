import { TestBed } from '@angular/core/testing';

import { SetemployeedataService } from './setemployeedata.service';

describe('SetemployeedataService', () => {
  let service: SetemployeedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetemployeedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
