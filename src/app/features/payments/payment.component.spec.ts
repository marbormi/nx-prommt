import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslocoModule } from '@ngneat/transloco';
import { Shallow } from 'shallow-render';
import { environment } from '../../../environments/environment.development';
import { PaymentComponent } from './payment.component';
import { PaymentsModule } from './payments.module';

describe('PaymentComponentTest', () => {
  let shallow: Shallow<PaymentComponent>;

  beforeEach(() => {
    shallow = new Shallow(PaymentComponent, PaymentsModule)
      .dontMock(NgbDropdownModule)
      .provide([{

          provide: 'environment',
          useValue: environment,

      }])
      .replaceModule(HttpClientModule, HttpClientTestingModule)
      .replaceModule(RouterModule, RouterTestingModule);
  });

  it('should create', () => {
    expect(shallow).toBeTruthy();
  });

  it('should create', async () => {
    const { find } = await shallow.dontMock(TranslocoModule).render('<payments-main></payments-main>');
    expect(find('.navbar')).toHaveFound(1);
    expect(find('nav')).toHaveFound(1);
    expect(find('button')).toHaveFound(1);
    // Table not created yet - we will need to mock the component + mock API request, etc.
    expect(find('view-payments-table')).toHaveFound(0);
  });
});
