
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Shallow } from 'shallow-render';
import { PaymentsModule } from '../../payments.module';
import { ViewPaymentsTableService } from './view-payments-table.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewPaymentsTableServiceTest', () => {
  let shallow: Shallow<ViewPaymentsTableService>;

  beforeEach(() => {
    shallow = new Shallow(ViewPaymentsTableService, PaymentsModule).dontMock(NgbDropdownModule).replaceModule(RouterModule, RouterTestingModule);
  });

  it('should create', () => {
    expect(shallow).toBeTruthy();
  });

  it('should return proper columns for the payments table', async () => {

    const columns = [
      { label: 'ID' },
      {
        label: 'CREATED_DATE',
      },
      {
        label: 'PAYER_EMAIL',
      },
      {
        label: 'STATUS',
      },
      {
        label: 'AMOUNT',
      },
      {
        label: 'PAID_DATE',
      },
    ];

    expect(ViewPaymentsTableService.COLUMNS).toEqual(expect.arrayContaining(columns));
  });
});