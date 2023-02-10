
import { Shallow } from 'shallow-render';
import { CoreModule } from '../core.module';
import { PaymentService } from './payment.service';

describe('PaymentServiceTest', () => {
  let shallow: Shallow<PaymentService>;

  beforeEach(() => {
    shallow = new Shallow(PaymentService, CoreModule);
  });


  it('should create', () => {
    expect(shallow).toBeTruthy();
  });
});