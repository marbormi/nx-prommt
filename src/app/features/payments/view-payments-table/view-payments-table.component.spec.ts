
import { Shallow } from 'shallow-render';
import { PaymentsModule } from '../payments.module';
import { ViewPaymentsTableComponent } from './view-payments-table.component';

describe('<ViewPaymentsTableComponentTest', () => {
  let shallow: Shallow<ViewPaymentsTableComponent>;

  beforeEach(() => {
    shallow = new Shallow(ViewPaymentsTableComponent, PaymentsModule);
  });


  it('should create', () => {
    expect(shallow).toBeTruthy();
  });
});