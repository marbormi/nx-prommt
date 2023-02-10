import { TestBed } from '@angular/core/testing';

import { ViewPaymentsTableService } from './view-payments-table.service';

describe('ViewPaymentsTableService', () => {
  let service: ViewPaymentsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPaymentsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
