import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { PaymentDTO } from '../../../shared';
import { ViewPaymentsTableService } from './service/view-payments-table.service';

@Component({
  selector: 'view-payments-table',
  templateUrl: './view-payments-table.component.html',
  styleUrls: ['./view-payments-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewPaymentsTableComponent {
  @Input() payments!: PaymentDTO[];

  @Output() deletePayment = new EventEmitter<PaymentDTO>();

  columns = ViewPaymentsTableService.COLUMNS;
}
