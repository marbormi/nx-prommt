import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MutablePayment, PaymentDTO } from '../../../shared';
import { ViewPaymentsTableService } from './service/view-payments-table.service';

@Component({
  selector: 'view-payments-table',
  templateUrl: './view-payments-table.component.html',
  styleUrls: ['./view-payments-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPaymentsTableComponent {
  @Input() payments!: PaymentDTO[];

  @Output() action = new EventEmitter<MutablePayment<PaymentDTO>>();

  columns = ViewPaymentsTableService.COLUMNS;
}
