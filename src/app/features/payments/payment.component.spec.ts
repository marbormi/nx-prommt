
import { Shallow } from 'shallow-render';
import { PaymentComponent } from './payment.component';
import { PaymentsModule } from './payments.module';

describe('PaymentComponentTest', () => {
  let shallow: Shallow<PaymentComponent>;

  beforeEach(() => {
    shallow = new Shallow(PaymentComponent, PaymentsModule);
  });

  it('should create', () => {
    expect(shallow).toBeTruthy();
  });


});