
import { Shallow } from 'shallow-render';
import { PaymentsModule } from '../payments.module';
import { PaymentModalActionsComponent } from './modal-actions.component';


describe('PaymentModalActionsComponentTest', () => {
  let shallow: Shallow<PaymentModalActionsComponent>;

  beforeEach(() => {
    shallow = new Shallow(PaymentModalActionsComponent, PaymentsModule);
  });

  it('should create', () => {
    expect(shallow).toBeTruthy();
  });
});